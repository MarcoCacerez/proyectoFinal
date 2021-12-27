if(localStorage.getItem('userName') != null){
    userNameSpan.textContent = 'USUARIO '+localStorage.getItem('userName');
    userNameSpan.classList.add('mark');
    userNameSpan.classList.add('text-dark');
    userFormDiv.classList.add('visually-hidden');
    userInfoDiv.classList.remove('visually-hidden');
    showUserInfo();
}

function showUserInfo() {
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
});