document.addEventListener('DOMContentLoaded', function() {
    const btnVoltar = document.getElementById('btnVoltar');
    const btnComeco = document.getElementById('btnComeco');

    btnVoltar.addEventListener('click', function() {
        redirectToPage('page6.html');
    });
    btnComeco.addEventListener('click', function() {
        redirectToPage('index.html');
    });
});