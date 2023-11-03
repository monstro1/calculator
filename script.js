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

let lastButton;
let operator;

function userInput(e) {
	let button = e.target;
	if (button.classList.contains("number-btn")) {
		bigTextField.textContent += button.textContent;
	} else if (button.classList.contains("operator-btn")) {
		switch(button.id) {
			case "add-btn":
				operator = add;
				break;
			case "subtract-btn":
				operator = subtract;
				break;
			case "multiply-btn":
				operator = multiply;
				break;
			default:
				operator = divide;
				break;
		}
	} else {
		console.log("some other button");
	}
	lastButton = button;
}
