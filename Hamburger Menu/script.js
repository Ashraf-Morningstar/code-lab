/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
// Display mobile menu
const mobieMenu = () =>{
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobieMenu)
function myFunction() {
document.getElementById("demo").innerHTML = "Hello World";
}