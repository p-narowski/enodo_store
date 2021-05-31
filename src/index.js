import style from "./css/index.css";
import { markUp, markDown } from "./js/makeMarks";
import {SUPPORT_FORM_ID} from "./js/validateTroubleForm";
import {TRAINING_FORM_ID} from "./js/validateTrainingsForm";

const HOME_SECTION_ID="home";
const HIDDEN_CLASS="hidden";
const SUPPORT_PIC_ID = "support";
const TRAINING_PIC_ID="training";
const HOME_LINK_ID="go-home";

const selectionPics = document.querySelectorAll(".fakeimg");
const supportPic=document.getElementById(SUPPORT_PIC_ID);
const trainingPic=document.getElementById(TRAINING_PIC_ID);
const homeSection=document.getElementById(HOME_SECTION_ID);
const supportFormSection=document.getElementById(SUPPORT_FORM_ID);
const trainingFormSection=document.getElementById(TRAINING_FORM_ID);
const homeLink=document.getElementById(HOME_LINK_ID);

for (var i = 0; i < selectionPics.length; i++) {
  selectionPics[i].onmouseover = markUp;
  selectionPics[i].onmouseout = markDown;
}

supportPic.addEventListener("click",()=>{
homeSection.classList.add(HIDDEN_CLASS);
supportFormSection.classList.remove(HIDDEN_CLASS);
localStorage.setItem(SUPPORT_FORM_ID, HIDDEN_CLASS);
})
trainingPic.addEventListener("click",()=>{
homeSection.classList.add(HIDDEN_CLASS);
trainingFormSection.classList.remove(HIDDEN_CLASS);
localStorage.setItem(TRAINING_FORM_ID, HIDDEN_CLASS);
})
homeLink.addEventListener("click", goHome);

function updateView(){
if(localStorage.getItem(SUPPORT_FORM_ID)){
  let storedClassName=localStorage.getItem(SUPPORT_FORM_ID);
  supportFormSection.classList.remove(storedClassName);
  homeSection.classList.add(storedClassName);
}
else if(localStorage.getItem(TRAINING_FORM_ID)){
  let storedClassName=localStorage.getItem(TRAINING_FORM_ID);
  trainingFormSection.classList.remove(storedClassName);
  homeSection.classList.add(storedClassName);
}}
function goHome(){
  if(localStorage.getItem(SUPPORT_FORM_ID)){
    let storedClassName=localStorage.getItem(SUPPORT_FORM_ID);
    supportFormSection.classList.add(storedClassName);
    homeSection.classList.remove(storedClassName);
    localStorage.removeItem(SUPPORT_FORM_ID);
  }
  else if(localStorage.getItem(TRAINING_FORM_ID)){
    let storedClassName=localStorage.getItem(TRAINING_FORM_ID);
    trainingFormSection.classList.add(storedClassName);
    homeSection.classList.remove(storedClassName);
    localStorage.removeItem(TRAINING_FORM_ID);
  }
}
updateView();