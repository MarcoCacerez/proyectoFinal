//Declaracion de variables
let apiDiv = document.querySelector('#apiDiv');
let userNameSpan = document.querySelector('#userNameSpan');
//Codigo
if(localStorage.getItem('userName') != null){
    userNameSpan.textContent = 'USUARIO '+localStorage.getItem('userName');
    userNameSpan.classList.add('mark');
    userNameSpan.classList.add('text-dark');
}

sendButton.addEventListener('click',()=>{getActivity()});
function getActivity() {
    let status = document.querySelector('#participantsInput').validity.valid;
    if(status){
        let num = document.getElementById('participantsInput').value;
        let url = `http://www.boredapi.com/api/activity?participants=${num}`;
        fetch(url).then(response => response.json()).then(data => showActivity(data));
    }else{
        alert('No has ingresado un dato valido');
    }
    
}
function showActivity({activity,type,price,accessibility}) {
    
    apiDiv.innerHTML += `<div class="card text-dark col-md-4 mx-auto mb-3" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">Nombre ${activity}</h5>
                                <p class="card-text">Tipo ${type}</p>
                                <p class="card-text">Precio ${price}</p>
                                <p class="card-text">Accesibilidad ${accessibility}</p>
                            </div>
                        </div>`;
}
