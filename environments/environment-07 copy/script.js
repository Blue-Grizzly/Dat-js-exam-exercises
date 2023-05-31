"use strict";

let students = [];

window.addEventListener("load", start);

function start(){
    document.querySelector("#create-student-form").addEventListener("submit", submitForm);
    showStudents(students);
}

function submitForm(event){
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.name.value;
    const age = form.age.value;

    const student = {name: name, email: email, age: age};
    students.push(student);
    showStudents(students);

}


function showStudents(students){
    document.querySelector("#students-table-body").innerHTML = "";
    const adultStudents = students.filter(student => student.age>=18);
    adultStudents.sort((a, b) => a.name.localeCompare(b.name));
    for(const student of adultStudents){
    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", /*html*/`
    <tr>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.age}</td>
    </tr>
    `);
    }
}
