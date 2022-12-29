const taskInput = document.querySelector(".task-input input")
taskBox = document.querySelector(".task-box");
    
// getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if(todos) {
        todos.forEach((todo, id) =>{
            li += `<li class="task">
                    <label for="${id}">
                        <input type="checkbox" id="${id}">
                        <p>${todo.name}</p>
                    </label>
                    <div class="settings">
                        <i class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li><i class="uil uil-pen"></i>Edit</li>
                            <li><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>`;
        });
    }
    taskBox.innerHTML = li;
}
showTodo();

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if (!todos) { // If todos isn't exist, pass an empty array to todos
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo); // adding new task to todos
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});