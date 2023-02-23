const liCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liCategories.length}`);
liCategories.forEach(function (element) {
 console.log(`Category: ${element.firstElementChild.textContent}`);
 console.log(`Element: ${element.lastElementChild.children.length}`);
});