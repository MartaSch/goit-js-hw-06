function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
const divWidget = document.querySelector(".widget");
const buttonColor = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");
buttonColor.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  backgroundColor.textContent = randomColor;
  divWidget.style.backgroundColor = randomColor;
});