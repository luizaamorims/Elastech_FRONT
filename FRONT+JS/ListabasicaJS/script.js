// 1
let nome = prompt("Digite seu nome:");
console.log("Ola, " + nome + " Seja bem-vindo.");

// 2
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
let soma = Number(numero1) + Number(numero2);
console.log("O resultado da soma é: " + soma);

// 4
let numeroQualquer = prompt("Digite um número qualquer:");
let dobro = Number(numeroQualquer) * 2;
console.log("O dobro de " + numeroQualquer + " é: " + dobro);

// 5
let base = prompt("Digite a base do retângulo:");
let altura = prompt("Digite a altura do retângulo:");
let area = Number(base) * Number(altura);
console.log("A área do retângulo é: " + area);

// 6
let precoOriginal = prompt("Digite o preço do produto:");
let desconto = prompt("Digite o desconto em porcentagem (sem o símbolo %):");
let valorDesconto = (Number(desconto) / 100) * Number(precoOriginal);
let precoFinal = Number(precoOriginal) - Number(valorDesconto);

console.log("Preço original: R$ " + precoOriginal);
console.log("Desconto: " + desconto + "%");
console.log("Preço com desconto: R$ " + precoFinal);

// 7
let primeiroNome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let nomeCompleto = primeiroNome + " " + sobrenome;
console.log("Seu nome completo é: " + nomeCompleto);

// 8
let desejaCadastro = confirm("Você deseja se cadastrar em nosso site?");

if (desejaCadastro === true) {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let idadeCadastro = prompt("Digite sua idade:");
    
    console.log("Cadastro realizado com sucesso!");
    console.log("Nome: " + nomeCompleto);
    console.log("Idade: " + idadeCadastro);
} else {
    console.log("Cadastro cancelado pelo usuário.");
}