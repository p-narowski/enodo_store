import style from "./css/index.css";
import {
  updateItems,
  addItem,
  removeItem,
  calculatePrice,
  calculateTime,
  checkList,
} from "./js/arrangeTopics";
import {
  firstName,
  date,
  validateDate,
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhone,
  submitData,
  clearForm,
  dateTag,
  fNameTag,
  lNameTag,
  lastName,
  emailTag,
  email,
  phoneTag,
  phone,
} from "./js/validateTrainingsForm";
import { possibleDate } from "./js/checkDate";

const addBtn = document.getElementById("add");
const remBtn = document.getElementById("remove");
const subBtn = document.getElementById("submit");
const returnBtn = document.getElementById("return");

addBtn.addEventListener("click", addItem);
remBtn.addEventListener("click", removeItem);
returnBtn.addEventListener("click", clearForm);
subBtn.addEventListener("click", submitData);
dateTag.addEventListener("change", validateDate);
fNameTag.addEventListener("change", validateFirstName);
lNameTag.addEventListener("change", validateLastName);
emailTag.addEventListener("change", validateEmail);
phoneTag.addEventListener("change", validatePhone);
// descrTag.addEventListener("change", validateDescription);
// devRadio.addEventListener("change", validateRadio);
// prepRadio.addEventListener("change", validateRadio);
// prodRadio.addEventListener("change", validateRadio);
// otherRadio.addEventListener("change", validateRadio);

updateItems();
checkList();
calculatePrice();
calculateTime();

dateTag.min = `${possibleDate}`;
dateTag.value = date;
fNameTag.value = firstName;
lNameTag.value = lastName;
emailTag.value = email;
phoneTag.value = phone;
