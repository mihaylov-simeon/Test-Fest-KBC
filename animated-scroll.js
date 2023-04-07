window.onscroll = function() {
    onScrollFunction()
};

function onScrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  const element = document.getElementById("#scroll-tracker");
  element.style.width = scrolled + "%";
}
