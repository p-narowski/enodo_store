const { HIDDEN_CLASS } = require("./thankYou");

const COOKIE_BOX_ID = "cookies-message";
const COOKIE_BUTTON_ID = "cookies-button";

const cookieBar = document.getElementById(COOKIE_BOX_ID);
function saveSelectionInStorage(){
    localStorage.setItem(COOKIE_BOX_ID, HIDDEN_CLASS);
}

function hideCookieBar() {
    cookieBar.classList.add(HIDDEN_CLASS);
    saveSelectionInStorage();
}

module.exports={
    hideCookieBar,
    saveSelectionInStorage,
    COOKIE_BUTTON_ID,
    COOKIE_BOX_ID,
    cookieBar,
}