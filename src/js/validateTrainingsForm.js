const { warningTag } = require("./arrangeTopics");
const { showThanks, TRACE_ID } = require("./thankYou");
const TRAINING_FORM_ID = "trainings-form";
const ITEMS_KEY = "ITEMS";
const DATE_TAG_ID = "training_date";
const DATE_WARN_ID = "warning-date";
const FIRST_NAME_ID = "fname";
const FNAME_WARN_ID = "warning-fname";
const SURNAME_ID = "lname";
const SURNAME_WARN_ID = "warning-lname";
const EMAIL_ID = "email";
const EMAIL_WARN_ID = "warning-email";
const PHONE_ID = "phone";
const WARNING_MESSAGE =
  "To pole jest obowiązkowe! (niepoprawne lub niewpisane dane)";

const dateTag = document.getElementById(DATE_TAG_ID);
const dateWarning = document.getElementById(DATE_WARN_ID);
const fNameTag = document.getElementById(FIRST_NAME_ID);
const fnameWarning = document.getElementById(FNAME_WARN_ID);
const lNameTag = document.getElementById(SURNAME_ID);
const lnameWarning = document.getElementById(SURNAME_WARN_ID);
const emailTag = document.getElementById(EMAIL_ID);
const phoneTag = document.getElementById(PHONE_ID);
const emailWarning = document.getElementById(EMAIL_WARN_ID);

const firstName = localStorage.getItem(FIRST_NAME_ID);
const lastName = localStorage.getItem(SURNAME_ID);
const date = localStorage.getItem(DATE_TAG_ID);
const email = localStorage.getItem(EMAIL_ID);
const phone = localStorage.getItem(PHONE_ID);

function validateDate() {
  if (dateTag.value === "") {
    dateWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(DATE_TAG_ID, dateTag.value);
    dateWarning.innerHTML = "";
  }
}
function validateFirstName() {
  if (fNameTag.value === "" || fNameTag.value.length < 2) {
    fnameWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(FIRST_NAME_ID, fNameTag.value);
    fnameWarning.innerHTML = "";
  }
}
function validateLastName() {
  if (lNameTag.value === ""|| lNameTag.value.length < 2) {
    lnameWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(SURNAME_ID, lNameTag.value);
    lnameWarning.innerHTML = "";
  }
}
function validateEmail() {
  if (emailTag.value === "" || !emailTag.value.includes("@")) {
    emailWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(EMAIL_ID, emailTag.value);
    emailWarning.innerHTML = "";
  }
}
function validatePhone() {
  phoneTag.value == ""
    ? localStorage.removeItem(PHONE_ID)
    : localStorage.setItem(PHONE_ID, phoneTag.value);
}

function clearForm() {
  localStorage.removeItem(SURNAME_ID);
  localStorage.removeItem(FIRST_NAME_ID);
  localStorage.removeItem(DATE_TAG_ID);
  localStorage.removeItem(EMAIL_ID);
  localStorage.removeItem(ITEMS_KEY);
  localStorage.removeItem(PHONE_ID);
  localStorage.removeItem(TRAINING_FORM_ID);
}

function submitData() {
  if (
    dateWarning.innerHTML ||
    fnameWarning.innerHTML ||
    lnameWarning.innerHTML ||
    emailWarning.innerHTML ||
    warningTag.innerHTML
  ) {
    alert("W formularzu są błędy!");
  } else {
    clearForm();
    localStorage.setItem(TRACE_ID, "training");
    showThanks();
  }
}
module.exports = {
  validateDate,
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhone,
  submitData,
  clearForm,
  firstName,
  date,
  dateTag,
  fNameTag,
  lNameTag,
  lastName,
  emailTag,
  email,
  phoneTag,
  phone,
  TRAINING_FORM_ID,
};
