"use strict";

window.addEventListener("load", start);

async function start(){
    const response = await fetch(`./users.json`);
    const data = await response.json();
    console.log(data);
    showUsers(data);
    countUsers(data);
}

function showUsers(users){

    for(const user of users){
        document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*html*/`
        <p>${user.name} ${user.role}</p>
        `);
    }
}

function countUsers(users){
    let adminCounter = 0;
    let userCounter = 0;
    let guestCounter = 0;
    users.forEach(user => {
        if(user.role === "admin"){
            adminCounter++;
        } else if (user.role === "user"){
            userCounter++;
        } else{
            guestCounter++;
        }
    });
    document.querySelector("#admin-count").textContent = adminCounter;
    document.querySelector("#user-count").textContent = userCounter;
    document.querySelector("#guest-count").textContent = guestCounter;

}