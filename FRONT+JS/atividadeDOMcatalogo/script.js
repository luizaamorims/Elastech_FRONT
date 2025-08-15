// 1. Dados iniciais
const produtos = [
    { nome: "Garrafa vermelha", preco: 3500, emEstoque: true, imagem: "fundo1.webp" },
    { nome: "Copo Termico", preco: 2200, emEstoque: true, imagem: "fundo2.webp" },
    { nome: "Caneca Termica", preco: 250, emEstoque: true, imagem: "fundo3.jpg" },
    { nome: "Garrafa Azul", preco: 900, emEstoque: false, imagem: "fundo4.jpg" },
];

// 2 Renderizar a lista inicial de produtos.
function renderizarProdutos(listaDeProdutos) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <h3>${produto.nome}</h3>
            <p>Preço: ${(produto.preco / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p class="${produto.emEstoque ? '' : 'out-of-stock'}">
                ${produto.emEstoque ? 'Disponível' : 'Esgotado'}
            </p>
        `;
        grid.appendChild(card);
    });
}
// 3. Calcular e exibir o valor total do estoque.
function atualizarValorTotalEstoque() {
    const total = produtos
        .filter(p => p.emEstoque)
        .reduce((soma, p) => soma + p.preco, 0);
    document.getElementById('valor-total-estoque').textContent =
        total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 4. Executar e exibir a demonstração dos laços de repetição.
function demonstrarLoops() {
    let texto = '';

    texto += 'for...of: ';
    for (const produto of produtos) {
        texto += produto.nome + ' | ';
    }

    texto += '<br>while: ';
    let i = 0;
    while (i < produtos.length) {
        texto += produtos[i].nome + ' | ';
        i++;
    }

    texto += '<br>do...while: ';
    let j = 0;
    do {
        texto += produtos[j].nome + ' | ';
        j++;
    } while (j < produtos.length);

    document.getElementById('log-loops').innerHTML = texto;
}

// 5. Interatividade dos Botões: Adicione event listeners para cada um dos botões
// Carregamento da Página: Utilize o evento DOMContentLoaded para garantir que seu script só execute após a página ser totalmente carregada.
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
    atualizarValorTotalEstoque();
    demonstrarLoops();

    document.getElementById('btn-desconto').addEventListener('click', () => {
        const produtosComDesconto = produtos.map(p => ({
            ...p,
            preco: +(p.preco * 0.9).toFixed(2)
        }));
        renderizarProdutos(produtosComDesconto);
    });

    document.getElementById('btn-filtrar').addEventListener('click', () => {
        const disponiveis = produtos.filter(p => p.emEstoque);
        renderizarProdutos(disponiveis);
    });

    document.getElementById('btn-mostrar-todos').addEventListener('click', () => {
        renderizarProdutos(produtos);
    });
});