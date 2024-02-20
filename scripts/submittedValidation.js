/* DOM Elements */

const form = document.querySelector(".btn-submit");
const validationElement = document.querySelector(".validation-message");
const modalForm = document.querySelector(".modal-body");
const closeButton = document.querySelector(".btn-close");

/* Actions */

// Adding event listener for the close button
closeButton.addEventListener("click", function () {
  closeModal(); // Calling the closeModal function when the close button is clicked
});

// Adding event listener for the form submission
form.addEventListener("click", function (event) {
  event.preventDefault(); // Preventing the default form submission behavior

  // Validating the form inputs
  if (validate()) {
    modalForm.style.display = "none"; // Hiding the modal form
    validationElement.style.display = "block"; // Displaying the validation message
  }
});