if(localStorage.getItem('userName') != null){
    userNameSpan.textContent = 'USUARIO '+localStorage.getItem('userName');
    userNameSpan.classList.add('mark');
    userNameSpan.classList.add('text-dark');
}

fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
.then(response => response.json())
.then(data => showData(data))
;

function showData(data) {
    let tbody = apiDiv.querySelector('tbody');

    data.forEach((item,i) => {
        if(item.category == "lipstick" && item.price >= 25){
            let tr = document.createElement('tr');
            let name = document.createElement('th');
            let brand = document.createElement('th');
            let price = document.createElement('th');
            let description = document.createElement('th');
            name.textContent = item.name;
            brand.textContent = item.brand;
            price.textContent = item.price;
            description.textContent = item.description;
            tr.appendChild(name);
            tr.appendChild(brand);
            tr.appendChild(price);
            tr.appendChild(description);
            tbody.appendChild(tr);
        }
    });
}

