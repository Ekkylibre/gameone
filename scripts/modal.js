  /* Responsive */
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  /* DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close")

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", function () {
    closeModal();
  });

  function launchModal() {
    modalbg.style.display = "block";
  }
  
  function closeModal() {
    modalbg.style.display = "none";
  }