document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
  });
  
  function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
  
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
  
      taskList.appendChild(li);
      saveTask(taskText);
      taskInput.value = "";
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const li = button.parentElement;
    taskList.removeChild(li);
    removeTaskFromStorage(li.querySelector("span").innerText);
  }
  
  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");
  
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(li);
    });
  }
  