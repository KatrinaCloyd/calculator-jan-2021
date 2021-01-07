// import functions and grab DOM elements
const welcomeElem = document.getElementById('welcome');
const body = document.getElementById('wholePage');
const myButton = document.getElementById('change-button');
const otherButton = document.getElementById('fix-button');
const input = document.getElementById('text')

// initialize state

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    welcomeElem.style.color = 'red';
    welcomeElem.textContent = input.value;
    body.style.background = "blue";
});

otherButton.addEventListener('click', () => {
    location.reload(false);
});
