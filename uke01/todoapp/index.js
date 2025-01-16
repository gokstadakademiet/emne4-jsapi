const taskinput = document.getElementById("task-input");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist = document.getElementById("task-list");

const tasks = [];

addtaskbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const task = taskinput.value;
    tasks.unshift(task);
    console.log(tasks);
    taskinput.value = "";
    addTasks();
});

const createTaskElement = (task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("todo-item");
    taskItem.innerHTML = `
    <span class='task text'>${task}</span>
    <button class='task complete'>
        <i class='fa fa-check'></i>
    </button>
    <button class='task delete'>
        <i class='fa fa-trash-o'></i>
    </button>
    `;
    tasklist.appendChild(taskItem);
};

const renderTasksList = () => {
    tasklist.innerHTML = "";
    tasks.forEach((task) => {
        createTask(task);
    });
};
