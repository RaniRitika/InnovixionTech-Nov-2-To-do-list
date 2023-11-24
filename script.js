function addTask() {
    var newTaskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-list");

    if (newTaskInput.value !== "") {
        var li = document.createElement("li");
        li.textContent = newTaskInput.value;
        li.onclick = function () {
            this.parentNode.removeChild(this);
        };

        taskList.appendChild(li);
        newTaskInput.value = "";
    }
}
