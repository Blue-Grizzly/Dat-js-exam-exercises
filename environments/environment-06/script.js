"use strict";

window.addEventListener("load", start);

let products = [];
let basket = [];

function start(){
    showProducts();

}


async function showProducts(){
    const res = await fetch(`./products.json`);
    products = await res.json();

    for(const product of products){
        document.querySelector("#products").insertAdjacentHTML("beforeend", 
        `<article>
        <h3>${product.name}</h3>
        <p>vægt: ${product.weight} g</p>
        <p>pris: ${product.price},-</p>
        <button>Læg i kurv</button>
     </article>`
        );
        document.querySelector("#products article:last-child button").addEventListener("click", ()=> {
            basket.push(product)
            updateBasket();
        });
    }

}

function updateBasket(){
    let productsInBasket = 0;
    let productTypes = new Set(basket).size;
    let totalPrice = 0;
    let totalWeight = 0;
    console.log(productTypes);

    for(const product of basket){
        productsInBasket++;
        totalPrice = totalPrice+product.price;
        totalWeight = totalWeight+product.weight;
    }
    document.querySelector("#total-in-basket").textContent = productsInBasket;
    document.querySelector("#total-products").textContent = productTypes;
    document.querySelector("#total-price").textContent = totalPrice;
    document.querySelector("#total-weight").textContent = totalWeight;


}