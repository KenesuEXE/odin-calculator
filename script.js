function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b != 0) return a / b;
    alert("No! That's illegal.");
    clear();
}

function operate (operator, a, b) {
    console.log(a, operator, b)
    if (operator == "+") return add(a, b); 
    if (operator == "-") return subtract(a, b); 
    if (operator == "*") return multiply(a, b); 
    if (operator == "/") return divide(a, b);
}

function clear () {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    isOperating = false;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;
let isOperating = false;

const keypad = document.querySelectorAll("button");
keypad.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;
        const display = document.querySelector(".display");
        console.log(buttonId);

        if (parseInt(buttonId) || buttonId == "0") {
            if (isOperating) {
                display.textContent = "";
                isOperating = false;
            }

            display.textContent = display.textContent + buttonId;
        }
    
        else if (buttonId == "+" || buttonId == "-" || buttonId == "*" || buttonId == "/"){
            if (operator) {
                secondNumber = display.textContent;
                firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            }
            else firstNumber = display.textContent;

            display.textContent = Math.round(firstNumber * 100) / 100;
            isOperating = true;
            operator = buttonId;
        }

        else if (buttonId == "=") {
            secondNumber = display.textContent;
            answer = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            if (answer || answer == "0") {
                firstNumber = answer;
                display.textContent = Math.round(answer * 100) / 100;
                operator = null;
            }
        }

        else if (buttonId == "negate") display.textContent = -display.textContent;

        else if (buttonId == "c") {
            display.textContent = "";
            clear()
        }
    });
  });