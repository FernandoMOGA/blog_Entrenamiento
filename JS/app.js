var button = document.querySelector(".aboutMe-button");
var aboutMeTexto = document.querySelector(".aboutMe-texto");

button.addEventListener('click', mensaje);

function mensaje(){ 
    aboutMeTexto.classList.toggle('display');
}