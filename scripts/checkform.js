function validate() {
  /* DOM Elements*/
  const firstData = document.getElementById("first");
  const lastData = document.getElementById("last");
  const emailData = document.getElementById("email");
  const birthdateData = document.getElementById("birthdate");
  const quantityData = document.getElementById("quantity");
  const radiosData = document.getElementsByName("location");
  const checkbox1Data = document.getElementById("checkbox1");
  const errorElement = document.querySelector(".error-message");

  /* Delete Messages */
  removeErrorMessages([firstData, lastData, emailData, birthdateData, quantityData, radiosData[0], checkbox1Data]);

  let isValid = true;
  let selected = false;

  // Firstname Check
  if (firstData.value.trim() === "") {
    isValid = false;
    addErrorMessage(firstData, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }

  // Lastname Check
  if (lastData.value.trim() === "") {
    isValid = false;
    addErrorMessage(lastData, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  // Email Check
  if (emailData.value.trim() === "" || !isValidEmail(emailData.value.trim())) {
    isValid = false;
    addErrorMessage(emailData, "Veuillez rentrer une adresse mail valide.");
  }

  // Birthdate Check
  if (birthdateData.value.trim() === "") {
    isValid = false;
    addErrorMessage(birthdateData, "Vous devez entrer votre date de naissance.");
  }

  // Number of tournaments Check
  if (isNaN(quantityData.value) || quantityData.value.trim() === "" || quantityData.value < 0 || quantityData.value > 99) {
    isValid = false;
    addErrorMessage(quantityData, "Veuillez renseigner un nombre.");
  };

  // Location Check
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

  // Terms of use Check
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

/* Functions for Messages */

// Function to add error message
function addErrorMessage(inputElement, message) {
  // Create a new div element to display the error message
  const errorMessageElement = document.createElement("div");
  // Set the text content of the error message
  errorMessageElement.innerText = message;
  // Append the error message element to the parent node of the input element
  inputElement.parentNode.appendChild(errorMessageElement);
  // Add a CSS class to style the error message
  errorMessageElement.classList.add("error-message");
}

// Function to remove error messages
function removeErrorMessages(inputElements) {
  // Iterate over each input element
  inputElements.forEach(inputElement => {
    // Find the error message element associated with the input element's parent node
    const errorMessageElement = inputElement.parentNode.querySelector(".error-message");
    // If an error message element exists
    if (errorMessageElement) {
      // Remove the error message element from the DOM
      errorMessageElement.parentNode.removeChild(errorMessageElement);
    }
  });
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}