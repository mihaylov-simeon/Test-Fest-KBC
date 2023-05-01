// Theme switcher function
switcher.addEventListener("change", () => {
    const switcher = document.getElementById("switcher");
    const stylesheet = document.getElementById("main-stylesheet");
  
    if (switcher.checked) {
      stylesheet.setAttribute("href", "card-light.css");
    } else {
      stylesheet.setAttribute("href", "card-pages.css");
    }
  });