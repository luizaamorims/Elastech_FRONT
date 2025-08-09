//1
let idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18) {
    console.log("parabéns!!! Você é maior de idade.");
}
else {
    console.log("Você é menor de idade :( .");
}

//2
let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
} else {
    console.log("O número " + numero + " é ímpar.");
}

//3
let senha = prompt("Digite a senha:");

if (senha === "javascript123") {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado!");
}

//4
let nota = Number(prompt("Digite uma nota de 0 a 10:"));

if (nota >=7) {
    console.log("Aprovado!");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação!"); 
} else if (nota <= 4) {
    console.log("Reprovado!");
} else {
    console.log("Nota inválida!");
}