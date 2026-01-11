const tempDisplay = document.querySelector('.temp-display');
const mainDisplay = document.querySelector('.main-display');
const btnDigits = document.querySelectorAll('.digit');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let results = 0;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, op, num2) => {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let divError = '';

    if (op === '+') {
        return add(n1, n2);
    } else if (op === '-') {
        return subtract(n1, n2);
    } else if (op === '*') {
        return multiply(n1, n2);
    } else if (op === '/') {
        if (divide(n1, n2) === Infinity) {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            return 'Error';
        }
        return divide(n1, n2);
    }
};

const updateDisplay = (mDisplay, tDisplay) => {
    mainDisplay.textContent = mDisplay;
    tempDisplay.textContent = tDisplay;
};

const handleDigits = e => {
    let digit = e.target.textContent;
    
    if (operator === '' && secondNumber === '') {
        firstNumber += digit;
        updateDisplay(firstNumber, '');
    } else if (operator !== '') {
        secondNumber += digit;
        updateDisplay(secondNumber, `${firstNumber} ${operator}`);
    }
};

const handleOperators = e => {
    let oper = e.target.textContent;

    if (firstNumber === '' && secondNumber === '' && operator === '') {
        return;
    } else if (firstNumber !== '' && secondNumber === '' && operator === '') {
        operator = oper;
        updateDisplay('', `${firstNumber} ${oper}`);
    } else if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        results = operate(Number(firstNumber), operator, Number(secondNumber));
        updateDisplay(results, `${firstNumber} ${operator} ${secondNumber}`);
        firstNumber = results;
        operator = oper;
        secondNumber = '';
    }
};

const handleEqual = () => {
    if (firstNumber === '' || secondNumber === '' || operator === '') {
        updateDisplay('Error', '');
        firstNumber = '';
        secondNumber = '';
        operator = '';
    } else if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        results = operate(Number(firstNumber), operator, Number(secondNumber));
        updateDisplay(results, `${firstNumber} ${operator} ${secondNumber}`);
        firstNumber = results;
        operator = '';
        secondNumber = '';
    }
};

const handleClear = () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay('', '');
};

btnDigits.forEach(btn => btn.addEventListener('click', handleDigits));
btnOperators.forEach(btn => btn.addEventListener('click', handleOperators));
btnEqual.addEventListener('click', handleEqual);
btnClear.addEventListener('click', handleClear);