const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();

    }


}

function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }

function toggleTask(index){
tasks[index].completed = tasks[index].completed ? false : true;
displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks = [];
    displayTasks();
}


addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);


document.addEventListener("DOMContentLoaded", displayTasks);
