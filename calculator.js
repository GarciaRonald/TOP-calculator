const tempDisplay = document.querySelector('.temp-display');
const mainDisplay = document.querySelector('.main-display');
const btnDigits = document.querySelectorAll('.digit');

let firstNumber = '';
let secondNumber = '';
let operator = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, op, num2) => {
    n1 = Number(num1);
    n2 = Number(num2);

    if (op === '+') {
        return add(n1, n2);
    } else if (op === '-') {
        return subtract(n1, n2);
    } else if (op === '*') {
        return multiply(n1, n2);
    } else if (op === '/') {
        return divide(n1, n2);
    }
};

const updateDisplay = mDisplay => {
    mainDisplay.textContent = mDisplay;
};

const handleDigits = e => {
    let digit = e.target.textContent;
    
    if (operator === '' && secondNumber === '') {
        firstNumber += digit;
        updateDisplay(firstNumber);
    }
};

btnDigits.forEach(btn => {
    btn.addEventListener('click', handleDigits);
});