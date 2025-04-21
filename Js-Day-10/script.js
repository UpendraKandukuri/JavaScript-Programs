
// Refactored To-Do List Application for Readability(JS-Day-7)

const btn = document.getElementById("btn");
const ul = document.getElementById("taskList");
const input = document.getElementById("input");

// Load tasks from localStorage when page loads
let tasks = loadTasksFromLocalStorage();

// When "Add Task" button is clicked
btn.addEventListener('click', () => {
    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Task cannot be empty");
        return;
    }

    // Add new task to the list
    tasks.push({ name: taskName, isComplete: false });
    input.value = "";

    saveTasksToLocalStorage();
    showTasks();
});

// Function to show all tasks
function showTasks() {
    ul.innerHTML = ""; // Clear old list

    // Loop through tasks and display each one
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // Create checkbox for completion toggle
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.isComplete;

        // When checkbox is clicked
        checkbox.addEventListener("change", () => {
            task.isComplete = checkbox.checked;
            saveTasksToLocalStorage();
            showTasks();
        });

        // Set task text style
        li.style.textDecoration = task.isComplete ? "line-through" : "none";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // When delete button is clicked
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1); // Remove the task
            saveTasksToLocalStorage();
            showTasks();
        });

        // Add checkbox, text, and delete button to the list item
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task.name));
        li.appendChild(deleteBtn);

        // Add the list item to the UL
        ul.appendChild(li);
    });
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage or return empty list
function loadTasksFromLocalStorage() {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
}

// Show tasks when the page loads
showTasks();




