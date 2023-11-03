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

let lastButton = document.querySelector("#clear-btn");
let lastOperator;
let operator;
let storedVal;

function userInput(e) {
	let button = e.target;
	if (button.classList.contains("number-btn")) {
		if (lastButton.classList.contains("number-btn") || lastButton.id === "negative-btn") {
			bigTextField.textContent += button.textContent;
		} else {
			bigTextField.textContent = button.textContent;
		}
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
		if (storedVal && !lastButton.classList.contains("operator-btn")) {
			let solution = operate(storedVal, +bigTextField.textContent, operator);
			smallTextField.textContent = `${storedVal} ${lastOperator.textContent} ${bigTextField.textContent} =`
			bigTextField.textContent = solution;
		}
		storedVal = +bigTextField.textContent;
		lastOperator = button;
	} else if (button.id === "equal-btn" && operator && storedVal) {
		let solution = operate(storedVal, +bigTextField.textContent, operator);
		smallTextField.textContent = `${storedVal} ${lastOperator.textContent} ${bigTextField.textContent} =`
		bigTextField.textContent = solution;
		operator = null;
		storedVal = null;
	} else if (button.id === "negative-btn" && bigTextField.textContent.length > 0) {
		if (bigTextField.textContent.charAt(0) === "-") {
			bigTextField.textContent = bigTextField.textContent.substring(1);
		} else {
			bigTextField.textContent = "-" + bigTextField.textContent;
		}
	} else {
		bigTextField.textContent = "";
		smallTextField.textContent = "";
		operator = null;
		storedVal = null;
	}
	lastButton = button;
}
