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
  
  // Add event listeners to all modal buttons to launch the modal
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  // Add event listener to the close button of the modal to close it
  modalClose.addEventListener("click", function () {
      closeModal();
    });
  
    // Function to display the modal
    function launchModal() {
      modalbg.style.display = "block";
    }
    
    // Function to close the modal
    function closeModal() {
      modalbg.style.display = "none";
    }