document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
});

class Task {
    constructor(title, description, dueDateTime) {
        this.title = title;
        this.description = description;
        this.dueDateTime = dueDateTime;
        this.completed = false;
    }
}

class ToDoApp {
    constructor() {
        this.tasks = [];
        this.taskForm = document.getElementById('taskForm');
        this.taskList = document.getElementById('taskList');
        this.taskTitleInput = document.getElementById('taskTitle');
        this.taskDescriptionInput = document.getElementById('taskDescription');

        this.taskForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTask();
        });
    }

    addTask() {
        const title = this.taskTitleInput.value;
        const description = this.taskDescriptionInput.value;
        const dueDateTime = document.getElementById('taskDateTime').value;

        if (title.trim() !== '' && dueDateTime.trim() !== '') {
            const newTask = new Task(title, description, dueDateTime);
            this.tasks.push(newTask);
            this.renderTasks();
            this.clearForm();
        }
    }

    renderTasks() {
        this.taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'task-item fade-up';
            listItem.innerHTML = `
                <h3>${task.title}</h3>
                ${task.description ? `<p>${task.description}</p>` : ''}
                ${task.dueDateTime ? `<span><i class="fa-clock fa-fw fa-sm fas"></i> Due date: ${task.dueDateTime}</span>` : ''}
                <button onclick="toDoApp.completeTask(${index})" class="completeButton" ${task.completed ? 'disabled' : ''}>Complete<i class="fa-check-circle fa-fw fas"></i></button>
                <button onclick="toDoApp.deleteTask(${index})" class="deleteButton">Delete<i class="fa-fw fa-trash-alt fas"></i></button>
            `;
            this.taskList.appendChild(listItem);
        });
    }

    completeTask(index) {
        this.tasks[index].completed = true;
        this.renderTasks();
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    clearForm() {
        this.taskTitleInput.value = '';
        this.taskDescriptionInput.value = '';
        document.getElementById('taskDateTime').value = '';
    }
}

const toDoApp = new ToDoApp();