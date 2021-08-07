import style from "./css/index.css";
import {
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
} from "./js/validateTroubleForm";

const subBtn2 = document.getElementById("submit2");
const returnBtn2 = document.getElementById("return2");

returnBtn2.addEventListener("click", ()=>{
  clearForm2();
  location.reload();
});
subBtn2.addEventListener("click", submitData2);
fNameTag2.addEventListener("keyup", validateFirstName2);
lNameTag2.addEventListener("keyup", validateLastName2);
emailTag2.addEventListener("keyup", validateEmail2);
phoneTag2.addEventListener("change", validatePhone2);
descrTag.addEventListener("keyup", validateDescription);
devRadio.addEventListener("change", validateRadio);
prepRadio.addEventListener("change", validateRadio);
prodRadio.addEventListener("change", validateRadio);
otherRadio.addEventListener("change", validateRadio);

fNameTag2.value = firstName2;
lNameTag2.value = lastName2;
emailTag2.value = email2;
phoneTag2.value = phone2;
descrTag.innerHTML = description;

function assignRadioValue() {
  if (radio == "prod_dev") {
    devRadio.checked = true;
  } else if (radio == "prod_prep") {
    prepRadio.checked = true;
  } else if (radio == "prod_prod") {
    prodRadio.checked = true;
  } else if (radio == "other") {
    otherRadio.checked = true;
  }
}
assignRadioValue();
validateEmail2();
validateFirstName2();
validateLastName2();
validateDescription();
validateRadio();