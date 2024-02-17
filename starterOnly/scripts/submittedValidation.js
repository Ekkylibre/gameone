  /* DOM Elements */

const form = document.querySelector(".btn-submit");
const validationElement = document.querySelector(".validation-message");
const modalForm = document.querySelector(".modal-form");
const closeButton = document.querySelector(".btn-close");

  /* Actions */
closeButton.addEventListener("click", function(event) {
  closeModal();
});

form.addEventListener("click", function(event) {
  event.preventDefault();

  if (validate()) {
    modalForm.style.display = "none";
    validationElement.style.display="block";
  }
});