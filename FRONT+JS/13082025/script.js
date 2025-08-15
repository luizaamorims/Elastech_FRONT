
// 1
document.getElementById('btn-mudar-texto').onclick = function() {
    document.getElementById('paragrafo').textContent = 'Texto alterado :)';
};

// 2
document.getElementById('btn-mudar-cor').onclick = function() {
    document.getElementById('titulo').style.color = 'red';
};

// 3
document.getElementById('btn-adicionar').onclick = function() {
    const texto = document.getElementById('input-item').value;
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('lista').appendChild(li);
        document.getElementById('input-item').value = '';
    }
};