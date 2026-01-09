let firstNumber;
let secondNumber;
let operator;

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