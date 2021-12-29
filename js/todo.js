//Declaracion de variables
let tasks = [];
let userNameSpan = document.querySelector('#userNameSpan');
let taskNameInput = document.querySelector('#taskNameInput');
let taskStartInput = document.querySelector('#taskStartInput');
let taskFinishInput = document.querySelector('#taskFinishInput');
let taskPrioInput = document.querySelector('#taskPrioInput');
let tasksDiv = document.querySelector('#tasksDiv');
//codigo
addTaskButton.addEventListener('click',()=>{
    let name = taskNameInput.value;
    let startDate = taskStartInput.value;
    let finishDate = taskFinishInput.value;
    let priority = taskPrioInput.value;
    let task = new Task(name,startDate,finishDate,priority);
    saveTask(task);
});


if(localStorage.getItem('userName') != null){
    userNameSpan.textContent = 'USUARIO '+localStorage.getItem('userName');
    userNameSpan.classList.add('mark');
    userNameSpan.classList.add('text-dark');
}

if(localStorage.getItem('tasks') != null){
    tasks = JSON.parse(localStorage.getItem('tasks'));
    showTasks(tasks);
}else{
    tasks = []
    showTasks(tasks);
}


function showTasks(tasks) {
    tasksDiv.textContent = '';
    if(tasks.length == 0){
        tasksDiv.textContent = 'No hay tareas';
        return;
    }
    let mainUl = document.createElement('ul');
    mainUl.classList.add('list-group');
    tasks.forEach((item, i) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add('list-group-item-dark');
        li.textContent = 'Nombre: ' + item._name;
        let ul = document.createElement('ul');
        ul.classList.add('list-group');
        ul.classList.add('list-group-horizontal');
        ul.innerHTML = `<li class="list-group-item"> Fecha de inicio: ${item._startDate}</li>
                        <li class="list-group-item">Fecha de termino: ${item._finishDate}</li>
                        <li class="list-group-item"> Prioridad: ${item._priority}</li>
                        <button type="submit" class="btn btn-danger me-3 ms-3" onclick="deleteTask(${i})">Eliminar</button>
                        <a class="btn btn-primary" href="updateTask.html?id=${i}">Modificar</a>
                        `;
        li.appendChild(ul);
        mainUl.appendChild(li);
    });
    tasksDiv.appendChild(mainUl);
}

function saveTask(task) {
    if(tasks.length == 0){
        tasks = [];
        tasks[0] = task;
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(id,1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    showTasks(JSON.parse(localStorage.getItem('tasks')));
}

class Task{
    constructor(name,startDate,finishDate,priority){
        this.name = name;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.priority = priority;
    }
    set name(name) {
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set startDate(startDate){
        this._startDate = startDate;
    }
    get startDate() {
        return this._startDate;
    }
    set finishDate(finishDate) {
        this._finishDate = finishDate;
    }
    get finishDate() {
        return this._finishDate;
    }
    set priority(priority){
        this._priority = priority;
    }
    get priority(){
        return this._priority;
    }
}
