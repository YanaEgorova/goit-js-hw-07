'use strict';

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>
// <div id="boxes"></div>

const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const getColor = function () {
  const max = 255;
  const min = 0;
  const red = Math.round(Math.random() * (max - min) + min);
  const green = Math.round(Math.random() * (max - min) + min);
  const blue = Math.round(Math.random() * (max - min) + min);
  let result = `rgb(${red},${green},${blue})`;
  return result;
}
const createBoxes = function (amount) {
  let result = [];
  let beginningValueOfWidth = 30;
  let beginningValueOfHeight = 30;
  const widthIncrease = function () {
    beginningValueOfWidth += 10;
  }
  const heightIncrease = function () {
    beginningValueOfHeight += 10;
  }
  for (let i = 1; i <= amount; i += 1) {
    let element = document.createElement('div');
    const backGroundColor = getColor();
    element.style.width = `${beginningValueOfWidth }px`;
    element.style.height = `${beginningValueOfHeight}px`;
    element.style.backgroundColor = backGroundColor;
    result.push(element);
    widthIncrease();
    heightIncrease();
  }
  const fragment = document.createDocumentFragment();
  result = result.map(el => {
    fragment.append(el);
    return fragment;
  })
  boxesContainer.appendChild(fragment)
}
const destroyBoxes = function () {
  boxesContainer.innerHTML = '';
}
const takeInputValue = function () {
  const amount = input.value;
  createBoxes(amount);
}
buttonRender.addEventListener('click', takeInputValue);
buttonDestroy.addEventListener('click', destroyBoxes);