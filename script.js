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
			if (!(button.id === "decimal-btn" && bigTextField.textContent.indexOf(".") >= 0)) {
				bigTextField.textContent += button.textContent;
			}
		} else {
			bigTextField.textContent = button.textContent;
		}
	} else if (button.classList.contains("operator-btn")) {
		if ((storedVal || storedVal === 0) && !lastButton.classList.contains("operator-btn")) {
			pressEquals();
		}
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
		storedVal = +bigTextField.textContent;
		lastOperator = button;
	} else if (button.id === "equal-btn" && operator && (storedVal || storedVal === 0)) {
		pressEquals();
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

function pressEquals() {
	smallTextField.textContent = `${storedVal} ${lastOperator.textContent} ${+bigTextField.textContent} =`
	if (+bigTextField.textContent === 0 && operator === divide) {
		bigTextField.textContent = "ERROR: DIV BY 0";
	} else {
		let solution = operate(storedVal, +bigTextField.textContent, operator);
		if (solution.toString().includes(".")) {
			if (solution.toString().split(".")[1].length > 10) {
				solution = solution.toFixed(10);
				while (solution.charAt(solution.length - 1) === "0" || solution.charAt(solution.length - 1) === ".") {
					solution = solution.substring(0, solution.length - 1);
				}
			}
		}
		bigTextField.textContent = solution;
	}
}
