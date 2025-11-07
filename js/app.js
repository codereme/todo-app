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
  console.log(task);
}

init();
