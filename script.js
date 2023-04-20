"use strict";
const btn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown-menu");
const ovr = document.querySelector(".ajutator");

btn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  if (ovr.classList.contains("overlay")) ovr.classList.remove("overlay");
  else ovr.classList.add("overlay");
});

ovr.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  ovr.classList.remove("overlay");
});
