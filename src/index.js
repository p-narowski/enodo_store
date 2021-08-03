import style from "./css/index.css";
import { markUp, markDown } from "./js/makeMarks";
import { SUPPORT_FORM_ID } from "./js/validateTroubleForm";
import { TRAINING_FORM_ID } from "./js/validateTrainingsForm";
import {
  THANKYOU_ID,
  thankYouSection,
  HIDDEN_CLASS,
  hideThanks,
  TRACE_ID,
} from "./js/thankYou";

const HOME_SECTION_ID = "home";
// const HIDDEN_CLASS = "hidden";
const SUPPORT_PIC_ID = "support";
const TRAINING_PIC_ID = "training";
const TEAM_PIC_ID="team-pic";
const HOME_LINK_ID = "go-home";
const HIDE_THANK_ID = "hide-thanks";
const THANKYOU_PIC_ID = "thankyou-pic";
const THANK_MESSAGE_ID = "thank-message";
const TEAM_SECTION_ID = "team";

const selectionPics = document.querySelectorAll(".fakeimg");
const supportPic = document.getElementById(SUPPORT_PIC_ID);
const trainingPic = document.getElementById(TRAINING_PIC_ID);
const teamPic = document.getElementById(TEAM_PIC_ID);

const thankyouPic = document.getElementById(THANKYOU_PIC_ID);
const homeSection = document.getElementById(HOME_SECTION_ID);
const supportFormSection = document.getElementById(SUPPORT_FORM_ID);
const trainingFormSection = document.getElementById(TRAINING_FORM_ID);
const teamSection=document.getElementById(TEAM_SECTION_ID);
const homeLinks = document.querySelectorAll(`#${HOME_LINK_ID}`);
const hideThankYouBtn = document.getElementById(HIDE_THANK_ID);
const trace = localStorage.getItem(TRACE_ID);
const thankMessage = document.getElementById(THANK_MESSAGE_ID);

for (var i = 0; i < selectionPics.length; i++) {
  selectionPics[i].onmouseover = markUp;
  selectionPics[i].onmouseout = markDown;
}

if (trace == "training") {
  thankMessage.innerHTML = "Za zgłoszenie zapytania w temacie szkolenia";
} else if (trace == "consultancy") {
  thankMessage.innerHTML = "Za zgłoszenie zapytania w temacie konsultacji";
}

supportPic.addEventListener("click", () => {
  homeSection.classList.add(HIDDEN_CLASS);
  supportFormSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(SUPPORT_FORM_ID, HIDDEN_CLASS);
});
trainingPic.addEventListener("click", () => {
  homeSection.classList.add(HIDDEN_CLASS);
  trainingFormSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(TRAINING_FORM_ID, HIDDEN_CLASS);
});
teamPic.addEventListener("click", () => {
  homeSection.classList.add(HIDDEN_CLASS);
  teamSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(TEAM_SECTION_ID, HIDDEN_CLASS);
});
for (var i = 0; i < homeLinks.length; i++) {
  homeLinks[i].addEventListener("click", goHome);
}

hideThankYouBtn.addEventListener("click", hideThanks);
thankyouPic.addEventListener("click", hideThanks);

function updateView() {
  if (localStorage.getItem(SUPPORT_FORM_ID)) {
    let storedClassName = localStorage.getItem(SUPPORT_FORM_ID);
    supportFormSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(TRAINING_FORM_ID)) {
    let storedClassName = localStorage.getItem(TRAINING_FORM_ID);
    trainingFormSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(THANKYOU_ID)) {
    let storedClassName = localStorage.getItem(THANKYOU_ID);
    thankYouSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  }
   else if (localStorage.getItem(TEAM_SECTION_ID)) {
    let storedClassName = localStorage.getItem(TEAM_SECTION_ID);
    teamSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  }
}
function goHome() {
  // if (localStorage.getItem(SUPPORT_FORM_ID)) {
  //   let storedClassName = localStorage.getItem(SUPPORT_FORM_ID);
  //   supportFormSection.classList.add(storedClassName);
  //   homeSection.classList.remove(storedClassName);
  //   localStorage.removeItem(SUPPORT_FORM_ID);
  // } else if (localStorage.getItem(TRAINING_FORM_ID)) {
  //   let storedClassName = localStorage.getItem(TRAINING_FORM_ID);
  //   trainingFormSection.classList.add(storedClassName);
  //   homeSection.classList.remove(storedClassName);
  //   localStorage.removeItem(TRAINING_FORM_ID);
  // }
  localStorage.clear();
  location.reload();
}
updateView();
