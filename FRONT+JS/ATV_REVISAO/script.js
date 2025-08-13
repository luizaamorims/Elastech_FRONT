// - Declarar const produtos como array de objetos:
//{ nome: string, preco: number, emEstoque: boolean }

const produtos = [
    {nome:"Garrafa Plástica", preco: 29.90, emEstoque: true},
    {nome:"Copo Térmico", preco:59.90, emEstoque: true},
    {nome:"Caneca Térmica", preco:69.90, emEstoque: true},
    {nome:"Garrafa azul", preco:59.90, emEstoque: false}
]

// - Exibir no console a tabela de produtos
console.log("Catálogo de Produtos:");
console.table(produtos);

//Calcular e exibir no console o valor total de itens em estoque utilizando filter + reduce.
const valorTotalEstoque = produtos.filter(produto => produto.emEstoque)
.reduce((total, produto) => total + produto.preco, 0);

console.log("Valor total dos itens: R$ " + valorTotalEstoque);

//Criar um novo array de objetos com 10% de desconto em cada preço usando map e exibir com console.log.
const produtosDesconto = produtos.map(produto => ({
    produto, precoOriginal: produto.preco, preco: (produto.preco * 0.9).toFixed(2)
}))

console.log("Produtos com 10% de desconto:");
console.log(produtosDesconto);

//Filtrar apenas produtos disponíveis com filter e exibir no console.

const produtosDisponiveis = produtos.filter(produto => produto.emEstoque);

console.log("Produtos disponíveis:");
console.log(produtosDisponiveis);

//Iterar sobre produtos usando:
//- for...of para imprimir o nome de cada produto.

console.log("Nomes dos produtos (usando for of):");
for (const produto of produtos) {
    console.log(produto.nome)
}

//while para percorrer o array e exibir cada nome.
console.log("Nomes dos produtos (usando while):");

let cont = 0;

while (cont < produtos.length) {
    console.log(produtos[cont].nome)
    cont++;
}

//do...while para fazer uma contagem regressiva de quantos itens faltam processar.
console.log("Contagem regressiva de itens:");

let contador = produtos.length;
do {
    console.log("Itens restantes: " + contador);
    contador--;
} while (contador > 0);



