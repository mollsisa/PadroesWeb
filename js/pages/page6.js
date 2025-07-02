document.addEventListener('DOMContentLoaded', function() {
  const btnVoltar = document.getElementById('btnVoltar');
  const btnComeco = document.getElementById('btnComeco');

  btnVoltar.addEventListener('click', function() {
      redirectToPage('page5.html');
  });
  btnComeco.addEventListener('click', function() {
      redirectToNextPage();
  });
});

const usuario = {
    nome: "Melissa",
    tempo: 45,
    erros: 2,
    dicas: 1
  };
  
  function gerarGrafico() {
    const ctx = document.getElementById('graficoDesempenhoCanvas').getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tempo (s)', 'Erros', 'Dicas'],
        datasets: [{
          label: 'Desempenho',
          data: [usuario.tempo, usuario.erros, usuario.dicas],
          backgroundColor: [
            '#7c3aed',
            '#5b21b6',
            '#a78bfa'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: `Desempenho de ${usuario.nome}`
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 100
          }
        }
      }
    });
  }
  
  function gerarFeedback() {
    const { tempo, erros, dicas } = usuario;
    const container = document.getElementById('feedbackTexto');
  
    let texto = `<p><strong>Tempo:</strong> ${tempo}s — ${
      tempo < 60 ? 'Ótimo tempo de resposta!' : 'Tente responder mais rapidamente.'
    }</p>`;
  
    texto += `<p><strong>Erros:</strong> ${erros} — ${
      erros === 0 ? 'Excelente precisão!' : 'Preste mais atenção aos detalhes.'
    }</p>`;
  
    texto += `<p><strong>Dicas usadas:</strong> ${dicas} — ${
      dicas === 0 ? 'Parabéns por não precisar de dicas!' : 'Considere explorar mais antes de pedir dicas.'
    }</p>`;
  
    texto += `<p><strong>Sugestão:</strong> Continue praticando para melhorar seu tempo e reduzir o uso de dicas.</p>`;
  
    container.innerHTML = texto;
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    gerarGrafico();
    gerarFeedback();
  });
  