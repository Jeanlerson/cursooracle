// Curso Lógica de Programação:
//  -mergulhe em programação com JavaScript

alert("Olá Mundo!");

let numeroSecreto = 8;
let resposta = prompt("Escolha entre o número 1 e 10");

if(numeroSecreto == resposta) {
    alert(`Você acertou o número secreto: (${numeroSecreto}). Parabéns!`);
} else {
    alert("Você errou o número secreto. Tente novamente!");
};

console.log(resposta);
console.log(numeroSecreto == resposta);