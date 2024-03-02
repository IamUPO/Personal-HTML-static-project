class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
        const task = new Task(taskDescription);
        tasks.push(task);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task.description} <button onclick="completeTask(${index})">Complete</button>`;
        taskList.appendChild(li);
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    displayTasks();
}

const tasks = [];

window.onload = displayTasks;
