const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const add_btn = document.getElementById("plus_btn");
const modal_add = document.getElementById("add_task");

var elements = document.getElementsByClassName("task");

const modal_input = document.getElementById("modal_input");


/*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";
});

*/


var myFunction = function() {
    var attribute = this.innerHTML;
    console.log(attribute);
    modal_input.value = attribute;
    modal_add.style.display="block";

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('dblclick', myFunction, false);
}



$("#plus_btn").click(function(){
  modal_input.value = "";
  modal_add.style.display="block";
});

$("#modal_close_btn_1").click(function(){
  modal_add.style.display="none";
});

$("#modal_close_btn_2").click(function(){
  modal_add.style.display="none";
});


