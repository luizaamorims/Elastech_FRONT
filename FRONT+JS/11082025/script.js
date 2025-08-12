//1
const cidades = ["SÃO PAULO", "RIO DE JANEIRO", "BELO HORIZONTE", "CURITIBA", "PORTO ALEGRE"];

for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i], "indice", [i]);
}

//2
let valores = [1, 2, 3, 4, 5];

let contador = 0;
for (let i = 0; i < valores.length; i++) {
    contador += valores[i];
    logger.log("Valor atual:", valores[i], "Contador:", contador);
}

//3
const frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log(fruta.toUpperCase());
}

//4
const precos = [100, 250, 80];

precos.forEach((preco) => {
    preco = preco -(preco * 0.10);
    console.log("Preço:", preco);   
});

//5
let idades = [10, 20, 30, 40, 50];

let idadeEmMeses = idades.map(idade => idade * 12);

    console.log(idades);    
    console.log(idadeEmMeses);

//6
const temperaturas = [28, 32, 25, 35, 30, 40, 22];

const temperaturasAcimaDe30 = temperaturas.filter(temp => temp > 30);

console.log(temperaturasAcimaDe30); 

//7
const letras = ['a', 'b', 'c', 'a', 'b', 'a', 'd', 'c', 'e', 'a'];

const cont = letras.reduce((acumulador, letra) => {
    acumulador[letra] = (acumulador[letra] || 0) + 1;
    return acumulador;
}, {});

console.log(cont);

//8
const notas = [8, 7.5, 9, 6];

const somaNotas = notas.reduce((cont, nota) => cont + nota, 0);
const media = somaNotas / notas.length;

console.log("Média:", media.toFixed(2));

//9
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros.filter(num => num % 2 == 0).map(num => num * 2);          

console.log('Array original:', numeros);
console.log('Números pares:', numeros.filter(num => num % 2 == 0));
console.log('Pares multiplicados por 2:', resultado);

//10
const nomes = ["Melissa", "Maria Alice", "Fernanda"];

const frases = nomes.map(nome => `Olá, ${nome}!`);

console.log("Nomes: ", nomes);
console.log("Frases: ", frases);

