function initButton() {
  document.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      alert(`Botão clicado woow: ${b.textContent}`);
      redirectToNextPage();
    });
  });
}