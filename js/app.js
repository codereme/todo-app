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

  const taskText = document.createElement("p");
  taskText.className = "task-text";
  taskText.textContent = task.text;

  taskItem.appendChild(taskText);
  tasksList.appendChild(taskItem);
}

init();
