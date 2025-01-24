const taskinput = document.getElementById("task-input");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist = document.getElementById("task-list");

const tasks = [
    { title: "one", completed: false },
    { title: "two", completed: false },
    { title: "three", completed: false, deadline: "2021-10-10" },
];

addtaskbtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Task added", tasks);
    addTaskToList(taskinput.value, tasks);
    taskinput.value = "";
    console.log("Task added", tasks);
    renderTasks();
});

const addTaskToList = (task, list) => {
    if (task === "") {
        return;
    }
    if (list.includes(task)) {
        return;
    }
    if (task.length < 1) {
        return;
    }
    list.unshift({ title: task, completed: false });
};

const renderTasks = () => {
    tasklist.innerHTML = "";
    tasks
        // .filter((task) => !task.completed)
        // .sort((a, b) => a.deadline - b.deadline)
        .forEach((task, index) => {
            const listItemElement = createTaskElement(task, index); // <li></li>
            tasklist.appendChild(listItemElement);
        });
};
const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

const completeTask = (index) => {
    tasks[index].completed = true;
    renderTasks();
};

const updateDeadline = (event) => {
    console.log("updateDeadline", event);
    const index = event.target.id.split("-")[1];
    const newDeadline = event.target.value;
    tasks[index].deadline = newDeadline;
    renderTasks();
};

const createTaskElement = (task, index) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("todo-item");

    if (task.completed) {
        taskElement.classList.add("completed");
    }

    const deafaultdeadline = new Date().toISOString().split("T")[0];

    taskElement.innerHTML = `
    <span class="task text">${task.title}</span>
    <input id="deadline-${index}" index=${index} type="date" class="deadline" value="${
        task.deadline ?? deafaultdeadline
    }" onchange="updateDeadline(event)" />
    <button class="task complete" onclick="completeTask(${index})">
        <i class="fa fa-check"></i>
    </button>
    <button class="task delete" onclick="deleteTask(${index})">
        <i class="fa fa-trash-o"></i>
    </button>
    `;
    return taskElement;
};
