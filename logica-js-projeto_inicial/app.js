// Curso Lógica de Programação:
//  -mergulhe em programação com JavaScript

alert("Olá Mundo!");

let numeroSecreto = 8;
let resposta

while( numeroSecreto != resposta ) {
    resposta = prompt("Escolha entre o número 1 e 10");

    if(numeroSecreto == resposta) {
        alert(`Você acertou o número secreto: (${numeroSecreto}). Parabéns!`);
    } else {
        if(numeroSecreto > resposta) {
            alert(`O número secreto é maior que ${resposta}`);
        } else {
            alert(`O número secreto é menor que ${resposta}`);
        }
    };
}

console.log(resposta);
console.log(numeroSecreto == resposta);


//-------------ATV 1----------------
/*
alert("Olá! Tudo bem?");

let respostaSemana = prompt("Qual o dia da semana?");
let respostaMinuscula = respostaSemana.toLowerCase();

let sab = "sábado";
let dom = "domingo";

if(respostaMinuscula == sab || respostaMinuscula == dom) {
    alert("Tenha um bom final de semana!")
} else {
    alert("Tenha uma boa semana!")
}


//-------------ATV 2----------------
let respNum = prompt("Digite um númer:")

let number = Number(respNum)

console.log(number)
console.log(typeof number)

if(number < 0) {
    alert("Você digitou um número negativo")
} else {
    alert("Seu número é positivo")
}
*/