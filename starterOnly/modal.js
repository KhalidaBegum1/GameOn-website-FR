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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// My part:Fermer la modale

//element à cherché et modifier

const closeBtn = modalbg.querySelector(".close");
const modalContent = modalbg.querySelector(".content");
const modalBody = modalbg.querySelector(".modal-body");
const subscriptionForm = document.getElementById("subscription-form");

//création function pour fermer modal

closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

//My part: Implémenter entrées du formulaire

//constraints et conditions a remplir pour pouvoir valider
function isValidFirstName(first) {
  return first.length >= 2;
}

function isValidLastName(last) {
  return last.length >= 2;
}

function isValidTournamentNumber(tournamentNumber) {
  return tournamentNumber !== "" && tournamentNumber >= 0;
}

function isValidEmail(email) {
  const emailShape =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailShape.test(email);
}

function isValidDate(datestr) {
  //  convertir string en date
  const date = new Date(datestr);
  // recuperer le time date (si pas de nombre(isNAN) date nest pas bon)
  const time = date.getTime();
  if (isNaN(time)) {
    return false;
  } else {
    return true;
  }
}

function oneIsChecked(checkedList) {
  return checkedList.includes(true);
}
function locationChecked(locationIsChecked) {
  return locationIsChecked;
}

function conditionsAccepted(conditionIsChecked) {
  return conditionIsChecked;
}

const errorMessages = {
  firstname: "Must contain at least 2 letters",
  lastname: "Must contain at least 2 letters",
  email: "Please enter a valid e-mail adresse",
  birthdate: "Please enter a valid birth date",
  quantity: "Please enter a number equal or superior to 0",
  location: "Please select a city ",
  checkbox: "You must agree to terms and conditions",
};

function createErrorMessage(id, message) {
  const errorMsg = document.createElement("span");
  errorMsg.textContent = message;
  document.getElementById(id).parentElement.appendChild(errorMsg);
  errorMsg.classList.add("message-error");
  return errorMsg;
}

const showError = (isWrong, domError) => {
  if (isWrong) {
    domError.style.display = "inline";
  } else {
    //by default domError is displayed none
    domError.style.display = "";
  }
};

const firstNameError = createErrorMessage("first", errorMessages.firstname);
const lastNameError = createErrorMessage("last", errorMessages.lastname);
const emailError = createErrorMessage("email", errorMessages.email);
const dateError = createErrorMessage("birthdate", errorMessages.birthdate);
const quantityError = createErrorMessage("quantity", errorMessages.quantity);
const locationError = createErrorMessage("location1", errorMessages.location);
const conditionError = createErrorMessage("checkbox1", errorMessages.checkbox);

function validate() {
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("birthdate").value;
  const tournamentNumber = document.getElementById("quantity").value;
  const locationsChecked = [];
  // ajouter locations checked or not true/false
  for (let i = 1; i <= 6; i++) {
    locationsChecked.push(document.getElementById("location" + i).checked);
  }

  const conditionIsChecked = document.getElementById("checkbox1").checked;

  if (
    isValidFirstName(firstName) &&
    isValidLastName(lastName) &&
    isValidEmail(email) &&
    isValidDate(date) &&
    isValidTournamentNumber(tournamentNumber) &&
    conditionsAccepted(conditionIsChecked) &&
    oneIsChecked(locationsChecked)
  ) {
    alert("Your message has been sent");
    return true;
  }

  showError(!isValidFirstName(firstName), firstNameError);
  showError(!isValidLastName(lastName), lastNameError);
  showError(!isValidEmail(email), emailError);
  showError(!isValidDate(date), dateError);
  showError(!isValidTournamentNumber(tournamentNumber), quantityError);
  showError(!conditionsAccepted(conditionIsChecked), conditionError);
  showError(!oneIsChecked(locationsChecked), locationError);

  return false;
}
