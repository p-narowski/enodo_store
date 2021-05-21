import style from "./css/index.css";
import { markUp, markDown } from "./js/makeMarks";
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
  validateDescription,
  validateRadio,
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
} from "./js/validateForm";
import { possibleDate } from "./js/checkDate";

const selectionPics = document.querySelectorAll(".fakeimg");
const addBtn = document.getElementById("add");
const remBtn = document.getElementById("remove");
// const dateTag = document.getElementById("training_date");
// const fnameTag = document.getElementById("fname");

dateTag.min = `${possibleDate}`;
dateTag.value = date;
fNameTag.value = firstName;
lNameTag.value = lastName;
emailTag.value = email;
descrTag.innerHTML = description;

addBtn.addEventListener("click", addItem);
remBtn.addEventListener("click", removeItem);
dateTag.addEventListener("change", validateDate);
fNameTag.addEventListener("change", validateFirstName);
lNameTag.addEventListener("change", validateLastName);
emailTag.addEventListener("change", validateEmail);
descrTag.addEventListener("change", validateDescription);
devRadio.addEventListener("change", validateRadio);
prepRadio.addEventListener("change", validateRadio);
prodRadio.addEventListener("change", validateRadio);
otherRadio.addEventListener("change", validateRadio);

updateItems();
checkList();
calculatePrice();
calculateTime();

for (var i = 0; i < selectionPics.length; i++) {
  selectionPics[i].onmouseover = markUp;
  selectionPics[i].onmouseout = markDown;
}
