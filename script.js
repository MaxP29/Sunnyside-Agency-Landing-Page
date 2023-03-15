"use strict";

const mobileNav = document.querySelector(".mobile-link");
const mobileLinks = document.querySelector(".mobile-nav-links");

// Mobile Nav

let counter = 0;

const openNav = function () {
  mobileLinks.style.display = "flex";
  mobileLinks.style.transition = "all 0.5s ease-in";
  mobileLinks.style.visibility = "visible";
  mobileNav.style.filter = "brightness(0%)";
  mobileLinks.style.transform = "translateX(0%)";
};

const closeNav = function () {
  mobileNav.style.filter = "";
  mobileLinks.style.transform = "translateX(100%)";
  mobileLinks.style.visibility = "hidden";
};

mobileNav.addEventListener(`click`, function (e) {
  if (counter === 1) {
    closeNav();
    return (counter = 0);
  }

  if (counter === 0) {
    openNav();
    return (counter = 1);
  }
});
