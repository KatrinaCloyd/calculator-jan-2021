const sumBtn = document.getElementById('sum-button');
const subBtn = document.getElementById('subtract-button');
const multBtn = document.getElementById('multiply-button');
const divBtn = document.getElementById('divide-button');
const mathResults = document.getElementById('answer');


sumBtn.addEventListener('click', () => {
    const num1 = document.getElementById('number-1');
    const num2 = document.getElementById('number-2');
    const result = Number(num1.value) + Number(num2.value);
    mathResults.textContent = 'Your Answer is ' + result + '!';
});

subBtn.addEventListener('click', () => {
    const num1 = document.getElementById('number-1');
    const num2 = document.getElementById('number-2');
    const result = Number(num1.value) - Number(num2.value);
    mathResults.textContent = 'Your Answer is ' + result + '!';
});

multBtn.addEventListener('click', () => {
    const num1 = document.getElementById('number-1');
    const num2 = document.getElementById('number-2');
    const result = Number(num1.value) * Number(num2.value);
    mathResults.textContent = 'Your Answer is ' + result + '!';
});

divBtn.addEventListener('click', () => {
    const num1 = document.getElementById('number-1');
    const num2 = document.getElementById('number-2');
    const result = Number(num1.value) / Number(num2.value);
    mathResults.textContent = 'Your Answer is ' + result + '!';
    if (num1 = NaN) {
        mathResults.textContent = 'You did not enter a NUMBER!';
    }
});