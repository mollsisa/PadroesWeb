const pageSequence = [
  'index.html',
  'page2.html',
  'page3.html'
];

/**
 * Redirects to the next page in the sequence.
 */
function redirectToNextPage() {
  const currentUrl = window.location.pathname.split('/').pop();
  const currentIndex = pageSequence.indexOf(currentUrl);

  if (currentIndex === -1) {
    console.warn('Current page is not in the defined sequence.');
    return;
  }

  const nextIndex = (currentIndex + 1) % pageSequence.length;
  const nextPage = pageSequence[nextIndex];
  window.location.href = nextPage;
}

/**
 * Redirects to a specific page in the sequence.
 * @param {string|number} destination - Page name (e.g., 'page1.html') or zero-based index.
 */
function redirectToPage(destination) {
  let targetPage;

  if (typeof destination === 'number') {
    if (destination < 0 || destination >= pageSequence.length) {
      console.error('Invalid page index.');
      return;
    }
    targetPage = pageSequence[destination];
  } else if (typeof destination === 'string') {
    if (!pageSequence.includes(destination)) {
      console.error('Page name not found in the sequence.');
      return;
    }
    targetPage = destination;
  } else {
    console.error('Invalid parameter for redirectToPage.');
    return;
  }

  window.location.href = targetPage;
}
