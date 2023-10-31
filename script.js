const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

let calcBuffer = "";
let calcText = "";

const operate = (a, b, op) => op(a, b);

const numberedButtons = [...document.querySelectorAll(".number-btn")];

for (let i = 0; i < numberedButtons.length; i++) {
	numberedButtons[i].addEventListener("click", function() {
		calcBuffer += numberedButtons[i].textContent;
		updateText();
	});
}

function updateText() {
	if (calcBuffer.length > 17) {
		calcBuffer = calcText;
	} else {
		calcText = calcBuffer;
	}
	document.querySelector("#text-field").textContent = calcText;
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", function() {
	calcBuffer = "";
	updateText();
});

const negativeButton = document.querySelector("#negative-btn");
negativeButton.addEventListener("click", function() {
	if (calcBuffer.charAt(0) === "-") {
		calcBuffer = calcBuffer.substring(1);
	} else {
		calcBuffer = "-" + calcBuffer;
	}
	updateText();
});
