const todoLane = document.getElementById("todo-lane");
const doingLane = document.getElementById("doing-lane");
const doneLane = document.getElementById("done-lane");
const board = document.getElementById("board");

const add_btn = document.getElementById("svg_div2");
var elements = document.getElementsByClassName("task");

var todo_elements = [];
var doing_elements = [];
var done_elements = [];

var myOnChanged = function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
  populate_data();
};

window.addEventListener("resize", () => {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.height = "auto";
    elements[i].style.height = elements[i].scrollHeight + "px";
  }
});

function add_task() {
  const newTask = document.createElement("textarea");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.setAttribute("rows", "1");

  newTask.innerHTML = "New task";

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);
  newTask.addEventListener("input", myOnChanged, false);

  populate_data(newTask);
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", myOnChanged, false);
  elements[i].style.height = "auto";
  elements[i].spellcheck = false;
  elements[i].style.height = elements[i].scrollHeight + "px";
}

add_btn.addEventListener("click", add_task);

function populate_data() {
  todo_elements = [];
  doing_elements = [];
  done_elements = [];

  // TODO:
  var children = todoLane.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].tagName === "TEXTAREA") {
      todo_elements.push(children[i].value);
    }
  }

  // DOING:
  var children = doingLane.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].tagName === "TEXTAREA") {
      doing_elements.push(children[i].value);
    }
  }

  // DONE:
  var children = doneLane.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].tagName === "TEXTAREA") {
      done_elements.push(children[i].value);
    }
  }

  console.log("TODO Elements", todo_elements);
  console.log("DOING Elements", doing_elements);
  console.log("DONE Elements", done_elements);
}

todoLane.addEventListener("drop", () => {
  console.log("TODO");
  populate_data();
});

doingLane.addEventListener("drop", () => {
  populate_data();
});

doneLane.addEventListener("drop", () => {
  populate_data();
});
