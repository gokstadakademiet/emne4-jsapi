const taskinput = document.getElementById("task-input");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist = document.getElementById("task-list");

// * Liste som skal inneholde alle oppgaver, denne listen skal kun innholde strenger av oppgavene, ikke hele dom elementer
const tasks = [];

// * Eventlistner knyttet til [+] knappen som legger til oppgaver i listen over
addtaskbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const task = taskinput.value;
    tasks.unshift(task);
    console.log(tasks);
    taskinput.value = "";
    renderTasksList();
});

// * Funksjon for å opprette HTML elementer for hver oppgave i listen med oppgave tekst, ferdigstill og slett knapper.
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

// * Funksjon for å rendere alle oppgavene i listen over oppgaver til DOM elementer
const renderTasksList = () => {
    tasklist.innerHTML = "";
    tasks.forEach((task) => {
        createTaskElement(task);
    });
};
