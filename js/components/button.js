function initButton() {
  document.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      redirectToNextPage();
    });
  });
}