//TODO: Display the privacy message to first time users
const firstTimeBox = document.getElementById("first-time");
if (localStorage.getItem("isVisited")) {
  firstTimeBox.classList.add("hidden");
} else {
  document.getElementById("body").classList.add("blurred");
  document.getElementById("mobileHeader").classList.add("blurred");
  // Set localStorage items for future uses
  // localStorage.setItem('addingTitle')
}
const clickedVisited = document.getElementById("visitedBtn");
clickedVisited.addEventListener("click", () => {
  localStorage.setItem("isVisited", true);
  firstTimeBox.classList.add("hidden");
  document.getElementById("body").classList.remove("blurred");
  document.getElementById("mobileHeader").classList.remove("blurred");
});

//TODO: Function to show the notes to user
showNotes();
function showNotes() {
  let notesStorage = localStorage.getItem("notes");
  if (notesStorage == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notesStorage);
  }
  let allCards = "";
  notesObj.forEach((element, index) => {
    allCards += `
    <div class="note-card" onclick="displayNote(event)">
      <div class="note-header" onclick="displayNote(event)">
        <h4>${element.title}</h4>
        <button id="${index}" onclick="deleteNote(this.id)">Delete</button>
      </div>
      <p>${element.des}</p>
    </div>
    `;
  });
  let notesSec = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesSec.innerHTML = allCards;
  } else {
    notesSec.innerHTML = `<p class="noItem">Nothing here to show! Add your note to get started</p>`;
  }
}

//* Function to delete the given note
function deleteNote(index) {
  let notesStorage = localStorage.getItem("notes");
  if (notesStorage == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notesStorage);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//TODO: Show the add note box on mobile by clicking on the "Add Note" link
const addNoteLink = document.getElementById("addNoteLink");
const addNote = document.getElementById("add-note");
const cardDetails = document.getElementById("d-note");

addNoteLink.addEventListener("click", () => {
  addNote.classList.remove("hidden");
  cardDetails.classList.add("hidden");
});

//Todo: Get note and description text to add in noterr
// constants for display and hide
const addToNoterr = document.getElementById("addToNoterr");
const alertPara = document.querySelectorAll(".alert");

addToNoterr.addEventListener("click", () => {
  let noteTitle = document.getElementById("noteTitle");
  let noteDes = document.getElementById("noteDes");
  // Show the error message if note title or description not added and try to add note
  if (noteTitle.value == "" && noteDes.value == "") {
    alertPara[0].classList.remove("hidden");
    alertPara[1].classList.remove("hidden");
  } else if (noteTitle.value == "") {
    alertPara[0].classList.remove("hidden");
    alertPara[1].classList.add("hidden");
  } else if (noteDes.value == "") {
    alertPara[0].classList.add("hidden");
    alertPara[1].classList.remove("hidden");
  }
  // Get texts to add and clear current text
  else {
    alertPara[0].classList.add("hidden");
    alertPara[1].classList.add("hidden");
    //* Main code to add note
    let notesStorage = localStorage.getItem("notes");
    if (notesStorage == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notesStorage);
    }
    let newNote = {
      title: noteTitle.value,
      des: noteDes.value,
    };
    notesObj.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    //* Reset the title and description box
    noteTitle.value = "";
    noteDes.value = "";
    addNote.classList.add("hidden");

    // Run showNotes function
    showNotes();
  }
});

//TODO: Event Listeners for carnote cards
function displayNote(e) {
  //* Display box elements
  let displayTitle = cardDetails.querySelector("h2");
  let displayDes = cardDetails.querySelector("p");
  //* Note Card Box elements
  let cardHeading = e.target.querySelector("h4");
  let cardpara = e.target.querySelector("p");
  displayTitle.innerText = cardHeading.innerText;
  displayDes.innerText = cardpara.innerText;
}
