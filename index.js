const formEl = document.getElementById("formTask");
const textInput = document.getElementById("textTask");
const dateInput = document.getElementById("targetDate");
const timeInput = document.getElementById("targetTime");
const cardsEl = document.getElementById("cards");

formEl.addEventListener("reset", onResetForm);
formEl.addEventListener("submit", onSubmitForm);

function onResetForm(event) {
    event.preventDefault();
    textInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
}
function onSubmitForm(event) {
    event.preventDefault();
    const itemData = {
        text: textInput.value,
        date: dateInput.value,
        time: timeInput.value,
        id: randomId(),
    }
    const isValid = validateItemData(itemData);
    if (!isValid) {
        return;
    }
    const currentData = getDataFromLS();
    currentData.push(itemData);
    saveOnLS(currentData);
    loadNotes();
}
function saveOnLS(array) {
    const itemToSave = JSON.stringify(array);
    localStorage.setItem("listOfNotes", itemToSave);
}

function getDataFromLS() {
    const data = localStorage.getItem("listOfNotes");
    if (data === null) {
        return [];
    } else {
        return JSON.parse(data);
    }
}
function validateItemData(data) {

    return true;
}

function randomId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
}

function loadNotes() {
    const items = getDataFromLS();
    let toInject = "";
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const card = `<div id="${item.id}" class="col card note p-3" >
        <div class="note-actions">
        <button onclick="deleteCard(${item.id})"<i class="bi bi-trash-fill danger"></i> </button>
        </div>
        <div class="note-content">
        <span>${item.text}</span>
        </div>
        <div class="note-datetime">
        <span>${item.date}</span>
        <span>${item.time}</span>
        </div>
        </div>`;
        toInject = toInject + card;
        document.addEventListener("DOMContentLoaded", function () {
            let cards = document.querySelectorAll(".card");
            let lastIndex = cards.length - 1;

            if (lastIndex >= 0) {
                cards[lastIndex].classList.add("fade-in");
            }
        });
        

    }
    cardsEl.innerHTML = toInject;
}
loadNotes();

function findIndexById(id, data) {
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        if (item.id === id) {
            return index;
        }
    }
}
function deleteCard(id) {
    const currentData = getDataFromLS();
    const cardIndex = findIndexById(id, currentData);
    currentData.splice(cardIndex, 1);
    saveOnLS(currentData);
    loadNotes();
}
