const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulName = document.querySelector("#ingredients")
const liList = document.createElement("li");
const markup = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

ulName.insertAdjacentHTML("beforeend", markup);