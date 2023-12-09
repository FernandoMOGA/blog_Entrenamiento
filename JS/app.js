var iconMenu = document.querySelector('.container_nav');
var menuBurger = document.querySelector('.lista');
var button = document.querySelector('.aboutMe-button');
var aboutMe_texto = document.querySelector('.aboutMe-texto');



iconMenu.addEventListener('click', display);
button.addEventListener('click', display2);

function display() {
    menuBurger.classList.toggle('display');
}
function display2() {
    aboutMe_texto.classList.toggle('display');
}