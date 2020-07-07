const sumFunction = (a, b) => a + b;
const minusFunction = (a, b) => a - b;
const productFunction = (a, b) => a * b;
const divisionFunction = (a, b) => a / b;

const display = document.getElementById("display");

let tempVar = "0";

function logInteger(num) {
  tempVar.toString();
  if (tempVar === "0") {
    tempVar = num;
  } else {
    tempVar = tempVar.concat(num);
  }
  display.innerHTML = tempVar;
  console.log(tempVar);
}
let operator = "";
let holdingVar = "0";

function operatorKey(op) {
  if (operator === "") {
    assignOperator(op);
    holdingVar = parseFloat(tempVar);
    tempVar = "0";
    // equalsKey();
  } else if (operator !== "") {
    equalsKey();
    assignOperator(op);
  }
}
function assignOperator(op) {
  if (op === "+") {
    operator = "+";
  } else if (op === "-") {
    operator = "-";
  } else if (op === "*") {
    operator = "*";
  } else {
    operator = "/";
  }
}

function equalsKey() {
  tempVar = parseFloat(tempVar);
  holdingVar = parseFloat(holdingVar);

  if (operator === "+") {
    holdingVar = sumFunction(holdingVar, tempVar);
  } else if (operator === "-") {
    holdingVar = minusFunction(holdingVar, tempVar);
  } else if (operator === "*") {
    holdingVar = productFunction(holdingVar, tempVar);
  } else {
    holdingVar = divisionFunction(holdingVar, tempVar);
  }
  display.innerHTML = holdingVar;
  tempVar = "0";
  operator = "";
}

function clearKey() {
  if (tempVar === "0") {
    holdingVar = "0";
    display.innerHTML = "0";
  } else {
    tempVar = "0";
    display.innerHTML = holdingVar;
  }
}
