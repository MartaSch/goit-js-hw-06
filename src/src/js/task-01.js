const liCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${liCategories.length}`)
const firstLiItems = document.querySelector(".item");
const headingFirst = firstLiItems.querySelector("h2");
console.log(`Category: ${headingFirst.textContent}`);
const liFirst = firstLiItems.querySelectorAll(" ul > li");
console.log(`Elements: ${liFirst.length}`);
const liItemsSecond = firstLiItems.nextElementSibling;
const headingSecond = liItemsSecond.querySelector("h2");
console.log(`Category: ${headingSecond.textContent}`);
const liSecond = liItemsSecond.querySelectorAll("ul > li");
console.log(`Elements: ${liSecond.length}`);
const liItemsLast = liItemsSecond.nextElementSibling;
const headingLast = liItemsLast.querySelector("h2");
console.log(`Category: ${headingLast.textContent}`);
const liLast = liItemsLast.querySelectorAll("ul > li");
console.log(`Elements: ${liLast.length}`);
