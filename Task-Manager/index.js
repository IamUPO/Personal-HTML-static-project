// app.js
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = 'Pending';
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    displayTasks() {
        const taskListElement = document.getElementById('taskList');
        taskListElement.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
                <button onclick="handleDelete(${index})">Delete</button>
            `;
            taskListElement.appendChild(taskElement);
        });
    }
}

const taskManager = new TaskManager();

function handleFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const newTask = new Task(titleInput.value, descriptionInput.value);
    taskManager.addTask(newTask);
    taskManager.displayTasks();

    titleInput.value = '';
    descriptionInput.value = '';
}

function handleDelete(index) {
    taskManager.deleteTask(index);
    taskManager.displayTasks();
}

const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', handleFormSubmit);

// Initial display of tasks
taskManager.displayTasks();
