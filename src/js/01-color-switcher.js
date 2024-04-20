function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let colorInterval;

// Funkcja do uruchamiania zmiany kolorów tła co sekundę
function startChangingColors() {
  startButton.setAttribute('disabled', true);
  stopButton.removeAttribute('disabled');

  colorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Funkcja do zatrzymywania zmiany kolorów tła
function stopChangingColors() {
  clearInterval(colorInterval);
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', true);
}

// Obsługa kliknięcia przycisku "Start"
startButton.addEventListener('click', startChangingColors);

// Obsługa kliknięcia przycisku "Stop"
stopButton.addEventListener('click', stopChangingColors);
