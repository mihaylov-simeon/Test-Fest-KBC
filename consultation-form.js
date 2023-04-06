const afterLoginPage = document.querySelector(
  "body > div > div > div.cancel-field > cancel-btn"
);

afterLoginPage.addEventListener("click", reloadIndexPage);

function reloadIndexPage() {
  window.location.href = "index.html";
}
