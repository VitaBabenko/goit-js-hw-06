const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingr => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingr;

  return li;
});

list.append(...elements);
console.log(list);