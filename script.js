const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, op) => op(a, b);

const numberedButtons = [...document.querySelectorAll(".number-btn")];

numberedButtons.forEach(button => {
	button.addEventListener("click", userInput);
});

const bigTextField = document.querySelector("#big-text");
const smallTextField = document.querySelector("#small-text");

function userInput(e) {
	console.log(e.target.textContent);
}
