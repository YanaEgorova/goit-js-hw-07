'use strict';
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul.list, найдет и выведет в консоль текст заголовка элемента (теге h2) 
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

let categoriesItemsByClass = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemsByClass.length} категории`);
const fn = ([...array]) => {
  let result = array.map(el => {
    const result = `Категория: ${el.children[0].textContent} Количество элементов: ${el.children[1].children.length}`;
    return result;
  })
  result = result.map(el => console.log(el));
}

fn(categoriesItemsByClass);