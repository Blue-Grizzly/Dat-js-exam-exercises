"use strict";

window.addEventListener("load", start);

async function start(){
    const response = await fetch(`./users.json`);
    const data = await response.json();
    showusers(data);
}

function showusers(data){

    for(const user of data){
    if(user.role === "admin"){
        document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*html*/`
        <p>${user.name} ${isActive(user)} ${user.role}</p>
        `);
    }
}
}

function isActive(user){
    if(user.active === true){
        return `Active`;
    } else{
        return `Inactive`;
    }
}