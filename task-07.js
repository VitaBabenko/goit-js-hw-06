const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const { value } = event.currentTarget;
    span.style.fontSize = `${value}px`;
}