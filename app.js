import { addClickHandler, subClickHandler, divClickHandler, multClickHandler } from './handlers.js';

const sumBtn = document.getElementById('sum-button');
const subBtn = document.getElementById('subtract-button');
const multBtn = document.getElementById('multiply-button');
const divBtn = document.getElementById('divide-button');

sumBtn.addEventListener('click', addClickHandler);

subBtn.addEventListener('click', subClickHandler);

multBtn.addEventListener('click', multClickHandler);

divBtn.addEventListener('click', divClickHandler);