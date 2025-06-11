document.addEventListener("DOMContentLoaded", () => {
  const DEBUG_MODE = false;

  const imageOriginalContainer = document.getElementById("image-original");
  const imageWithErrorContainer = document.getElementById("image-with-errors");
  const errorsFoundSpan = document.getElementById("errors-found");
  const victoryMessage = document.getElementById("victory-message");

  let errorsFound = 0;
  const totalErrors = 7;

  const errorAreas = [
    { x: 85 - (9/2), y: 52 - (9/2), width: 9.0, height: 9.0, found: false }, // 1. peixe
    { x: 13.5 - (8/2), y: 38 - (8/2), width: 7.0, height: 9.0, found: false }, // 2. relogio
    { x: 16.5 - (12/2), y: 23.5 - (10/2), width: 12.0, height: 10.0, found: false }, // 3. carro
    { x: 23.0 - (12/2), y: 74.5 - (12/2), width: 12.0, height: 12.0, found: false }, // 4. minhoca
    { x: 39.1 - (4.5/2), y: 60 - (9/2), width: 4.0, height: 9.0, found: false }, // 5. cacto
    { x: 87.7 - (3.5/2), y: 10.7 - (6/2), width: 3.5, height: 5.5, found: false }, // 6. medalha
    { x: 94.2 - (4.5/2), y: 94.2 - (6.5/2), width: 4.5, height: 6.5, found: false }, // 7. biscoito
  ];

  imageOriginalContainer.addEventListener("click", (event) => {
    const rect = imageOriginalContainer.getBoundingClientRect();
    const clickX = event.offsetX;
    const clickY = event.offsetY;
    const percentX = (clickX / rect.width) * 100;
    const percentY = (clickY / rect.height) * 100;

    console.log(
      `Clique na IMAGEM ORIGINAL (%): x: ${percentX.toFixed(
        1
      )}, y: ${percentY.toFixed(1)}`
    );
  });

  imageWithErrorContainer.addEventListener("click", (event) => {
    const rect = imageWithErrorContainer.getBoundingClientRect();
    const clickX = event.offsetX;
    const clickY = event.offsetY;
    const percentX = (clickX / rect.width) * 100;
    const percentY = (clickY / rect.height) * 100;

    console.log(
      `Clique na IMAGEM COM ERROS (%): x: ${percentX.toFixed(
        1
      )}, y: ${percentY.toFixed(1)}`
    );

    let hit = false;
    errorAreas.forEach((area) => {
      if (
        !area.found &&
        percentX >= area.x &&
        percentX <= area.x + area.width &&
        percentY >= area.y &&
        percentY <= area.y + area.height
      ) {
        hit = true;
        markError(area);
        area.found = true;
        errorsFound++;
        updateCounter();

        if (errorsFound === totalErrors) {
          showVictoryMessage();
        }
      }
    });

    if (!hit) {
      imageWithErrorContainer.classList.add("shake");
      setTimeout(() => {
        imageWithErrorContainer.classList.remove("shake");
      }, 500);
    }
  });

  function markError(area) {
    const marker = document.createElement("div");
    marker.className = "error-marker";
    marker.style.left = `${area.x}%`;
    marker.style.top = `${area.y}%`;
    marker.style.width = `${area.width}%`;
    marker.style.height = `${area.height}%`;
    imageWithErrorContainer.appendChild(marker);
  }

  function drawDebugAreas() {
    errorAreas.forEach((area) => {
      const debugBox = document.createElement("div");
      debugBox.className = "debug-area";
      debugBox.style.left = `${area.x}%`;
      debugBox.style.top = `${area.y}%`;
      debugBox.style.width = `${area.width}%`;
      debugBox.style.height = `${area.height}%`;
      imageWithErrorContainer.appendChild(debugBox);
    });
  }

  function updateCounter() {
    errorsFoundSpan.textContent = errorsFound;
  }

  function showVictoryMessage() {
  }

  function initializeDebug() {
    if (DEBUG_MODE) {
      const imgToDebug = imageWithErrorContainer.querySelector("img");

      if (imgToDebug.complete) {
        drawDebugAreas();
      } else {
        imgToDebug.addEventListener("load", drawDebugAreas);
      }
    }
  }

  initializeDebug();


  
});
const btnVoltar = document.getElementById('btnVoltar');
    const btnProximo = document.getElementById('btnProximo');

    // Função para navegar para a página anterior (página 1)
    btnVoltar.addEventListener('click', () =>{
      redirectToPage('page3.html'); 
    });
    // Função para navegar para a próxima página (página 3)
    btnProximo.addEventListener('click', function() {
      redirectToPage('page5.html'); 
    });
