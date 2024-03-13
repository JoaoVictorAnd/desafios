//DESAFIO 1
function exibirOlaMundo(){
    console.log('Olá, mundo!');
}

exibirOlaMundo();

//DESAFIO 2
let nome = prompt('Digite um nome');

function exibirOlaNome(){
    return console.log(`Olá, ${nome}`);
}

exibirOlaNome();

//DESAFIO 3
let numero = parseInt(prompt('Digite um número'));

function numeroDobro(){
    return numero * 2;
}

console.log(numeroDobro());

//DESAFIO 4
let numero1 = parseFloat(prompt('Digite o primeiro número'));
let numero2 = parseFloat(prompt('Digite o segundo número'));
let numero3 = parseFloat(prompt('Digite o terceiro número'));

function mediaTresNumeros(){  
    let mediaNumeros = (numero1 + numero2 + numero3);
    return (mediaNumeros / 3).toFixed(2);
}

console.log(mediaTresNumeros());

//DESAFIO 5
let num1 = parseInt(prompt('Digite um número'));
let num2 = parseInt(prompt('Digite outro número'));

function maiorNumero(){    
    return parseInt(Math.max(num1, num2)); 
}

console.log(maiorNumero());

//DESAFIO 6
let numer = parseInt(prompt('Digite um número'));

function numeroMultiplicado(){
    return numer * numer;
}

console.log(numeroMultiplicado());