let btn = document.getElementById("btn").addEventListener("click", createpass);
let input = document.getElementById("inp");

let len = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%&*";

const allchars = upperCase + loweCase + numbers + symbols;

function createpass() {
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += loweCase[Math.floor(Math.random()* loweCase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while(len > password.length) {
        password += allchars[Math.floor(Math.random () * allchars.length)];
    }

    input.value = password;  
}

function copying () {

    input.select();
    document.execCommand("copy");

}
