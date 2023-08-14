let greenThemeOn = false;
const NAVIGATION = document.querySelector(".navigation");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (greenThemeOn == false) {
    if (document.body.scrollTop >= window.innerHeight || document.documentElement.scrollTop >= window.innerHeight) {
      NAVIGATION.style.background = "#13181c";
    } else {
      NAVIGATION.style.background = "#2c363f";
    }
  } else {
    if (document.body.scrollTop >= window.innerHeight || document.documentElement.scrollTop >= window.innerHeight) {
      NAVIGATION.style.background = "#494a1f";
    } else {
      NAVIGATION.style.background = "#5b5c26";
    }
  }

}
let openCarRequest = (req) => {
  if (req == 1) {
    document.querySelector(".request").style.display = "block";
    document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "none";
  } else if (req == 2) {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".request").style.display = "none";
    document.querySelector(".about").style.display = "block";
  } else {
    document.querySelector(".home").style.display = "block";
    document.querySelector(".request").style.display = "none";
    document.querySelector(".about").style.display = "none";
  }

}
let changeTheme = () => {
  if (greenThemeOn == false) {
    greenThemeOn = true;
  } else {
    greenThemeOn = false;
  }
  let greenTheme = () => {
    document.querySelector(".navigation").style.background = "#5b5c26";
    document.getElementById("donate-nav-btn").style.background = "#a19b4a";
    document.getElementById("donate-nav-btn").style.color = "#fff";
    document.querySelector(".donate-btn").style.background = "#a19b4a";
    document.querySelector(".donate-btn").style.color = "#fff";
    document.querySelector(".services").style.background = "#5b5c26";
    document.querySelector(".figure").style.background = "#5b5c26";
    document.querySelector(".gallery").style.background = "#a19b4a";
    document.querySelector(".faq").style.background = "#a19b4a";
    document.querySelector("footer").style.background = "#797A3A";
    document.querySelector(".nav-link").style.color = "#a8a8a8";
    document.querySelector(".request").style.background = "#a19b4a";
    document.getElementById("upper").style.background = "#a19b4a";
    document.getElementById("bottom").style.background = "#797A3A";
    document.querySelector(".about").style.background = "#5b5c26";

    document.querySelector(".btn").style.background = "red !important";
    document.getElementById("collapseOne").style.background = "red !important";

    document.querySelector(".collapse").style.background = "red !important";

    document.querySelector(".card-body").style.background = "red !important";
    document
  }
  let blueTheme = () => {
    document.querySelector(".navigation").style.background = "#2c363f";
    document.querySelector(".donate-btn").style.background = "#e75a7c";
    document.getElementById("donate-nav-btn").style.background = "#e75a7c";
    document.getElementById("donate-nav-btn").style.color = "#000";
    document.querySelector(".donate-btn").style.color = "#000";
    document.querySelector(".services").style.background = "#2c363f";
    document.querySelector(".figure").style.background = "#2c363f";
    document.querySelector(".gallery").style.background = "#374552";
    document.querySelector(".faq").style.background = "#374552";
    document.querySelector("footer").style.background = "#151a1f";
    document.querySelector(".nav-link").style.color = "#a8a8a8";
    document.querySelector(".request").style.background = "#374552";
    document.getElementById("upper").style.background = "#e75a7c";
    document.getElementById("bottom").style.background = "#374552";
    document.querySelector(".about").style.background = "#2c363f";

    document.querySelector(".btn").style.background = "blue !important";
    document.getElementById("collapseOne").style.background = "blue !important";

    document.querySelector(".collapse").style.background = "blue !important";

    document.querySelector(".card-body").style.background = "blue !important";
  }
  if (greenThemeOn == true) {
    greenTheme();
  } else {
    blueTheme();
  }

}