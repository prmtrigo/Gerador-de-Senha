//variables
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

let containerPassword = document.querySelector("container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%&<>"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

//show password length
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//generate password
function generatePassword(){
    
    let pass = "";
    //generate password from password length
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(math.random()*n));
    }
}