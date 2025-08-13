let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function seletor(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};
function msgInicial() {
    seletor("h1", "Número Secreto");
    seletor("p", "Escolha um número entre 1 e 10");
};
msgInicial();
function checkKick() {
    let chute = document.querySelector("input").value
    if(chute == numeroSecreto) {
        let wordTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let msgTentativa = `Você descobriu o número secreto com ${tentativas} ${wordTentativa}.`;

        seletor("h1", "Parabéns! Você acertou!");
        seletor("p", msgTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto) {
            seletor("p", "O número secreto é menor");
        } else {
            seletor("p", "O número secreto é maior");
        }
        tentativas++
        clean();
    }
};
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtNumeroEscolhido = listaNumeros.length;

    if(qtNumeroEscolhido == numeroLimite) {
        listaNumeros = [];
    }
    if(listaNumeros.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        console.log(listaNumeros)
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
};
function clean() {
    chute = document.querySelector('input');
    chute.value = "";
};
function restartGame() {
    numeroSecreto = gerarNumero();
    clean();
    tentativas = 1;
    msgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
};



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
/*
function imc(peso, altura) {
    peso = parseInt(prompt("Digite seu peso:"));
    altura = parseInt(prompt("Digite sua altura:"));
    let imc = peso / (altura * altura);

    alert(imc);
}


let lingProg = ['js', 'ruby', 'c++'];
console.log(lingProg);

lingProg.push('java', 'goLang');
*/
