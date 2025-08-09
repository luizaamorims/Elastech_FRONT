// 1. Crie um array chamado frutas com três frutas. Crie um codigo para  adicionar mais duas frutas ao final
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva", "tangerina");
console.log("Frutas:", frutas);

// 2. Crie um array chamado filmes com dois títulos. Crie um codigo para adicionar um filme no início
let filmes = ["Amelie", "Matrix"];
filmes.unshift("Titanic");
console.log("Filmes:", filmes);

// 3. Crie um array vazio chamado compras. Adicione três itens no inicio e dois no final.
let compras = [];
compras.unshift("pão", "leite", "cereal");
compras.push("queijo", "presunto");
console.log(" Compras:", compras);

// 4. Crie um array chamado jogos. Adicione um novo jogo na terceira posição 
let jogos = ["Stardew Valley", "Little Nightmares", "Minecraft", "Valorant"];
jogos.splice(2, 0, "GTA V"); // adiciona na posição 3 
console.log("Jogos:", jogos);

// 5. Crie um array com os dias da semana. Adicione “Fim de semana” entre “sexta” e “sábado”.
let diasSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
diasSemana.splice(5, 0, "Fim de semana"); // adiciona na posição 5 (entre sexta e sábado)
console.log("Dias da semana:", diasSemana);

// 6. Crie um array chamado animais com cinco elementos. Crie um codigo para  remover o ultimo.
let animais = ["cachorro", "gato", "calopsita", "peixe", "hamster"];
animais.pop();
console.log("Animais:", animais);

// 7. Crie um array com números de 1 a 5. remova o elemento no indice 3 
let numeros = [1, 2, 3, 4, 5];
numeros.splice(3, 1); // remove 1 elemento na posição 3
console.log("Números:", numeros);

// 8. Crie um array com três elementos. Crie um codigo para remover o primeiro e o último.
let cores = ["vermelho", "azul", "verde"];
cores.shift(); // remove o primeiro
cores.pop();   // remove o último
console.log("Cores:", cores);

// 9. Crie um array chamado ingredientes. Remova dois ingredientes do meio.
let ingredientes = ["farinha", "chocolate", "ovos", "leite", "manteiga"];
ingredientes.splice(1, 2); // remove 2 elementos a partir da posição 1
console.log("Ingredientes:", ingredientes);

// 10. Crie um array com cinco palavras.Remova a terceira e substituí-la por outra.
let palavras = ["casa", "carro", "bicicleta", "árvore", "livro"];
palavras.splice(2, 1, "faculdade"); // remove 1 elemento na posição 2 e adiciona faculdade
console.log("Palavras:", palavras);