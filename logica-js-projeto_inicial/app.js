// Curso Lógica de Programação:
//  -mergulhe em programação com JavaScript

alert("Olá Mundo!");

let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let resposta;
let tentativas = 1;


while( numeroSecreto != resposta ) {
    resposta = prompt(`Escolha entre o número 1 e ${numeroMax}`);

    if(numeroSecreto == resposta) {
        break;
    } else {
        if(numeroSecreto > resposta) {
            alert(`O número secreto é maior que ${resposta}`);
        } else {
            alert(`O número secreto é menor que ${resposta}`);
        }
        tentativas++;
    };
};

let nomeTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o número secreto: (${numeroSecreto}). Com ${tentativas} ${nomeTentativa}. Parabéns!`);

console.log(resposta);




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
/*
//-------------ATV 1 aula 3----------------
let num = 1

while(num < 11) {
    console.log(num)
    num++
}

//-------------ATV 2 aula 3----------------
let numDec = 10

while(numDec >= 0) {
    console.log(numDec);
    numDec--;
}

//-------------ATV 3 aula 3----------------
let numeroDec = prompt("Digite um número:");

while(numeroDec >= 0) {
    console.log(`Número: ${numeroDec}`);
    numeroDec--;
}

//-------------ATV 4 aula 3----------------
let numMax = prompt("Digite um número:");
let numIncrementado = 0;

while(numIncrementado <= numMax) {
    console.log(`Número Incrementado: ${numIncrementado}`);
    numIncrementado++;
};
*/
/*
//-------------ATV 1 aula 4----------------
let nota = prompt("Qual nota você tirou?")

situacao = nota >= 7 ? "Aprovado" : "Repronvado";

alert(`Você foi ${situacao}!`)

//-------------ATV 2 e 3 aula 4----------------
numero1 = parseInt(Math.random() * 10 + 1)
console.log(`Número entre 1 e 10: ${numero1}`)

numero2 = parseInt(Math.random() * 1000 + 1)
console.log(`Número entre 1 e 1000: ${numero2}`)
*/