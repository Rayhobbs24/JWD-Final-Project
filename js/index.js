const manager = new TaskManager();
console.log(manager);

const anotherManager = new TaskManager();
anotherManager.addTask(
  "Do laundry",
  "Wash sheets only",
  "Tom",
  "2022-12-23",
  "TODO"
);
console.log(anotherManager);

// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");

// Add an 'onsubmit' event listener
newTaskForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Select the inputs
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDueDate = document.querySelector("#newTaskDueDate");
  const errorMessage = document.querySelector("#alertMessage");

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;
  if (!validFormFieldInput(name)) {
    errorMessage.innerHTML = "Invalid name input";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

function validFormFieldInput(data) {
  return data !== null && data !== "";
}
