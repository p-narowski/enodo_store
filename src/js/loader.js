const { HIDDEN_CLASS } = require("./thankYou");

function ShowSpinner(submitButton, loadingBar) {
  submitButton.classList.add(HIDDEN_CLASS);
  loadingBar.classList.remove(HIDDEN_CLASS);
}

module.exports = {
  ShowSpinner,
};
