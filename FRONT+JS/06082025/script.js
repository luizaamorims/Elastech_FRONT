//1 
let numeroDia = 3; 

switch (numeroDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido! Digite um número entre 1 e 7.");
}

//2 
let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido!");
} else {
    console.log("Acesso negado!");
}

//3 
let membroVip = false;
let valorDaCompra = 1200;

if (membroVip == true || valorDaCompra > 1000) {
    console.log("Compra com desconto!");
} else {
    console.log("Compra com preço normal.");
}

// 4 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5 
let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma += i;
}
console.log("Soma de 1 a 5:", soma);

// 6 
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 7 
let valor = 10;
do {
    console.log(valor);
    valor--;
} while (valor >= 1);

// 8 
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 9 
const numeroSecreto = 15;
let palpite = Number(prompt("Digite seu palpite de número secreto:"));

while (palpite !== numeroSecreto) {
    console.log("Palpite incorreto! Tente novamente.");
    palpite = Number(prompt("Digite seu palpite de número secreto:"));
}
console.log("Parabéns! Você acertou o número secreto.");

// 10 
let numeroSorteado;

do {
    numeroSorteado = Math.floor(Math.random() * 100) + 1;
    if (numeroSorteado > 50) {
        console.log("O número sorteado foi maior que 50:", numeroSorteado);
        console.log("Sorteando novamente...");
    }
} while (numeroSorteado > 50);

console.log("Sorteio concluido!");