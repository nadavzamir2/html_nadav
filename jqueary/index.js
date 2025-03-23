const addButton = document.getElementById("add");
const tables = document.getElementById("tables");

$("#add").on("click", function () {
    $("#tables").append(`${$("#cardTable")}`)
})
function guestsLimit() {
    if(numberOfGuests.val > 20) return;
}