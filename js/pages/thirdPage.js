document.addEventListener('DOMContentLoaded', function() {
    const btnVoltar = document.getElementById('btnVoltar');
    const btnProximo = document.getElementById('btnProximo');

    // Função para navegar para a página anterior (página 2)
    btnVoltar.addEventListener('click', function() {
        window.location.href = 'page2.html';
    });
    btnProximo.disabled = true;
    // Função para navegar para a próxima página (página 4)
    btnProximo.addEventListener('click', function() {
        window.location.href = 'page4.html';
    });

    // Opcional: desabilitar botões se não houver página anterior/próxima
    // Por exemplo, se esta for a primeira página:
    // btnVoltar.disabled = true;
    // Ou se for a última página:
    // btnProximo.disabled = true;
});