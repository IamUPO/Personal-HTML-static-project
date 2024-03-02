// Task class represents a single task with title, description, image, and completion status
class Task {
    constructor(title, description, image) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.completed = false; // Default completion status is false
    }
}

// ToDoApp class manages the overall application
class ToDoApp {
    constructor() {
        this.tasks = []; // Array to store tasks
        this.taskForm = document.getElementById('taskForm');
        this.taskList = document.getElementById('taskList');
        this.taskTitleInput = document.getElementById('taskTitle');
        this.taskDescriptionInput = document.getElementById('taskDescription');
        this.taskImageInput = document.getElementById('taskImage');
        this.imagePreview = document.getElementById('imagePreview');

        // Event listener for form submission
        this.taskForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTask();
        });
    }

    // Method to add a new task
    addTask() {
        const title = this.taskTitleInput.value;
        const description = this.taskDescriptionInput.value;
        const image = this.imagePreview.src;

        // Check if the title is not empty
        if (title.trim() !== '') {
            const newTask = new Task(title, description, image);
            this.tasks.push(newTask);
            this.renderTasks(); // Update the task list
            this.clearForm(); // Clear the form inputs
        }
    }

    // Method to render tasks in the task list
    renderTasks() {
        this.taskList.innerHTML = ''; // Clear the existing task list

        this.tasks.forEach((task, index) => {
            // Create a new task item
            const listItem = document.createElement('div');
            listItem.className = 'task-item'; // Add a class to the div
            listItem.innerHTML = `
                <h3>${task.title}</h3>
                ${task.description ? `<p>${task.description}</p>` : ''}
                ${task.image ? `<img src="${task.image}" alt="Task Image" width="50" class="taskImagePreview" />` : ''}
                <button onclick="toDoApp.completeTask(${index})" class="completeButton" ${task.completed ? 'disabled' : ''}>Complete<i class="fa-check-circle fa-fw fas"></i></button>
                <button onclick="toDoApp.deleteTask(${index})" class="deleteButton">Delete<i class="fa-fw fa-trash-alt fas"></i></button>
            `;
            this.taskList.appendChild(listItem); // Append the task item to the task list
        });
    }

    // Method to mark a task as completed
    completeTask(index) {
        this.tasks[index].completed = true;
        this.renderTasks(); // Update the task list
    }

    // Method to delete a task
    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks(); // Update the task list
    }

    // Method to clear the form inputs
    clearForm() {
        this.taskTitleInput.value = '';
        this.taskDescriptionInput.value = '';
        this.imagePreview.src = '';
        this.taskImageInput.value = '';
    }
}

// Instantiate the ToDoApp class
const toDoApp = new ToDoApp();

// Function to preview selected image
function previewImage() {
    const fileInput = document.getElementById('taskImage');
    const imagePreview = document.getElementById('imagePreview');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}
