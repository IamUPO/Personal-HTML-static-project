class Task {
    constructor(title, description, imageUrl) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.completed = false;
    }
}

let selectedImage = null;

function previewImage() {
    const fileInput = document.getElementById('taskImage');
    const imagePreview = document.getElementById('imagePreview');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
        selectedImage = file;
    }
}

function addTask() {
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title !== '' && description !== '') {
        const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : null;
        const task = new Task(title, description, imageUrl);
        tasks.push(task);
        displayTasks();
        taskTitle.value = '';
        taskDescription.value = '';
        document.getElementById('taskImage').value = ''; // Clear file input
        document.getElementById('imagePreview').style.display = 'none'; // Hide image preview
        selectedImage = null; // Reset selected image
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-info">
                <h2>${task.title}</h2>
                ${task.imageUrl ? `<img src="${task.imageUrl}" alt="${task.title}" />` : ''}
                <p>${task.description}</p>
            </div>
            <div class="task-actions">
                <button onclick="completeTask(${index})">Complete</button>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="updateTask(${index})">Update</button>
            </div>
        `;
        li.classList.add('task-item');
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function updateTask(index) {
    const newDescription = prompt('Enter the updated task description:');
    if (newDescription !== null) {
        tasks[index].description = newDescription;
        displayTasks();
    }
}

const tasks = [];

window.onload = displayTasks;
