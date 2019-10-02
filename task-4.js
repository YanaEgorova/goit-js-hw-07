'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let value = document.querySelector('#value');

const handleIncrement = function () {
  counterValue += 1;
  value.textContent = counterValue;
}

const handleDecrement = function () {
  counterValue -= 1;
  value.textContent = counterValue;
}

buttonDecrement.addEventListener('click', handleDecrement);
buttonIncrement.addEventListener('click', handleIncrement);