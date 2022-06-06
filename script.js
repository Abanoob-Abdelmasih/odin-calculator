'use strict';

const bottomScreen = document.getElementById('bot-screen');
const buttons = document.querySelectorAll('.button');

// /////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operande, a, b) {
  switch (operande) {
    case '+':
      add(a, b);
      break;
    case '-':
      subtract(a, b);
      break;
    case 'x':
      multiply(a, b);
      break;
    case '/':
      divide(a, b);
      break;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case '←':
        bottomScreen.innerText = bottomScreen.innerText.slice(0, -1);
        break;
      case 'C':
        bottomScreen.innerText = '';
        break;
      default:
        bottomScreen.innerText += e.target.innerText;
        let value = Number(bottomScreen.innerText);
    }
  });
});
