function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColEl = document.querySelector('.change-color');
const bgcColEl = document.querySelector('.color');

changeColEl.addEventListener('click', changeColor)

function changeColor() {
  const randomBgcColor = getRandomHexColor();

  document.body.style.backgroundColor = randomBgcColor;
  bgcColEl.textContent = randomBgcColor.toUpperCase();
}
