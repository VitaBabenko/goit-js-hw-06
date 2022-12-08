const btnChangeColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(evt) {
  span.textContent = getRandomHexColor(evt);
  document.body.style.backgroundColor = getRandomHexColor(evt);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}



// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }