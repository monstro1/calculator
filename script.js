const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

let calcText = "";

const operate = (a, b, op) => op(a, b);

const oneButton = document.querySelector("#one-btn");
const twoButton = document.querySelector("#two-btn");
const threeButton = document.querySelector("#three-btn");
const fourButton = document.querySelector("#four-btn");
const fiveButton = document.querySelector("#five-btn");
const sixButton = document.querySelector("#six-btn");
const sevenButton = document.querySelector("#seven-btn");
const eightButton = document.querySelector("#eight-btn");
const nineButton = document.querySelector("#nine-btn");
const zeroButton = document.querySelector("#zero-btn");
const decimalButton = document.querySelector("#decimal-btn");

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
