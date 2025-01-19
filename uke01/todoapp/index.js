const taskinput = document.getElementById("task-input");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist = document.getElementById("task-list");

const tasks = [
    { title: "one", completed: false, deadline: "2021-10-10" },
    { title: "two", completed: false },
    { title: "three", completed: true },
];

addtaskbtn.addEventListener("click", (event) => {
    event.preventDefault();
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
        .filter((task) => !task.completed)
        .sort((a, b) => a.deadline - b.deadline)
        .forEach((task, index) => {
            const listItemElement = createTaskElement(task, index); // <li></li>
            tasklist.appendChild(listItemElement);
        });
    tasks
        .filter((task) => task.completed)
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

const createTaskElement = (task, index) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("todo-item");
    taskElement.classList.add(task.completed ? "completed" : "pending");
    taskElement.innerHTML = `
    <span class="task text">${task.title}</span>
    <button class="task deadline" onclick="completeTask(${index})">
        <i class="fa fa-clock-o"></i>
    </button>
    <button class="task complete" onclick="completeTask(${index})">
        <i class="fa fa-check"></i>
    </button>
    <button class="task delete" onclick="deleteTask(${index})">
        <i class="fa fa-trash-o"></i>
    </button>
    `;
    return taskElement;
};
