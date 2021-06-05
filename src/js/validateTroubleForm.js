const { showThanks, TRACE_ID} = require("./thankYou");
const SUPPORT_FORM_ID="trouble-form";
const RADIO_DEV_ID = "prod_dev";
const RADIO_PREP_ID = "prod_prep";
const RADIO_PROD_ID = "prod_prod";
const RADIO_OTHER_ID = "other";
const RADIO_WARN_ID = "warning-radio";
const DESCR_ID = "descr";
const DESCR_WARN_ID = "warning-descr";
const FIRST_NAME_ID_2 = "fname2";
const FNAME_WARN_ID_2 = "warning-fname2";
const SURNAME_ID_2 = "lname2";
const SURNAME_WARN_ID_2 = "warning-lname2";
const EMAIL_ID_2 = "email2";
const EMAIL_WARN_ID_2 = "warning-email2";
const PHONE_ID_2 = "phone2";
const WARNING_MESSAGE = "To pole jest obowiązkowe! (niepoprawne lub niewpisane dane)";
const RADIO_ID = "radio";

const descrTag = document.getElementById(DESCR_ID);
const descrWarning = document.getElementById(DESCR_WARN_ID);
const devRadio = document.getElementById(RADIO_DEV_ID);
const prepRadio = document.getElementById(RADIO_PREP_ID);
const prodRadio = document.getElementById(RADIO_PROD_ID);
const otherRadio = document.getElementById(RADIO_OTHER_ID);
const radioWarning = document.getElementById(RADIO_WARN_ID);
const fNameTag2 = document.getElementById(FIRST_NAME_ID_2);
const fnameWarning2 = document.getElementById(FNAME_WARN_ID_2);
const lNameTag2 = document.getElementById(SURNAME_ID_2);
const lnameWarning2 = document.getElementById(SURNAME_WARN_ID_2);
const emailTag2 = document.getElementById(EMAIL_ID_2);
const phoneTag2 = document.getElementById(PHONE_ID_2);
const emailWarning2 = document.getElementById(EMAIL_WARN_ID_2);

const firstName2 = localStorage.getItem(FIRST_NAME_ID_2);
const lastName2 = localStorage.getItem(SURNAME_ID_2);
const email2 = localStorage.getItem(EMAIL_ID_2);
const phone2 = localStorage.getItem(PHONE_ID_2);
const description = localStorage.getItem(DESCR_ID);
const radio = localStorage.getItem(RADIO_ID);

function validateFirstName2() {
  if (fNameTag2.value === "" || fNameTag2.value.length < 2) {
    fnameWarning2.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(FIRST_NAME_ID_2, fNameTag2.value);
    fnameWarning2.innerHTML = "";
  }
}
function validateLastName2() {
  if (lNameTag2.value === "" || lNameTag2.value.length < 2) {
    lnameWarning2.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(SURNAME_ID_2, lNameTag2.value);
    lnameWarning2.innerHTML = "";
  }
}
function validateEmail2() {
  if (emailTag2.value === ""||!emailTag2.value.includes("@")) {
    emailWarning2.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(EMAIL_ID_2, emailTag2.value);
    emailWarning2.innerHTML = "";
  }
}
function validatePhone2() {
  phoneTag2.value == ""
    ? localStorage.removeItem(PHONE_ID_2)
    : localStorage.setItem(PHONE_ID_2, phoneTag2.value);
}
function validateDescription() {
  if (descrTag.value == "") {
    descrWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(DESCR_ID, descrTag.value);
    descrWarning.innerHTML = "";
  }
}
function validateRadio() {
  if (
    devRadio.checked ||
    prepRadio.checked ||
    prodRadio.checked ||
    otherRadio.checked
  ) {
    if (devRadio.checked) {
      localStorage.setItem(RADIO_ID, devRadio.value);
    } else if (prepRadio.checked) {
      localStorage.setItem(RADIO_ID, prepRadio.value);
    } else if (prodRadio.checked) {
      localStorage.setItem(RADIO_ID, prodRadio.value);
    } else {
      localStorage.setItem(RADIO_ID, otherRadio.value);
    }
    radioWarning.innerHTML = "";
  } else {
    radioWarning.innerHTML = WARNING_MESSAGE;
  }
}
function clearForm2() {
  localStorage.removeItem(SURNAME_ID_2);
  localStorage.removeItem(FIRST_NAME_ID_2);
  localStorage.removeItem(EMAIL_ID_2);
  localStorage.removeItem(RADIO_ID);
  localStorage.removeItem(PHONE_ID_2);
  localStorage.removeItem(DESCR_ID);
  localStorage.removeItem(SUPPORT_FORM_ID);
}

function submitData2() {
  if (
    radioWarning.innerHTM ||
    fnameWarning2.innerHTML ||
    lnameWarning2.innerHTML ||
    emailWarning2.innerHTML ||
    descrWarning.innerHTML
  ) {
    alert("W formularzu są błędy!");
  } else {
    clearForm2();
    localStorage.setItem(TRACE_ID, "consultancy");
    showThanks();
  }
}

module.exports = {
  validateFirstName2,
  validateLastName2,
  validateEmail2,
  validatePhone2,
  validateDescription,
  validateRadio,
  clearForm2,
  submitData2,
  firstName2,
  fNameTag2,
  lNameTag2,
  lastName2,
  emailTag2,
  email2,
  phoneTag2,
  phone2,
  descrTag,
  description,
  devRadio,
  prepRadio,
  prodRadio,
  otherRadio,
  radio,
  SUPPORT_FORM_ID,
};
