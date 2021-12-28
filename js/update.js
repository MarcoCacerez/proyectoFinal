function getId() {
    let url = new URLSearchParams(window.location.search);
    let id = url.get('id');
    return id;
}

//Declaracion de variables
let id = parseInt(getId())
let taskNameInput = document.querySelector('#taskNameInput');
let taskStartInput = document.querySelector('#taskStartInput');
let taskFinishInput = document.querySelector('#taskFinishInput');
let taskPrioInput = document.querySelector('#taskPrioInput');
let updateTaskButton = document.querySelector('#updateTaskButton');

//Codigo
try{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let task = tasks[id];

    taskNameInput.value = task._name;
    taskStartInput.value = task._startDate;
    taskFinishInput.value = task._finishDate;
    taskPrioInput.value = task._priority;

    updateTaskButton.addEventListener('click',()=>{
        task._name = taskNameInput.value;
        task._startDate = taskStartInput.value;
        task._finishDate = taskFinishInput.value;
        task._priority = taskPrioInput.value;
        tasks[id] = task;
        localStorage.setItem('tasks',JSON.stringify(tasks));
    });
}catch(e){
    location.href = './todo.html';
}