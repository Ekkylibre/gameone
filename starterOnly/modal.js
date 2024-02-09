function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

/* Add */
const modalClose = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/* Add */
modalClose.addEventListener("click", function() {
  closeModal();
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* Add */
function closeModal () {
  modalbg.style.display = "none";
  console.log("La fenêtre/modal est fermée");
}