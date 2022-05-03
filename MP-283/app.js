const main = document.getElementById("main-market");
const selectProducts = document.getElementById("select-products");
window.addEventListener('load', loadSelect);

function loadSelect() {
    products.map(element=>{
        const opt = document.createElement("option");
        opt.textContent = element.name;
        opt.value = element.name;
        selectProducts.appendChild(opt);

    });
}

products.map(element =>{console.log(element.name) });

// const title = document.createElement('h1');
// title.textContent = "saludo grupo"
// title.style.color = 'blue'
// main.appendChild(title);