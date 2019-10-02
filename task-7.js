'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-slider (событие input) 
// и обновляет инлайн-стиль span#text обновляя его свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размет текста.
// <input id="font-size-slider" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const input = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

input.addEventListener('input', (event) => {
  const value = Number(event.currentTarget.value);
  text.style.fontSize = `${value}px`;
})