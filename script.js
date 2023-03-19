"use strict";

const toDoItem = (id, title, description) => `
    <li class="to-do-item">
        <button class="delete-btn" onclick="deleteToDo(${id})">
            <i class="fas fa-trash-alt"></i>
        </button>
        <label for="to-do-${id}">
            <span class="to-do-title">${title}</span>
            <span class="to-do-description">${description}</span>
        </label>
    </li>
`;

const toDoList = [
  {
    id: 1,
    title: "New one",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const renderToDoList = () => {
  const toDoListElement = document.getElementById("to-do-list");
  toDoListElement.innerHTML = "";
  toDoList.forEach((toDo) => {
    const toDoItemElement = toDoItem(toDo.id, toDo.title, toDo.description);
    toDoListElement.insertAdjacentHTML("beforeend", toDoItemElement);
  });
};

renderToDoList();

const showClearButton = () => {
  const clearButton = document.getElementById("clear-btn");
  if (toDoList.length > 0) {
    clearButton.style.display = "block";
  } else {
    clearButton.style.display = "none";
  }
};

showClearButton();

const disableAddButton = () => {
  const title = document.getElementById("new-to-do-title").value;
  const description = document.getElementById("new-to-do-description").value;
  const addButton = document.getElementById("add-btn");
  if (title === "" || description === "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
};

const titleInput = document.getElementById("new-to-do-title");
titleInput.addEventListener("input", disableAddButton);

const descriptionInput = document.getElementById("new-to-do-description");
descriptionInput.addEventListener("input", disableAddButton);

const addToDo = () => {
  const title = document.getElementById("new-to-do-title").value;
  const description = document.getElementById("new-to-do-description").value;
  const newToDo = {
    id: toDoList.length + 1,
    title,
    description,
  };
  toDoList.push(newToDo);
  renderToDoList();
  showClearButton();
};

const deleteToDo = (id) => {
  toDoList.splice(id - 1, 1);
  renderToDoList();
  showClearButton();
};

const clearToDoList = () => {
  toDoList.splice(0, toDoList.length);
  renderToDoList();
  showClearButton();
};
