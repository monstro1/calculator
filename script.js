const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

let calcText = "";

const operate = (a, b, op) => op(a, b);

const numberedButtons = [...document.querySelectorAll(".number-btn")];

for (let i = 0; i < numberedButtons.length; i++) {
	numberedButtons[i].addEventListener("click", function() {
		calcText += numberedButtons[i].textContent;
		updateText();
	});
}

function updateText() {
	if (calcText.length > 17) {
		return;
	} else {
		document.querySelector("#text-field").textContent = calcText;
	}
}

const clearButton = document.querySelector("#clear-btn").addEventListener("click", function() {
	calcText = "";
	updateText();
});
