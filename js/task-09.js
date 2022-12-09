const btnChangeColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(evt) {
  let colorRandom = getRandomHexColor();
  span.textContent = colorRandom;
  document.body.style.backgroundColor = colorRandom;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

