//Declaracion de variables
let userNameSpan = document.querySelector('#userNameSpan');
let userFormDiv = document.querySelector('#userFormDiv');
let userInfoDiv = document.querySelector('#userInfoDiv');
let nameInput = document.querySelector('#nameInput');
let lastNameInput = document.querySelector('#lastNameInput');
let userNameInput = document.querySelector('#userNameInput');
let emailInput = document.querySelector('#emailInput');

if(localStorage.getItem('userName') != null){
    userNameSpan.textContent = 'USUARIO '+localStorage.getItem('userName');
    userNameSpan.classList.add('mark');
    userNameSpan.classList.add('text-dark');
    userFormDiv.classList.add('visually-hidden');
    userInfoDiv.classList.remove('visually-hidden');
    showUserInfo();
}

function showUserInfo() {
    let nameP = document.querySelector('#nameP');
    let lastNameP = document.querySelector('#lastNameP');
    let userNameP = document.querySelector('#userNameP');
    let emailP = document.querySelector('#emailP');

    nameP.textContent = localStorage.getItem('name');
    lastNameP.textContent = localStorage.getItem('lastName');
    userNameP.textContent = localStorage.getItem('userName');
    emailP.textContent = localStorage.getItem('email');
}

saveButton.addEventListener('click',()=>{
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('lastName',lastNameInput.value);
    localStorage.setItem('userName',userNameInput.value);
    localStorage.setItem('email',emailInput.value);
});

deleteUserButton.addEventListener('click',()=>{
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
});

updateUserButton.addEventListener('click',()=>{
    userFormDiv.classList.remove('visually-hidden');
    nameInput.value = localStorage.getItem('name');
    lastNameInput.value = localStorage.getItem('lastName');
    userNameInput.value = localStorage.getItem('userName')
    emailInput.value = localStorage.getItem('email');
});