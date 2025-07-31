let title = document.querySelector("h1");
let paragraph = document.querySelector("p");

title.innerHTML = "Número Secreto";
paragraph.innerHTML = "Escolha um número entre 1 e 10";

function checkKick() {
    console.log("ta funcionando");
};


// ------------Atividade 1.1-------------
function alertInterative() {
    alert("Eu amo JS");
};

// ------------Atividade 1.2-------------
function dialog() {
    let city = prompt("Digite uma cidade:");
    alert(`Estive em ${city} e lembrei de você`);
};

// ------------Atividade 1.2-------------
function somaButton() {
    let number1 = parseInt(prompt("Digitie um número inteiro:"));
    let number2 = parseInt(prompt("Digitie outro número inteiro:"));
    let resultSoma = number1 + number2;

    alert(`O resultado da soma dos números é: ${resultSoma}`)
}