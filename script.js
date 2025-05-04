// script.js

let display = document.getElementById('display');
let currentInput = '';
let prevInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    prevInput = '';
    operation = '';
    display.value = '0';
}

function setOperation(op) {
    if (currentInput === '') return;
    prevInput = currentInput;
    currentInput = '';
    operation = op;
}

function calculate() {
    if (currentInput === '' || prevInput === '') return;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput);
            break;
    }
    display.value = result;
    currentInput = result.toString();
    prevInput = '';
    operation = '';
}
