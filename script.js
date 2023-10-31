const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

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
