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

// const firstData = document.getElementById("first");
// const firstElement = document.createElement("div");
// firstElement.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
// firstElement.classList.add("error-message");

// const lastData = document.getElementById("last");
// const lastElement = document.createElement("div");
// lastElement.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
// lastElement.classList.add("error-message");

// const emailData = document.getElementById("email");
// const emailElement = document.createElement("div");
// emailElement.innerText = "Veuillez rentrer une adresse mail valide.";
// emailElement.classList.add("error-message");

// const birthdateData = document.getElementById("birthdate");
// const birthdateElement = document.createElement("div");
// birthdateElement.innerText = "Merci de rentrer un date valide.";
// birthdateElement.classList.add("error-message");

// const quantityData = document.getElementById("quantity");
// const quantityElement = document.createElement("div");
// quantityElement.innerText = "Veuillez renseigner un nombre entre 0 et 99.";
// quantityElement.classList.add("error-message");

// const errorElement = document.querySelector(".error-message");
// errorElement.innerText = "Veuillez indiquer une ville.";

// const checkbox1Data = document.getElementById("checkbox1");
// const checkbox1Element = document.createElement("div");
// checkbox1Element.innerText = "Veuillez accepter les conditions d'utilisation.";
// checkbox1Element.classList.add("error-message");

// firstData.parentNode.appendChild(firstElement);
// lastData.parentNode.appendChild(lastElement);
// emailData.parentNode.appendChild(emailElement);
// birthdateData.parentNode.appendChild(birthdateElement);
// quantityData.parentNode.appendChild(quantityElement);
// checkbox1Data.parentNode.appendChild(checkbox1Element);

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
  console.log("La fenêtre/modal est fermée");
}

function validate() {
  const firstData = document.getElementById("first");
  const lastData = document.getElementById("last");
  const emailData = document.getElementById("email");
  const birthdateData = document.getElementById("birthdate");
  const quantityData = document.getElementById("quantity");
  const radiosData = document.getElementsByName('location');
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

  /**/
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