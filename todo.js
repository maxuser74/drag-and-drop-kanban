const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const add_btn = document.getElementById("plus_btn");
var elements = document.getElementsByClassName("task");

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


var myOnChanged = function() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";

};

function add_task(){

  const newTask = document.createElement("textarea");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.setAttribute("rows", "1");
  
  newTask.innerText = "new task";

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";

};

for (var i = 0; i < elements.length; i++) {
 elements[i].addEventListener('input', myOnChanged, false);
 elements[i].style.height = "auto";
 elements[i].style.height = elements[i].scrollHeight + "px";
 // console.log(elements[i].scrollHeight);
};

add_btn.addEventListener("click", add_task);



