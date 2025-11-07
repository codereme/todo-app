import { Task } from "./models/Task.js";

let tasks = [];

function init() {
  setupAddEventListeners();
}

function setupAddEventListeners() {
  const form = document.getElementById("taskForm");
  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text) {
    addTask(text);
    input.value = "";
  }
}

function addTask(text) {
  const task = new Task(text);
  tasks.push(task);
  displayTasks(task);
}

function displayTasks(task) {
  const tasksList = document.getElementById("taskList");

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";
  taskItem.setAttribute("data-task-id", task.id); // for delete task

  const taskText = document.createElement("p");
  taskText.className = "task-text";
  taskText.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "-";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  tasksList.appendChild(taskItem);
}

function deleteTask(taskId) {
  // Remove from tasks array - keep only tasks that don't match the ID to delete
  tasks = tasks.filter((task) => task.id !== taskId);

  // Remove from DOM
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  console.log("elemento", taskElement);

  if (taskElement) {
    taskElement.remove();
  }
}

init();
