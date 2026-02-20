const inputBox = document.getElementById("input-box");
// const addButton = document.querySelector(".row button");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("You must write something!");
        return;
    }
    else {
        const li = document.createElement("li");
        li.textContent = taskText;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box
    saveData();

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();