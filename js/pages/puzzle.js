document.addEventListener("DOMContentLoaded", () => {
  // INTERRUPTOR: Mude para 'false' para desativar a visualização das áreas de erro.
  const DEBUG_MODE = false;

  const imageOriginalContainer = document.getElementById("image-original");
  const imageWithErrorContainer = document.getElementById("image-with-errors");
  const errorsFoundSpan = document.getElementById("errors-found");
  const victoryMessage = document.getElementById("victory-message");

  let errorsFound = 0;
  const totalErrors = 7;

  const errorAreas = [
    { x: 68.4, y: 14.6, width: 9.0, height: 9.0, found: false }, // 1. passaro 1
    { x: 63.5, y: 20.5, width: 8.0, height: 8.0, found: false }, // 2. passaro 2
    { x: 50.0, y: 37.0, width: 12.0, height: 8.0, found: false }, // 3. nuvem
    { x: 69.8, y: 54.0, width: 5.0, height: 5.0, found: false }, // 4. Janela da Casa (Formato)
    { x: 28.0, y: 28.0, width: 14.0, height: 7.0, found: false }, // 5. Cor do Telhado
    { x: 5.0, y: 45.5, width: 2.5, height: 3.5, found: false }, // 6. Flor Removida/Alterada
    { x: 15.5, y: 35.0, width: 3.0, height: 8.0, found: false }, // 7. Tronco da Árvore (Detalhe)
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
    victoryMessage.classList.remove("hidden");
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

  // Chama a função de inicialização do debug no final
  initializeDebug();
});
