function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const createEl = controlsEl.querySelector('[data-create]');
const destroyEl = controlsEl.querySelector('[data-destroy]');
const inputEl = controlsEl.querySelector('input');
const outputEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const arr = [];
  let sizes = 30;

  for (let i = 0; i < amount; i += 1) {
    arr.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizes}px; height: ${sizes}px;"></div>`
    );
    sizes += 10;
  }
  return arr;
}

createEl.addEventListener('click', insertMarkup);
destroyEl.addEventListener('click', destroyBoxes);

function insertMarkup() {
  const markup = createBoxes(Number(inputEl.value));

  outputEl.innerHTML = markup.join('');
}

function destroyBoxes() {
  outputEl.innerHTML = '';
}
