// Display the privacy message to first time users
const firstTimeBox = document.getElementById("first-time");
if (localStorage.getItem("isVisited")) {
  firstTimeBox.classList.add("hidden");
} else {
  localStorage.setItem("isVisited", true);
  document.getElementById("body").classList.add("blurred");
  document.getElementById("mobileHeader").classList.add("blurred");
}

const clickedVisited = document.getElementById("visitedBtn");
clickedVisited.addEventListener("click", () => {
  firstTimeBox.classList.add("hidden");
  document.getElementById("body").classList.remove("blurred");
  document.getElementById("mobileHeader").classList.remove("blurred");
});

// Show the add note box on mobile by clicking on the "Add Note" link
const addNoteLink = document.getElementById("addNoteLink");
const addNote = document.getElementById("add-note");
const cardDetails = document.getElementById("d-note");

addNoteLink.addEventListener("click", () => {
  addNote.classList.remove("hidden");
  cardDetails.classList.add("hidden");
});

// Show the error message if note title or description not added and try to add note
const addToNoterr = document.getElementById("addToNoterr");
const alertPara = document.querySelectorAll(".alert");

addToNoterr.addEventListener("click", () => {
  const noteTitle = document.getElementById("noteTitle").value;
  const noteDes = document.getElementById("noteDes").value;
  if (noteTitle == "" && noteDes == "") {
    alertPara[0].classList.remove("hidden");
    alertPara[1].classList.remove("hidden");
  } else if (noteTitle == "") {
    alertPara[0].classList.remove("hidden");
  } else if (noteDes == "") {
    alertPara[1].classList.remove("hidden");
  } else {
    alertPara[0].classList.add("hidden");
    alertPara[1].classList.add("hidden");
    addNote.classList.add("hidden");
  }
});

// Show the details of note after clicking on the card
const cards = document.querySelectorAll(".note-card");
// cardDetails already declared on top
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cardDetails.classList.remove("hidden");
    addNote.classList.add("hidden");
  });
});
