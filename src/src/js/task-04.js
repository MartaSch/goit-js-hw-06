const decrementButton = document.querySelector("button[data-action=decrement]");
const incrementButton = document.querySelector("button[data-action=increment]");
const showValue = document.querySelector("#value");

let counterValue = 0;
const decrementClick = () => {
  counterValue--;
  showValue.textContent = String(counterValue);
};
decrementButton.addEventListener("click", decrementClick);

 const incrementClick = () => {
   counterValue++;
   showValue.textContent = String(counterValue);
 };
 incrementButton.addEventListener("click", incrementClick);