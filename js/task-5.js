


'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const changeColorButton = document.querySelector('button.change-color');
const colorText = document.querySelector('span.color');

changeColorButton.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});
