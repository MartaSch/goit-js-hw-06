const input = document.querySelector("input");
const inputDataLength = input.getAttribute("data-length");
const inputDataLengthNum = parseInt(inputDataLength);
console.log(inputDataLengthNum);

input.addEventListener("blur", (event) => {
 if (inputDataLengthNum === event.currentTarget.value.length) {
  input.classList.add("valid");
  input.classList.remove("invalid");
} else {
    input.classList.remove("valid");
    input.classList.add("invalid");
}
});