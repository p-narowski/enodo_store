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
const SUPPORT_PIC_ID = "support";
const TRAINING_PIC_ID = "training";
const TEAM_PIC_ID = "team-pic";
const HOME_LINK_ID = "go-home";
const HIDE_THANK_ID = "hide-thanks";
const THANKYOU_PIC_ID = "thankyou-pic";
const THANK_MESSAGE_ID = "thank-message";
const TEAM_SECTION_ID = "team";
const SERVICES_SECTION_ID = "services";
const SERVICES_LINK_ID = "services-link";
const PRICELIST_LINK_ID = "prices-link";
const PRICELIST_SECTION_ID = "pricelist";
const HIRE_SECTION_ID = "how-to-hire";
const PROJECTS_SECTION_ID = "projects-section";
const PARTNERS_SECTION_ID = "partners-section";
const CONTACT_SECTION_ID = "contact-section";
const REF1_SECTION_ID = "ref1-section";
const REF2_SECTION_ID = "ref2-section";
const REF3_SECTION_ID = "ref3-section";
const REF4_SECTION_ID = "ref4-section";
const HIRE_LINK_ID = "how-to-hire-link";
const PROJECTS_LINK_ID = "projects";
const PARTNERS_LINK_ID = "partners";
const CONTACT_LINK_ID = "contact";
const REF1_LINK_ID = "ref1-link";
const REF2_LINK_ID = "ref2-link";
const REF3_LINK_ID = "ref3-link";
const REF4_LINK_ID = "ref4-link";

const selectionPics = document.querySelectorAll(".fakeimg");
const backButtons = document.querySelectorAll(".backspace");
const supportPic = document.getElementById(SUPPORT_PIC_ID);
const trainingPic = document.getElementById(TRAINING_PIC_ID);
const teamPic = document.getElementById(TEAM_PIC_ID);
const servicesLink = document.getElementById(SERVICES_LINK_ID);
const pricesLink = document.getElementById(PRICELIST_LINK_ID);
const hireLink = document.getElementById(HIRE_LINK_ID);
const projectsLink = document.getElementById(PROJECTS_LINK_ID);
const partnersLink = document.getElementById(PARTNERS_LINK_ID);
const contactLink = document.getElementById(CONTACT_LINK_ID);
const ref1pic = document.getElementById(REF1_LINK_ID);
const ref2pic = document.getElementById(REF2_LINK_ID);
const ref3pic = document.getElementById(REF3_LINK_ID);
const ref4pic = document.getElementById(REF4_LINK_ID);

const thankyouPic = document.getElementById(THANKYOU_PIC_ID);
const homeSection = document.getElementById(HOME_SECTION_ID);
const supportFormSection = document.getElementById(SUPPORT_FORM_ID);
const trainingFormSection = document.getElementById(TRAINING_FORM_ID);
const teamSection = document.getElementById(TEAM_SECTION_ID);
const servicesSection = document.getElementById(SERVICES_SECTION_ID);
const pricesSection = document.getElementById(PRICELIST_SECTION_ID);
const hireSection = document.getElementById(HIRE_SECTION_ID);
const projectsSection = document.getElementById(PROJECTS_SECTION_ID);
const partnersSection = document.getElementById(PARTNERS_SECTION_ID);
const contactSection = document.getElementById(CONTACT_SECTION_ID);
const ref1Section = document.getElementById(REF1_SECTION_ID);
const ref2Section = document.getElementById(REF2_SECTION_ID);
const ref3Section = document.getElementById(REF3_SECTION_ID);
const ref4Section = document.getElementById(REF4_SECTION_ID);
const homeLinks = document.querySelectorAll(`#${HOME_LINK_ID}`);
const hideThankYouBtn = document.getElementById(HIDE_THANK_ID);
const trace = localStorage.getItem(TRACE_ID);
const thankMessage = document.getElementById(THANK_MESSAGE_ID);

for (var i = 0; i < selectionPics.length; i++) {
  selectionPics[i].onmouseover = markUp;
  selectionPics[i].onmouseout = markDown;
}
for (var i = 0; i < backButtons.length; i++) {
  backButtons[i].onclick = goHome;
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
  location.href="#trouble-form";
});
trainingPic.addEventListener("click", () => {
  homeSection.classList.add(HIDDEN_CLASS);
  trainingFormSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(TRAINING_FORM_ID, HIDDEN_CLASS);
  location.href="#trainings-form";
});
teamPic.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  teamSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(TEAM_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
  location.href="#team";  
});
servicesLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  servicesSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(SERVICES_SECTION_ID, HIDDEN_CLASS);
  //location.reload(); 
});
pricesLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  pricesSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(PRICELIST_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
});
hireLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  hireSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(HIRE_SECTION_ID, HIDDEN_CLASS);
  // location.reload();
});
projectsLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  projectsSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(PROJECTS_SECTION_ID, HIDDEN_CLASS);
  // location.reload();
});
partnersLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  partnersSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(PARTNERS_SECTION_ID, HIDDEN_CLASS);
  // location.reload();
});
contactLink.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  contactSection.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(CONTACT_SECTION_ID, HIDDEN_CLASS);
//  location.reload();
});
ref1pic.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  ref1Section.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(REF1_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
  location.href="#ref1-section";
  
});
ref4pic.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  ref4Section.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(REF4_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
  location.href="#ref4-section";
  
});
ref2pic.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  ref2Section.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(REF2_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
  location.href="#ref2-section";
  
});
ref3pic.addEventListener("click", () => {
  localStorage.clear();
  homeSection.classList.add(HIDDEN_CLASS);
  ref3Section.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(REF3_SECTION_ID, HIDDEN_CLASS);
  //location.reload();
  location.href="#ref3-section";
  
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
  } else if (localStorage.getItem(TEAM_SECTION_ID)) {
    let storedClassName = localStorage.getItem(TEAM_SECTION_ID);
    teamSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(SERVICES_SECTION_ID)) {
    let storedClassName = localStorage.getItem(SERVICES_SECTION_ID);
    servicesSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(PRICELIST_SECTION_ID)) {
    let storedClassName = localStorage.getItem(PRICELIST_SECTION_ID);
    pricesSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(HIRE_SECTION_ID)) {
    let storedClassName = localStorage.getItem(HIRE_SECTION_ID);
    hireSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(PROJECTS_SECTION_ID)) {
    let storedClassName = localStorage.getItem(PROJECTS_SECTION_ID);
    projectsSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(PARTNERS_SECTION_ID)) {
    let storedClassName = localStorage.getItem(PARTNERS_SECTION_ID);
    partnersSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(CONTACT_SECTION_ID)) {
    let storedClassName = localStorage.getItem(CONTACT_SECTION_ID);
    contactSection.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(REF1_SECTION_ID)) {
    let storedClassName = localStorage.getItem(REF1_SECTION_ID);
    ref1Section.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(REF2_SECTION_ID)) {
    let storedClassName = localStorage.getItem(REF2_SECTION_ID);
    ref2Section.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(REF3_SECTION_ID)) {
    let storedClassName = localStorage.getItem(REF3_SECTION_ID);
    ref3Section.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  } else if (localStorage.getItem(REF4_SECTION_ID)) {
    let storedClassName = localStorage.getItem(REF4_SECTION_ID);
    ref4Section.classList.remove(storedClassName);
    homeSection.classList.add(storedClassName);
  }
}
function goHome() {
  localStorage.clear();
  location.reload();
}
updateView();
