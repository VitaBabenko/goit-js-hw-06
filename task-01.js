const itemAllEl = document.querySelectorAll('.item');
const numberAllCateg = itemAllEl.length;
console.log('Number of categories:', numberAllCateg);

const nameAnimals = itemAllEl[0].firstElementChild.textContent;
console.log('Category:', nameAnimals);

const numberListAnimals = itemAllEl[0].lastElementChild.children.length;
console.log('Elements:', numberListAnimals);

const nameProducts = itemAllEl[1].firstElementChild.textContent;
console.log('Category:', nameProducts);

const numberListProducts = itemAllEl[1].lastElementChild.children.length;
console.log('Elements:', numberListProducts);

const nameTech = itemAllEl[2].firstElementChild.textContent;
console.log('Category:', nameTech);

const numberListTech = itemAllEl[2].lastElementChild.children.length;
console.log('Elements:', numberListTech);