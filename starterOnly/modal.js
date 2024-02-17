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
modalClose.addEventListener("click", function () {
  closeModal();
});


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* Add */
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  const firstData = document.getElementById("first");
  const lastData = document.getElementById("last");
  const emailData = document.getElementById("email");
  const birthdateData = document.getElementById("birthdate");
  const quantityData = document.getElementById("quantity");
  const radiosData = document.getElementsByName("location");
  const checkbox1Data = document.getElementById("checkbox1");
  const errorElement = document.querySelector(".error-message");

  removeErrorMessages([firstData, lastData, emailData, birthdateData, quantityData, radiosData[0], checkbox1Data]);

  let isValid = true;
  let selected = false;

  if (firstData.value.trim() === "") {
    isValid = false;
    addErrorMessage(firstData, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }

  if (lastData.value.trim() === "") {
    isValid = false;
    addErrorMessage(lastData, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  if (emailData.value.trim() === "" || !isValidEmail(emailData.value.trim())) {
    isValid = false;
    addErrorMessage(emailData, "Veuillez rentrer une adresse mail valide.");
  }

  if (birthdateData.value.trim() === "") {
    isValid = false;
    addErrorMessage(birthdateData, "Vous devez entrer votre date de naissance.");
  }

  if (isNaN(quantityData.value) || quantityData.value.trim() === "" || quantityData.value < 0 || quantityData.value > 99) {
    isValid = false;
    addErrorMessage(quantityData, "Veuillez renseigner un nombre.");
  };

  for (let i = 0; i < radiosData.length; i++) {
    if (radiosData[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    isValid = false;
    addErrorMessage(radiosData[0], "Veuillez indiquer une ville.");
  }

  if (!checkbox1Data.checked) {
    isValid = false;
    addErrorMessage(checkbox1Data, "Vous devez vérifier que vous acceptez les termes et conditions.");
  }

  if (!isValid) {
    errorElement.style.display = "block";
    return false;
  }

  errorElement.style.display = "none";
  return true;
}

function addErrorMessage(inputElement, message) {
  const errorMessageElement = document.createElement("div");
  errorMessageElement.innerText = message;
  inputElement.parentNode.appendChild(errorMessageElement);
  errorMessageElement.classList.add("error-message");
}

function removeErrorMessages(inputElements) {
  inputElements.forEach(inputElement => {
    const errorMessageElement = inputElement.parentNode.querySelector(".error-message");
    if (errorMessageElement) {
      errorMessageElement.parentNode.removeChild(errorMessageElement);
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const form = document.querySelector(".btn-submit");
const validationElement = document.querySelector(".validation-message");
const modalForm = document.querySelector(".modal-form");
const closeButton = document.querySelector(".btn-close");

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