// login form linked buttons
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("body > header > button");

  const geStartedTrialBtn = document.querySelector(
    "#features > div.trial > button"
  );
  const priceCardBtnOne = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(1) > button"
  );
  const priceCardBtnTwo = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(2) > button"
  );
  const priceCardBtnThree = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(3) > button"
  );
  const getStarterTrialTwoBtn = document.querySelector(
    "#pricing > div.trial-pricing > button"
  );

  loginBtn.addEventListener("click", loginBtnHandler);
  geStartedTrialBtn.addEventListener("click", getStartedTrialBtnHandler);
  priceCardBtnOne.addEventListener("click", priceCardOneHandler);
  priceCardBtnTwo.addEventListener("click", priceCardTwoHandler);
  priceCardBtnThree.addEventListener("click", priceCardThreeHandler);
  getStarterTrialTwoBtn.addEventListener("click", getStartedTrialTwoHandler);

  function loginBtnHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardOneHandler() {
    window.location.href = "login-form.html";
  }

  function getStartedTrialBtnHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardTwoHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardThreeHandler() {
    window.location.href = "login-form.html";
  }

  function getStartedTrialTwoHandler() {
    window.location.href = "login-form.html";
  }
});

// book consultation linked buttons
document.addEventListener("DOMContentLoaded", () => {
  const bookConsultationBtn = document.querySelector(
    "#welcome-heading > div > a > button"
  );

  bookConsultationBtn.addEventListener("click", bookingBtnHandler);

  function bookingBtnHandler() {
    window.location.href = "consultation-form.html";
  }
});

// Theme switcher function
switcher.addEventListener("change", () => {
  const switcher = document.getElementById("switcher");
  const stylesheet = document.getElementById("main-stylesheet");

  if (switcher.checked) {
    stylesheet.setAttribute("href", "light-theme-style.css");
  } else {
    stylesheet.setAttribute("href", "style.css");
  }
});

// call functions on scroll
window.onscroll = function () {
  scrollFunction();
  scrollBarTracker();
};

// When the user scrolls down 1500px from the top of the document, show the button
function scrollFunction() {
  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// scroll bar tracker function
function scrollBarTracker() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Linking cards to their own pages

const webAppsCard = document.querySelector("#features > div.card-wrapper > div:nth-child(1)");
const webDevelopmentCard = document.querySelector("#features > div.card-wrapper > div:nth-child(2)");
const backEndDevelopmentCard = document.querySelector("#features > div.card-wrapper > div:nth-child(3)");
const uxUICard = document.querySelector("#features > div.card-wrapper > div:nth-child(4)");
const APIDevelopmentCard = document.querySelector("#features > div.card-wrapper > div:nth-child(5)");
const personalMaintenanceCard = document.querySelector("#features > div.card-wrapper > div:nth-child(6)");

webAppsCard.addEventListener('click', webAppsHandler);
webDevelopmentCard.addEventListener('click',webDevelopmentHandler);
backEndDevelopmentCard.addEventListener('click', backEndDevelopmentHandler);
uxUICard.addEventListener('click', uxUIHandler);
APIDevelopmentCard.addEventListener('click', APIDevelopmentHandler);
personalMaintenanceCard.addEventListener('click', personalMaintenanceHandler);


function webAppsHandler() {
  window.location.href = "web-apps.html"
}

function webDevelopmentHandler() {
  window.location.href = "web-apps.html"
}

function backEndDevelopmentHandler() {
  window.location.href = "web-apps.html"
}

function uxUIHandler() {
  window.location.href = "web-apps.html"
}

function APIDevelopmentHandler() {
  window.location.href = "web-apps.html"
}

function personalMaintenanceHandler() {
  window.location.href = "web-apps.html"
}

