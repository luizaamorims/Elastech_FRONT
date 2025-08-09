const nome = "Luiza";
let idade = 22;
var profissao = "estudante";


console.log(nome.toUpperCase());
console.log(idade);
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
console.log(profissao);

alert("Olá, " + nome + "! Bem-vinda ao JavaScript.");

idade = prompt("Quantos anos você tem?");
console.log("Você tem " + idade + " anos.");

let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");
let soma = Number(valor1) + parseInt(valor2);
console.log("A soma dos valores é: " + soma);
let resposta = confirm("Você gostaria de salvar os dados?");

if (resposta === true ) {
    alert("Dados salvos com sucesso!");
} else {
    alert("Dados não salvos.");
}
