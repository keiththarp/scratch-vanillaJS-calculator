const sumFunction = (a, b) => a + b;
const minusFunction = (a, b) => a - b;
const productFunction = (a, b) => a * b;
const divisionFunction = (a, b) => a / b;

let displayScreenOutput = "0";
const display = document.getElementById("display");

function logInteger(num) {
  console.log(typeof num);
  if (displayScreenOutput === "0") {
    displayScreenOutput = num;
    display.innerHTML = displayScreenOutput;
  } else {
    displayScreenOutput = displayScreenOutput.concat(num);
    display.innerHTML = displayScreenOutput;
  }

  console.log(displayScreenOutput);
}
let savedValue = "";
let operator = "";
function operatorKey(op) {
  if (op === "+") {
    operator = "+";
  } else if (op === "-") {
    operator = "-";
  } else if (op === "*") {
    operator = "*";
  } else {
    operator = "/";
  }

  if (savedValue === "") {
    savedValue = parseFloat(displayScreenOutput);
    console.log(savedValue, typeof savedValue);
    displayScreenOutput = "0";
  } else {
    equalsKey()
  }


}

function equalsKey() {
  console.log(displayScreenOutput, typeof displayScreenOutput);
  displayScreenOutput = parseFloat(displayScreenOutput);

  if (operator === "+") {
    savedValue = sumFunction(savedValue, displayScreenOutput);
  } else if (operator === "-") {
    savedValue = minusFunction(savedValue, displayScreenOutput);
  } else if (operator === "*") {
    savedValue = productFunction(savedValue, displayScreenOutput);
  } else {
    savedValue = divisionFunction(savedValue, displayScreenOutput);
  }
  display.innerHTML = savedValue;
  console.log(savedValue);
  console.log(typeof savedValue);
  displayScreenOutput = savedValue;
}

function clearKey() {
  if (displayScreenOutput === "") {
    savedValue = "";
    display.innerHTML = "0";
  } else {
    displayScreenOutput = "";
    display.innerHTML = savedValue;
  }

}


