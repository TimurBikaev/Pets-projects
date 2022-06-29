//СДЕЛАНО: ДОБАВИТЬ ФИЧУ ПРОВЕРКИ НА МИНУСОВОЕ ЗНАЧЕНИЕ
//СДЕЛАНО: Баг: на плюс добавляется 101 литр
//СДЕЛАНО: ДОБАВИТЬ ФИЧУ С ВАРИАНТАМИ ДОБАВИТЬ КОФЕ ИЛИ ХОТДОГ
//СДЕЛАНО: ВЫДАЧА ЧЕКА С ИТОГОВЫМИ ПОЗИЦИЯМИ

//ДОБАВИТЬ ВЫДЕЛЕНИЕ ВЫБРАННОГО ТИПА БЕНЗИНА
//ДОБАВИТЬ ФИЧУ ЗАПРАВЩИКА С ЧАЕВЫМИ
//ДОБАВИТЬ ВЫБОР КОЛОНКИ элементом Select
//ДОБАВИТЬ ИЗМЕНЕНИЕ ЦВЕТf ВЫБРАННЫХ ПОЗИЦИЙ через функцию change color

//ДОБАВИТЬ: После оплаты на выбранную колонку (картинку) появляется подсветка. + на подносе появляются картинки выбранных закусок. Если выбран заправщик - появляется он тоже рядом с выбранной колонкой
//Добавить базу sql и отправлять туда заказы

const range = document.querySelector("input");
const counterNode = document.querySelector(".counter"); //в переменную сохраняем тот див, который будет отображать счетчик

range.value = 50;
counterNode.innerHTML = range.value;
let counter = document.querySelector(".counter").innerHTML; ///КАК БЛИН ПРИСВОИТЬ ЗНАЧЕНИЕ ИЗ ДИВА

function adding() {
  if (range.value != 100) {
    counter = +range.value + 1; //- 0 + 1;
    range.value = counter;
  } else (counter = +range.value), alert("Выбран максимальный объем");
}
function minus() {
  counter = range.value - 1;
  range.value = counter;
}

function reset() {
  //короткая функция операции сброса
  counter = 0;
  range.value = 0;
  amountNode.innerHTML = ``;
}

function render() {
  counterNode.innerHTML = counter;
}

function total() {
  amountTotal.innerHTML = `К оплате
    ${
      +amountNode.innerText.replace(/\D/g, "") +
      +amountNode1.innerText.replace(/\D/g, "") +
      +amountNode2.innerText.replace(/\D/g, "") +
      +amountNode3.innerText.replace(/\D/g, "") +
      +amountNode4.innerText.replace(/\D/g, "")
    } р.`;
}

var amountNode = document.querySelector(".amount-gas");
const amountNode1 = document.querySelector(".amount-eat1");
const amountNode2 = document.querySelector(".amount-eat2");
const amountNode3 = document.querySelector(".amount-eat3");
const amountNode4 = document.querySelector(".amount-eat4");
var amountTotal = document.querySelector(".amount-total");

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
  reset(), render(), total();
});

const gasType = document.querySelectorAll(".gas");

// gasType.forEach((button) =>
//   button.addEventListener("mouseover", function () {
//     console.log("навели");
//   })
// );
// gasType.forEach((button) =>
//   button.addEventListener("mouseout", function () {
//     console.log("отвели");
//   })
// );
// var fuel;

for (let i = 0; i < gasType.length; i++) {
  gasType[i].onclick = function () {
    let liters = document.querySelector(".counter").innerHTML;
    let price = this.getAttribute("price");
    //let ai = this.getAttribute("ai");
    var fuel = price * liters;
    amountNode.innerHTML = `Топливо ${fuel} р.`;

    total();

    // amountNode.value = fuel;

    // fuel = document.querySelector(".amount-gas").innerHTML;
    // //"Привет1274 ме234ня зо65вут 7987Ефим!";
    // fuel.replace(/\D/g, "");
    // console.log(fuel.replace(/\D/g, ""));
  };
}
// console.log(amountNode.value);

//const range = document.querySelector("input");
function updateValue() {
  counterNode.innerHTML = range.value;
}
range.oninput = updateValue;

//БУФЕТ
// const eatSum = summ;

document.querySelector(".coffee1").addEventListener("click", () => {
  if (document.querySelector(".coffee1").checked) {
    const price = 100;
    let name = document.querySelector(".coffee1").name;

    amountNode1.innerHTML = `${name} ${price} р.`;

    total();
  } else amountNode1.innerHTML = ``;
  total();
});

document.querySelector(".coffee2").addEventListener("click", () => {
  if (document.querySelector(".coffee2").checked) {
    const price = 110;
    let name = document.querySelector(".coffee2").name;

    amountNode2.innerHTML = `${name} ${price} р.`;

    total();
  } else amountNode2.innerHTML = ``;
  total();
});

document.querySelector(".hot-dog").addEventListener("click", () => {
  if (document.querySelector(".hot-dog").checked) {
    const price = 130;
    let name = document.querySelector(".hot-dog").name;

    amountNode3.innerHTML = `${name} ${price} р.`;

    total();
  } else amountNode3.innerHTML = ``;
  total();
});

document.querySelector(".pecan").addEventListener("click", () => {
  if (document.querySelector(".pecan").checked) {
    const price = 90;
    let name = document.querySelector(".pecan").name;

    amountNode4.innerHTML = `${name} ${price} р.`;

    total();
  } else amountNode4.innerHTML = ``;
  total();
});
// var stroka = amountNode.innerHTML;
// // amountTotal.innerHTML=
// console.log(stroka.replace(/\D/g, ""));
// //   let price = this.getAttribute("price");
// //   console.log(111);
// //   amountNode1.innerHTML = ` Стоимость буфета ${price}`;
// };

// var stroka = document.querySelector(".amount-gas").innerHTML;
// //"Привет1274 ме234ня зо65вут 7987Ефим!";
// stroka.replace(/\D/g, "");
// console.log(stroka.replace(/\D/g, ""));

//РАБОЧЕЕ:
// var total = document.querySelector(".total").innerText.replace(/\D/g, "");
// console.log(total);

const totBtn = document.querySelector(".tot-btn"); //в переменную сохраняем выбор кнопки на странице с классом кнопки минуса

totBtn.addEventListener("click", () => {
  amountTotal.innerHTML = `К оплате
    ${
      +amountNode.innerText.replace(/\D/g, "") +
      +amountNode1.innerText.replace(/\D/g, "") +
      +amountNode2.innerText.replace(/\D/g, "") +
      +amountNode3.innerText.replace(/\D/g, "") +
      +amountNode4.innerText.replace(/\D/g, "")
    } р.`;
});

// total =
//   amountNode.innerText.replace(/\D/g, "") +
//   amountNode1.innerText.replace(/\D/g, "");

// console.log(total);
// var totalLine0 = amountNode.innerText.replace(/\D/g, "");
// console.log(totalLine0);
// var totalLine1 = amountNode1.innerText.replace(/\D/g, "");
// console.log(totalLine1);
// amountTotal.innerHTML = +totalLine0 + +totalLine1 - 0;
// console.log(+totalLine0 + +totalLine1 - 0);
