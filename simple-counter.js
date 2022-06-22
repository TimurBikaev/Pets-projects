//ДОБАВИТЬ ФИЧУ ПРОВЕРКИ НА МИНУСОВОЕ ЗНАЧЕНИЕ
//ДОБАВИТЬ ФИЧУ С ВАРИАНТАМИ ДОБАВИТЬ КОФЕ ИЛИ ХОТДОГ
//ДОБАВИТЬ ФИЧУ ЗАПРАВЩИКА С ЧАЕВЫМИ
//ДОБАВИТЬ ВЫБОР КОЛОНКИ
//ДОБАВИТЬ ИЗМЕНЕНИЕ ЦВЕТЫ ВЫБРАННЫХ ПОЗИЦИЙ через функцию change color
//ВЫДАЧА ЧЕКА С ИТОГОВЫМИ ПОЗИЦИЯМИ

function adding() {
  //короткая функция операции добавления
  counter++;
}
function minus() {
  //короткая операция вычитания
  counter = counter - 1;
}
function reset() {
  //короткая функция операции сброса
  counter = 0;
}

function render() {
  counterNode.innerHTML = counter;
}

let counter = 0;

const counterNode = document.querySelector(".counter"); //в переменную сохраняем тот див, который будет отображать счетчик

const amountNode = document.querySelector(".amount");

const incBtn = document.querySelector(".inc-btn"); //в переменную сохраняем выбор элемента страницы с классом созданной кнопки добавления

const clearBtn = document.querySelector(".clear-btn"); //в переменную сохраняем выбор элемента с классом кнопки сброса

const minBtn = document.querySelector(".min-btn"); //в переменную сохраняем выбор кнопки на странице с классом кнопки минуса

incBtn.addEventListener("click", () => {
  //вешаем на переменную, управляющую нажатием кнопки событие: увеличение счетчика на 1 и присвоение отображающему диву обновленного значения
  adding(), render();
});

minBtn.addEventListener("click", () => {
  minus(), render();
});

clearBtn.addEventListener("click", () => {
  //вешаем на переменную, управляющую кнопкой сброса, событие, которое присваивает счетчику значение 0 и обновляет отображающий див, чтобы показал ноль
  reset(), render();
});

let gasType = document.querySelectorAll(".gas");

for (let i = 0; i < gasType.length; i++) {
  gasType[i].onclick = function () {
    let liters = document.querySelector(".counter").innerHTML;
    let price = this.getAttribute("price");

    amountNode.innerHTML = price * liters;
  };
}

const range = document.querySelector("input");
function updateValue() {
  counterNode.innerHTML = range.value;
}
range.oninput = updateValue;
