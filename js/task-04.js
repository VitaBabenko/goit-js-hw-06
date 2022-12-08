const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementClick);

function onDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementClick);

function onIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
