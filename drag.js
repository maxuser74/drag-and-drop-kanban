const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");
const svgDiv = document.getElementById("svg_div"); // Get the svg_div element

// Allow the svg_div to be a drop zone
svgDiv.addEventListener("dragover", (e) => {
  e.preventDefault(); // This is necessary to allow dropping.
  console.log("dragover svg_div");
});

// Handle the drop event on the svg_div to remove the task
svgDiv.addEventListener("drop", () => {
  const draggingTask = document.querySelector(".is-dragging");
  if (draggingTask) {
    draggingTask.remove(); // Remove the task from the document
  }
  console.log("Task deleted");
});

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent the default to allow dropping

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = [...zone.querySelectorAll(".task:not(.is-dragging)")];

  return els.reduce(
    (closest, task) => {
      const box = task.getBoundingClientRect();
      const offset = mouseY - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: task };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};
