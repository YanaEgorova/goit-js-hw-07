'use strict';
// В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const fn = array => {
  let result = ingredients.map(el => {
    const element = document.createElement('li');
    element.textContent = el
    return element
  });
  const fragment = document.createDocumentFragment();
  result = result.map(el => {
    fragment.append(el);
    return fragment;
  })
  const ingredientsList = document.querySelector("#ingredients")
  ingredientsList.appendChild(fragment)
}
console.log(fn(ingredients));