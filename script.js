let taskList = document.getElementById("task-list");
let taakId = 1;

const addTask = function() {
    let newTaskText = document.getElementById("new-task-text");
    addTaskToDom(newTaskText.value, taakId, false);
    let object = {};
    let objId = "taak" + taakId;
    object[objId] = { done: false };
    object[objId].text = newTaskText.value;
    patchTask(object);
    taakId = taakId + 1;
    newTaskText.value = "";
};

const addTaskToDom = function(newTaskText, id, done) {
    let newLiElem = document.createElement("li");
    newLiElem.innerHTML = `<div><input type="checkbox"><label>${newTaskText}</label></div>
    <img id="taak${id}" src="delete.jpg">`;
    taskList.appendChild(newLiElem);
    taskList.lastChild.querySelector("input").checked = done;
    taskList.lastChild.querySelector("img").addEventListener("click", (event) => {
        deleteTask(event.target.id);
        const taak = event.target.parentElement;
        taak.parentNode.removeChild(taak);
    });
    taskList.lastChild
        .querySelector("input")
        .addEventListener("click", (event) => {
            let checkId = event.target.parentElement.nextSibling.nextSibling.id;
            changeDone(checkId, event.target.checked);
        });
    taskList.lastChild
        .querySelector("label")
        .addEventListener("click", (event) => {
            editTask(event.target);
        });
};

const editTask = function(tasklabelNode) {
    tasklabelNode.innerHTML = `<input type="text"> <button class="add-btn">Voeg toe</button>`;
    tasklabelNode.querySelector("button").addEventListener("click", (event) => {
        let changeId = tasklabelNode.parentElement.nextSibling.nextSibling.id;
        let newText = tasklabelNode.querySelector("input").value;
        changeText(changeId, newText);
        tasklabelNode.innerHTML = newText;
    });
};

const start = async function() {
    const tasks = await getTask();
    console.log(tasks);
    let keys = Object.keys(tasks);
    let keyNumbers = keys.map((item) => {
        return parseInt(item.substring(4));
    });
    if (keyNumbers > 0) {
        taakId =
            1 +
            keyNumbers.reduce((acc, item) => {
                if (acc < item) {
                    return item;
                } else return acc;
            });
        keys.forEach((item, index) => {
            addTaskToDom(tasks[item].text, keyNumbers[index], tasks[item].done);
        });
    } else {
        console.log("geen to do's");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    start();
});