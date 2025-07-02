document.addEventListener('DOMContentLoaded', function() {
    const btnVoltar = document.getElementById('btnVoltar');
    const btnComeco = document.getElementById('btnComeco');

    btnVoltar.addEventListener('click', function() {
        redirectToPage('puzzle.html');
    });
    btnComeco.addEventListener('click', function() {
        redirectToNextPage();
    });
});

const mockRanking = [
    { nome: "Melissa", tempo: 45, erros: 2, dicas: 1 },
    { nome: "João", tempo: 50, erros: 1, dicas: 0 },
    { nome: "Isabela", tempo: 70, erros: 3, dicas: 2 },
    { nome: "Leandro", tempo: 55, erros: 2, dicas: 1 },
    { nome: "André", tempo: 60, erros: 2, dicas: 0 }
  ];
  
  function calcularPontuacao({ tempo, erros, dicas }) {
    return Math.max(0, 1000 - (tempo * 5 + erros * 50 + dicas * 30));
  }
  
  function renderRanking() {
    const tbody = document.getElementById('ranking-body');
  
    const rankingOrdenado = [...mockRanking]
      .map(user => ({ ...user, pontuacao: calcularPontuacao(user) }))
      .sort((a, b) => b.pontuacao - a.pontuacao);
  
    rankingOrdenado.forEach((user, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.nome}</td>
        <td>${user.tempo}</td>
        <td>${user.erros}</td>
        <td>${user.dicas}</td>
        <td>${user.pontuacao}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  window.addEventListener('DOMContentLoaded', renderRanking);
  