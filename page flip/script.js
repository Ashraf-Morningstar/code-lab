/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

const section = document.querySelector("section");
let clicked = false;
section.addEventListener("click", (e) => {
  section.classList.toggle("flip");
  if (!clicked) {
    clicked = true;
    document.getElementById("title").style.opacity = 0;
  }
});