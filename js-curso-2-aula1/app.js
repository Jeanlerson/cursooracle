let numeroSecreto = gerarNumero();

function seletor(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

seletor("h1", "Número Secreto");
seletor("p", "Escolha um número entre 1 e 10");

function checkKick() {
    let chute = document.querySelector("input").value
    console.log(chute == numeroSecreto);
};
function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}


/*
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
*/