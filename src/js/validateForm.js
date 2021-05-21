const DATE_TAG_ID = "training_date";
const DATE_WARN_ID = "warning-date";
const FIRST_NAME_ID = "fname";
const FNAME_WARN_ID = "warning-fname";
const SURNAME_ID = "lname";
const SURNAME_WARN_ID = "warning-lname";
const EMAIL_ID = "email";
const EMAIL_WARN_ID = "warning-email";
const PHONE_ID = "phone";
const RADIO_DEV_ID = "prod_dev";
const RADIO_PREP_ID = "prod_prep";
const RADIO_PROD_ID = "prod_prod";
const RADIO_OTHER_ID = "other";
const RADIO_WARN_ID="warning-radio";
const DESCR_ID = "descr";
const DESCR_WARN_ID="warning-descr";

const WARNING_MESSAGE="To pole jest obowiązkowe!"
const RADIO_CONDITION=devRadio||prepRadio||prodRadio||otherRadio;
const RADIO_ID="radio";

const dateTag = document.getElementById(DATE_TAG_ID);
const dateWarning = document.getElementById(DATE_WARN_ID);
const fNameTag = document.getElementById(FIRST_NAME_ID);
const fnameWarning = document.getElementById(FNAME_WARN_ID);
const lNameTag = document.getElementById(SURNAME_ID);
const lnameWarning = document.getElementById(SURNAME_WARN_ID);
const emailTag = document.getElementById(EMAIL_ID);
const emailWarning = document.getElementById(EMAIL_WARN_ID);
const descrTag = document.getElementById(DESCR_ID);
const descrWarning = document.getElementById(DESCR_WARN_ID);
const devRadio = document.getElementById(RADIO_DEV_ID);
const prepRadio = document.getElementById(RADIO_PREP_ID);
const prodRadio = document.getElementById(RADIO_PROD_ID);
const otherRadio = document.getElementById(RADIO_OTHER_ID);
const radioWarning = document.getElementById(RADIO_WARN_ID);

const firstName = localStorage.getItem(SURNAME_ID);
const lastName = localStorage.getItem(FIRST_NAME_ID);
const date = localStorage.getItem(DATE_TAG_ID);
const email = localStorage.getItem(EMAIL_ID);
const description = localStorage.getItem(DESCR_ID);
const radio = localStorage.getItem(RADIO_ID);

function validateDate() {
  if (dateTag.value === "") {
    dateWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(DATE_TAG_ID, dateTag.value);
    dateWarning.innerHTML = "";
  }
}
function validateFirstName() {
  if (fNameTag.value === "") {
    fnameWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(FIRST_NAME_ID, fNameTag.value);
    fnameWarning.innerHTML = "";
  }
}
function validateLastName() {
  if (lNameTag.value === "") {
    lnameWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(SURNAME_ID, lNameTag.value);
    lnameWarning.innerHTML = "";
  }
}
function validateEmail() {
  if (emailTag.value === "") {
    emailWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(EMAIL_ID, emailTag.value);
    emailWarning.innerHTML = "";
  }
}
function validateDescription() {
  if (descrTag.innerHTML === "") {
    descrWarning.innerHTML = WARNING_MESSAGE;
  } else {
    localStorage.setItem(DESCR_ID, descrTag.innerHTML);
    descrWarning.innerHTML = "";
  }
}
function validateRadio() {
    if (!RADIO_CONDITION) {
      radioWarning.innerHTML = WARNING_MESSAGE;
    } else {
      if(devRadio.value){localStorage.setItem(RADIO_ID, devRadio.value);}
      else if(prepRadio.value){localStorage.setItem(RADIO_ID, prepRadio.value);}
      else if(prodRadio.value){localStorage.setItem(RADIO_ID, prodRadio.value);}
      else {localStorage.setItem(RADIO_ID, otherRadio.value);}
      emailWarning.innerHTML = "";
    }}
module.exports = {
  validateDate,
  validateFirstName,
  validateLastName,
  validateEmail,
  validateDescription,
  validateRadio,
  firstName,
  date,
  dateTag,
  fNameTag,
  lNameTag,
  lastName,
  emailTag,
  email,
  descrTag,
  description,
devRadio,
prepRadio,
prodRadio,
otherRadio,
radio
}
