const input = document.querySelectorAll('input');
// console.log(input);
const btnCreate = document.querySelector('button[data-create]');
// console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
// console.log(btnDestroy);
const boxes = document.querySelector('#boxes');
// console.log(boxes);

btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes());

function createBoxes(amount) {
  const div = [];
// console.log(div);
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
      newDiv.style.width = `${20 + 10 * i}px`;
      newDiv.style.height = `${20 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    div.push(newDiv);
  }
  boxes.prepend(...div);
  console.log(boxes);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
