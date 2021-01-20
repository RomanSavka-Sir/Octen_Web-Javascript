// - створити функцію яка виводить масив

// function Array(masive) {
//     for (let masiveElement of masive) {
//         console.log(masiveElement)
//     }
// }
//
// Array(x = [1,34,56,78,54]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomArray (long) {
//     let arr = [];
//     for (let i = 0; i < long; i++) {
//          arr.push(Math.ceil(Math.random() * (100 - 1) + 1));
//     }
// return arr;
//
// }
//
//  let arry = randomArray(6);
// Array(arry);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbersmin(one, two, three) {
//     let min = three;
//     if(one<two && one<three){
//         min =  one;
//     }
//     if (two<one && two<three){
//         min = two;
//     }
//     return min;
// }
//
// let arry =  numbers(900, 40,-1);
//
// console.log(arry);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function numbersmax(one, two, three) {
//     let max = three;
//     if(one>two && one>three){
//         max =  one;
//     }
//     if (two>one && two>three){
//         max = two;
//     }
//     return max;
// }
//
// let arry1 =  numbersmax(-1000, 40,41);
//
// console.log(arry1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше

// function variables() {
// let max = 0;
// let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i] > max){
// max = arguments[i];
//         }
//         if(arguments[i]<min){
//             min = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
//
// }
//
// variables(7,56,43,2,80);

// - створити функцію яка виводить масив

// function Array(masive) {
//     for (let masiveElement of masive) {
//         console.log(masiveElement)
//     }
// }
//
// Array(x = [1,34,56,78,54]);

// - створити функцію яка повертає найбільше число з масиву

// function Max(massive) {
//
//     let max = 0;
//     for (let i = 0; i < massive.length; i++) {
//         if(massive[i] > max){
//             max = massive[i];
//         }
//     }
//     console.log(max);
//     return max;
// }
//
// Max([453,2,3,4,5]);

// - створити функцію яка повертає найменьше число з масиву

// function Min (massive) {
//
//     let min = massive[0];
//     for (let i = 0; i < massive.length; i++) {
//         if(massive[i] < min){
//             min = massive[i];
//         }
//     }
//     console.log(min);
//     return min;
// }
// Min([143,70,32,-40,91]);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function Sum(massive) {
//     let sum = 0
//     for (let i = 0; i < massive.length; i++) {
//         sum = sum + massive[i];
//     }
//     console.log(sum);
//     return sum;
//
// }
//
// Sum([1,45,67,45,90]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function Arravage(massive) {
//     let sum = 0
//     let arr = 0;
//     for (let i = 0; i < massive.length; i++) {
//         sum = sum + massive[i];
//         arr = sum / massive.length;
//     }
//     console.log(arr);
//     return arr;
//
// }
//
// Arravage([60,50,31,20,3]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function Massive(mass) {
//     let a = 0;
//     for (let i = 0; i < mass.length; i++) {
//         a = mass.length;
//     }
//     console.log(a);
//     return a;
// }
//
// Massive([{name: "oleh", age: 20}, {name:"anton", age:12}, {}, {}, {}]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function Massive(mass) {
//     let count =0;
//     for (let masKey of mass) {
//         for (let masKeyKey in masKey) {
//             count++;
//         }
//     }
//     return count;
// }
//
//  let number = Massive([{name: "oleh", age: 20},
//     {name: "anton", age: 12},
//     {name:"olya"},
//     {name:"Nastya", age: 24}]);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function SumMass(a, b) {
//         let k = [];
//         for (let i = 0; i < a.length; i++) {
//          k[i] = a[i] + b[i];
//         }
//     console.log(k);
//         return k;
// }
//
// SumMass([1, 4, 5, 6,], [3,4,3,1]);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arrr =[{name: "oleh", age: 20},
//     {name: "anton", age: 12},
//     {name:"olya"},
//     {name:"Nastya", age: 24}];
// let s = JSON.stringify(arrr);
// let parse = JSON.parse(s);
//
//
//
// function Change(mass, index) {
//    if(index < mass.length){
//        let a = mass[index];
//        mass[index] = mass[index+1];
//        mass[index+1] = a;
//
//    }
// return mass;
// }
//
// let change = Change(arrr, 2);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let Array = function (massive) {
//     for (let i = massive.length-1; i>=0; i--) {
// if(massive[i] === 0){
//     massive.splice(i, 1);
//     massive.push(0);
// }
//     }
//     return massive;
// }
//
// let array = Array([0,0,2,0,0,8,9,7,6,0,0]);



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function Add() {
//     let divElement = document.createElement("div");
//     divElement.innerText = "Hello owu";
//     document.body.appendChild(divElement);
// }
//
// Add();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function Add(element, text) {
//     let Element = document.createElement(element);
//     Element.innerText = text;
//     document.body.appendChild(Element);
// }
//
//
// Add("div", "Привіт світ");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let cars = [{model: "Audi", year: 1995, power: 1.1, color: "grey"},
//     {model: "BMW", year: 2010, power: 2.5, color: "white"},
//     {model: "Deo", year: 2003, power: 1.5, color: "black"},
//     {model: "Suzuki", year: 2007, power: 1.4, color: "red" },
//     {model: "Mercedes", year: 2018, power: 2.5, color: "silver"},
//     {model: "Toyota", year: 2014, power: 2.1, color: "white"},
//     {model: "Renault", year: 1998, power: 1.3, color: "green"},
//     {model: "Volvo", year: 2010, power: 1.8, color: "black"},
//     {model: "Jeep", year: 2006, power: 1.6, color: "white"},
//     {model: "Skoda", year: 2007, power: 1.5, color: "black"}]

// let Array = function (massive, id) {
//     let elementById = document.getElementById(id);
// let htmluListElement = document.createElement("ul");
//
//     for (let i = 0; i < massive.length; i++) {
//         let htmlliElement = document.createElement("li");
//         htmlliElement.innerText = massive[i].model;
//         htmluListElement.appendChild(htmlliElement);
//     }
//     elementById.appendChild(htmluListElement);
// }
// Array(cars, "content");

//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let Array = function(massive, id){
//     let elementById = document.getElementById(id);
//     for (let massiveElement of massive) {
//         let htmlDivElement = document.createElement("div");
//         htmlDivElement.innerText = massiveElement.model + " " + massiveElement.year + " " +  massiveElement.power + " " +  massiveElement.color;
//         elementById.appendChild(htmlDivElement);
//     }
//
// }
//
// Array(cars, "content");


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.

// let Array = function (massive, id) {
//     let elementById = document.getElementById(id);
// let htmluListElement = document.createElement("ul");
//
//     for (let i = 0; i < massive.length; i++) {
//         let htmlliElement = document.createElement("li");
//         htmlliElement.innerText = massive[i].model;
//         htmluListElement.appendChild(htmlliElement);
//     }
//     elementById.appendChild(htmluListElement);
// }
// Array(cars, "content");

// Для кожної властивості створити всередені блока автомоблія свій блок

// let Array = function (massive, id) {
//     let elementById = document.getElementById(id);
// let htmluListElement = document.createElement("ul");
//
//     for (let i = 0; i < massive.length; i++) {
//         let htmlliElement = document.createElement("li");
// let h2 = document.createElement("h4");
//         let h3 = document.createElement("h4");
//         let h4 = document.createElement("h4");
//         h2.innerText = massive[i].year;
//         h3.innerText = massive[i].power;
//         h4.innerText  = massive[i].color;
//         htmlliElement.innerText = massive[i].model;
// htmlliElement.appendChild(h4);
// htmlliElement.appendChild(h3);
// htmlliElement.appendChild(h2);
//         htmluListElement.appendChild(htmlliElement);
//     }
//     elementById.appendChild(htmluListElement);
// }
// Array(cars, "content");







// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Частковий приклад реультату:
// Приклад масивів:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
//
// function MatchArrays(array1,array2){
//     let user3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             array1[i].cities = array2[j];
//             user3.push(array1[i]);
//
//         }
//     }
//
//     return user3;
// }
//
// let user = MatchArrays(usersWithId, citiesWithId);
// console.log(user);





// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
// function Array(massive){
//   let id = document.createElement("div")
//  id.id = "wrap";
//
//
//     for (let i = 0; i < massive.length; i++) {
//         let divElement = document.createElement("div");
// let h2 = document.createElement("h2");
// let p = document.createElement("p");
// divElement.className = `rules`;
//         h2.innerText = massive[i].title;
// p.innerText = massive[i].body;
// divElement.appendChild(h2);
// divElement.appendChild(p);
//         id.appendChild(divElement);
//     }
//
// document.body.appendChild(id);
// }
//
// Array(rules);







// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========