"use strict";

var
ENGLISH = "English",
ITALIAN = "Italiano",
currentLang = ENGLISH;

var changeLanguage = function() {
  var flagIT = document.getElementById("flagIT");
  var flagEN = document.getElementById("flagEN");
  var label = document.getElementById("langlabel");

	if (currentLang == ENGLISH) {
		currentLang = ITALIAN;
    flagIT.style.display = "none";
    flagEN.style.display = "inline";
    label.innerText = ENGLISH;
	}
	else {
		currentLang = ENGLISH;
    flagIT.style.display = "inline";
    flagEN.style.display = "none";
    label.innerText = ITALIAN;
	}
}

function init() {
  var languageButton = document.getElementById("langlink");
  if (languageButton.addEventListener) {
    languageButton.addEventListener("click", changeLanguage, false);
  } else if (languageButton.attachEvent) {
    languageButton.attachEvent("onclick", changeLanguage);
  }
};


if (window.addEventListener) {
  window.addEventListener("load", init, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", init);
} else {
  document.addEventListener("load", init, false);
}