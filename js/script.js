//variáveis
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

let containerPassword = document.querySelector("container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%&<>"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

//gerar o visor para tamanho de caracteres
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    alert("kung fu cê conhece whatsapp?");
}