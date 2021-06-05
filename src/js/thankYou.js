const THANKYOU_ID="thank-you";
const HIDDEN_CLASS="hidden";
const TRACE_ID="trace";


const thankYouSection=document.getElementById(THANKYOU_ID);


function showThanks(){
thankYouSection.classList.remove(HIDDEN_CLASS);
localStorage.setItem(THANKYOU_ID, HIDDEN_CLASS);

}
function hideThanks(){
    localStorage.removeItem(THANKYOU_ID);
    localStorage.removeItem(TRACE_ID);
    location.reload();
}

module.exports={
    showThanks,
    hideThanks,
    THANKYOU_ID,
    HIDDEN_CLASS,
    thankYouSection,
    TRACE_ID
}