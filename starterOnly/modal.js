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

function isValidTournamentNumber(tournamentnumber) {
  return tournamentnumber >= 0;
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

/*function conditionsAccepted(){
  const conditionIsChecked = document.getElementById("checkbox1").checked;
  if (conditionIsChecked){
    return true;
  } else{
    return false;
  }
}
*/

const errorMessages = {
  firstname: "Must contain at least 2 letters",
  lastname: "Must contain at least 2 letters",
  email: "Please enter a valid e-mail adresse",
  birthdate: "Please enter a valid birth date",
  quantity: "Please enter a number superior to 0",
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
  if (
    isValidFirstName(firstName) &&
    isValidLastName(lastName) &&
    isValidEmail(emailShape) &&
    !isValidDate(date) &&
    isValidTournamentNumber(tournamentnumber)
  ) {
    return true;
  }

  if (!isValidFirstName(firstName)) {
    firstNameError.style.display = "inline";
  } else {
    firstNameError.style.display = "";
  }

  if (!isValidLastName(lastName)) {
    lastNameError.style.display = "inline";
  } else {
    lastNameError.style.display = "";
  }

  if (!isValidEmail(email)) {
    emailError.style.display = "inline";
  } else {
    emailError.style.display = "";
  }

  if (!isValidDate(birthdate)) {
    dateError.style.display = "inline";
  } else {
    dateError.style.display = "";
  }

  if (!isValidTournamentNumber(quantity)) {
    quantityError.style.display = "inline";
  } else {
    quantityError.style.display = "";
  }

  return false;
}

/*
 document.createElement('span').textContent='message-error';
 parentElement.querySelector(".message-error").style.display = "inline";


 function displayError(error) {
   const errorAlert= document.createElement('span')='message-error'.textcontent;
   errorAlert.classlist.add("message-error");

}*/

//My part: Message error

/* document.createElement('span')= "message-error"
const error= document.createElement */
