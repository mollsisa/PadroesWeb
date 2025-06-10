const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const btn = document.getElementById('btnDicas');
const dicas = document.getElementById('dicas');
const listaDicas = document.getElementById('listaDicas');
const dicasArray = [
  'Dica 1: .',
  'Dica 2: .',
  'Dica 3: .'
];

let contador = 0;

btn.addEventListener('click', () => {
  if (contador === 0) {
    dicas.classList.add('show'); 
  }
  if (contador < dicasArray.length) {
    const li = document.createElement('li');
    li.textContent = dicasArray[contador];
    listaDicas.appendChild(li);
    contador++;
  } else {
    dicas.classList.remove('show');
    listaDicas.innerHTML = '';
    contador = 0;
  }
});

inputs.forEach(input => {
  input.disabled = false;
  input.addEventListener('blur', () => {
    if (input.value.trim().length > 0) {
      input.disabled = true; 
    }
  });

});



    const btnVoltar = document.getElementById('btnVoltar');
    const btnProximo = document.getElementById('btnProximo');

    // Função para navegar para a página anterior (página 1)
    btnVoltar.addEventListener('click', () =>{
        window.location.href = 'index.html';
    });
    // Função para navegar para a próxima página (página 3)
    btnProximo.addEventListener('click', function() {
        window.location.href = 'page3.html';
    });

    // Opcional: desabilitar botões se não houver página anterior/próxima
    // Por exemplo, se esta for a primeira página:
    // btnVoltar.disabled = true;
    // Ou se for a última página:
    // btnProximo.disabled = true;

