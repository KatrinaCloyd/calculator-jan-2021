import { sumResult, subResult, divResult, multResult } from './mathUtil.js';

const num1 = document.getElementById('number-1');
const num2 = document.getElementById('number-2');
const mathResults = document.getElementById('answer');

export function addClickHandler() {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    const sum = sumResult(firstNumber, secondNumber);
    mathResults.textContent = 'Your Answer is ' + sum + '!';
    if (isNaN(sum)) {
        mathResults.textContent = 'You did not enter a NUMBER. Try again.';
    }
    else {
        mathResults.textContent = 'Your Answer is ' + sum + '!';
    }
}

export function subClickHandler() {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    const ans = subResult(firstNumber, secondNumber);
    mathResults.textContent = 'Your Answer is ' + ans + '!';
    if (isNaN(ans)) {
        mathResults.textContent = 'You did not enter a NUMBER. Try again.';
    }
    else {
        mathResults.textContent = 'Your Answer is ' + ans + '!';
    }
}

export function divClickHandler() {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    const ans = divResult(firstNumber, secondNumber);
    mathResults.textContent = 'Your Answer is ' + ans + '!';
    if (isNaN(ans)) {
        mathResults.textContent = 'You did not enter a NUMBER. Try again.';
    }
    else {
        mathResults.textContent = 'Your Answer is ' + ans + '!';
    }
}

export function multClickHandler() {
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);
    const ans = multResult(firstNumber, secondNumber);
    mathResults.textContent = 'Your Answer is ' + ans + '!';
    if (isNaN(ans)) {
        mathResults.textContent = 'You did not enter a NUMBER. Try again.';
    }
    else {
        mathResults.textContent = 'Your Answer is ' + ans + '!';
    }
}