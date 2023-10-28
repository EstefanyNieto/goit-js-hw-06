const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const unorderedList = document.querySelector('#ingredients');

const elementIngredients =ingredients.forEach(ingredients => {

  const element = document.createElement('li');
  element.classList.add("item");
  unorderedList.append(element);

});