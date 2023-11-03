const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, op) => op(a, b);

const buttons = [...document.querySelectorAll("button")];

buttons.forEach(button => {
	button.addEventListener("click", userInput);
});

const bigTextField = document.querySelector("#big-text");
const smallTextField = document.querySelector("#small-text");

function userInput(e) {
	let button = e.target;
	if (button.classList.contains("number-btn")) {
		console.log("number button");
	} else if (button.classList.contains("operator-btn")) {
		console.log("operator button");
	} else {
		console.log("some other button");
	}
}
