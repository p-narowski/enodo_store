import style from "./css/index.css";
import {
  updateItems,
  addItem,
  removeItem,
  calculatePrice,
  calculateTime,
  checkList,
  itemsListElement,
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
addBtn.addEventListener("click", () => {
  addItem();
  location.reload();
});
remBtn.addEventListener("click", () => {
  removeItem();
  location.reload();
});

returnBtn.addEventListener("click", clearForm);
subBtn.addEventListener("click", submitData);
dateTag.addEventListener("change", validateDate);
fNameTag.addEventListener("keyup", validateFirstName);
lNameTag.addEventListener("keyup", validateLastName);
emailTag.addEventListener("keyup", validateEmail);
phoneTag.addEventListener("change", validatePhone);

updateItems();
checkList();
calculatePrice();
calculateTime();
validateEmail();
validateFirstName();
validateLastName();

dateTag.min = `${possibleDate}`;
dateTag.value == "" ? (dateTag.value = dateTag.min) : (dateTag = date);
fNameTag.value = firstName;
lNameTag.value = lastName;
emailTag.value = email;
phoneTag.value = phone;
