// Mudar a Cor de Fundo
// Enunciado: Crie um div com um texto qualquer. Crie uma função que seja chamada quando o mouse passar por cima do div, alterando sua cor de fundo para "lightblue". Crie uma segunda função para que, quando o mouse sair, a cor de fundo volte para "white".

function mudarCor() {
    document.getElementById("Mudarcor").style.backgroundColor = "lightblue"; 
}

function voltaCor() {
    document.getElementById("Mudarcor").style.backgroundColor = "white";
}


//  Esconder e Mostrar um Elemento
// Enunciado: Crie um parágrafo e um botão. Crie uma função que, ao ser clicada, verifique se o parágrafo está visível. Se estiver, a função deve escondê-lo. Se estiver escondido, a função deve mostrá-lo.

function mostraOuEsconde() {
    const paragrafo = document.getElementById("paragrafo");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}

// Contar Cliques
// Enunciado: Crie um botão e um <span> para exibir um número. Crie uma função que incremente uma variável de contagem toda vez que o botão for clicado e atualize o texto do <span> para mostrar o número atual de cliques.

let contador = 0;

function contaCliques() {

    contador++;
    document.getElementById('clique').textContent = contador;
}

// Crie um botão "Abrir Modal" e um div que servirá como uma janela modal (inicialmente oculta). O modal deve ter um botão "Fechar" (um "X") no canto superior direito. Crie duas funções: abrirModal() e fecharModal(). A primeira torna o modal visível e a segunda o oculta. Use classes CSS para controlar a visibilidade e o estilo do modal.

function abrirModal() {
    document.getElementById('modal').classList.remove('oculto');
}

function fecharModal() {
    document.getElementById('modal').classList.add('oculto');
}


