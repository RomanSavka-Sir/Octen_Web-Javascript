// Домашнє завдання

// -- створити об'єкт (не менше 5 ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//     name: "Snoofy", age: 4, height: 55, weight:15, color: "black"
// }
// let car = {
//     name: "BMW", country: "Germany", haveradio: true, cost: "$40000", color: "red"
// }
// let man = {
//     name: "Іван", age: 28, height: 175, weight:78, havecar: true
// }
// let apartment = {
//     numberofrooms: 3, cost:"$60000", city: "Lviv", whenwasbuild: 2020, flat: 7
// }
// let book = {
//     name: "Harry potter and order of fenix", haspictures:true, numberofpages: 890, publishinghouse:"Ранок", cost: "190грн"
// }


// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let Array = [{name: "Snoofy", age: 4, height: 55, weight:15, color: "black"},{ name: "Daddy", age: 2, height: 51, weight:12, color: "black"}, {name: "Rex", age: 8, height: 65, weight:25, color: "white"}, {name: "Dora", age: 7, height: 27, weight:5, color: "brown"}, {name: "kolt", age: 12, height: 70, weight:28, color: "white"}];
// console.log(Array);
//
// let Array = [{name: "Іван", age: 28, height: 175, weight:78, havecar: true}, {name: "Ірина", age: 19, height: 164, weight:56, havecar: false}, {name: "Антон", age: 12, height: 148, weight:40, havecar: false}, {name: "Олена", age: 38, height: 168, weight:63, havecar: true}, {name: "Роман", age: 70, height: 186, weight:89, havecar: false} ];
// console.log(Array);
//
// let Array =[{name: "BMW", country: "Germany", haveradio: true, cost: "$40000", color: "red"}, {name: "Audi", country: "Germany", haveradio: true, cost: "$19000", color: "black"}, {name: "Renault", country: "France", haveradio: false, cost: "$5000", color: "white"}, {name: "Mercedes", country: "Germany", haveradio: true, cost: "$25000", color: "green"}, {name: "Fiat", country: "Italy", haveradio: false, cost: "$3500", color: "grey"} ]
// console.log(Array);


// -- створити об'єкт (не менше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
//     country:"Germany", numberofrooms: 5, hasbasemant: true, color:["green"," white","blue"], status: {action: "sold"}};
// let driver= {name: "Остап", hasawife: true, appearance: ["weight: 80", "height: 180"], age: 38, city:{name: "Lviv"}};
// let toy = {name: "Aligator", material: "plastic", year: 2020, characteristics:["weight: 2", "width: 25"], status: {condition: "new"}};
// let table = {material: "wood", status: "new", year: 2020, characteristics:["weight: 8", "width: 140", "height: 60"], type: { style:"classic"}};
// let bag = {material: "fabric", status: "used", year: 2020, characteristics:["weight: 4.5", "width: 40", "height: 60"], type: { using: "forschool"}};


// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//
// console.log(users[7].status);
//
// - статус Максима
//
// console.log(users[10].status);
//
// - ім'я передостаннього об'єкту
//
// console.log(users[9].name);
//
// - ім'я третього об'єкта
//
// console.log(users[2].name);
//
// - вік Олега
//
// console.log(users[6].age);
//
// - вік Олі
//
// console.log(users[3].age);
//
// - вік + ім'я 5го об'єкта
//
// console.log(users[4].age, users[4].name);
//
// - вік + сатус Анни
//
// console.log(users[5].age, users[5].status);
//
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let ars = document.getElementById("content");
// console.log(ars);

// - отримує текст з блоку з id "rules"

// let asp =document.getElementById("rules");
// console.log(asp);

// - замініть текст параграфа з id 'content' на будь-який інший

// ars.innerText = "Вас вітає група, яка настільки популярна, що її заборонено озвучувати пошепки!!!";

// - замініть текст параграфа з id 'rules' на будь-який інший

// asp.innerText = "Привіт салаги!!!\n  До роботи!!!";

// - змініть кожному елементу колір фону на червоний

// asp.style.backgroundColor = "red";
// ars.style.backgroundColor = "red";

// - змініть кожному елементу колір тексту на синій

// ars.style.color = "blue";
// asp.style.color = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let id = document.getElementById('rules');
// console.log(id.classList);

// - отримати всі елементи з класом fc_rules

// let arr = document.getElementsByClassName("fc_rules");
// console.log(arr);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.color = "red";
// }




// =================
// =====class=======
// =================




// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let arr = document.getElementById("main_header");
// arr.style.color = "pink";
// console.log(arr);

// -- робить шириниу елементу ul 400 пікселів

// let iss = document.getElementsByTagName("ul");
// for (let arrElement of iss) {
//   arrElement.style.width = "400px";
// }
// console.log(iss);

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let el = document.getElementsByClassName("linkList");
// for (let i = 0; i < el.length; i++) {
//   el[i].style.width = "50%";
// }
// console.log(el);

// -- отримує текст який зберігається в елементі з класом listElement2

// let irr = document.getElementsByClassName("listElement2");
// for (let irrElement of irr) {
//   console.log(irrElement);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let irr = document.getElementsByTagName("li");
// for (let i = 0; i < irr.length; i++) {
//   console.log(irr[i]);
// }
// for (let irrElement of irr) {
//   irrElement.style.backgroundColor = "grey";
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let irr = document.getElementsByTagName("a");
// for (let irrElement of irr) {
//   irrElement.classList.add("anchor");
//   console.log(irrElement);
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let irr = document.getElementsByTagName("a");
// for (let i = 0; i < irr.length; i++) {
//   if (irr[i].innerText === "link3") {
//     irr[i].style.fontSize = "40px";
//   }
//   console.log(irr[i]);
//
// }`

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let irr = document.getElementsByTagName("a");
// for (let i = 0; i < irr.length; i++) {
// irr[i].classList.add("element_XXX");
// irr[i].innerText = "XXX";
//   console.log(irr[i]);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let irr = document.getElementsByClassName("sub-header");
// iss = prompt("please enter background color: ");
// for (let irrElement of irr) {
//   console.log(irrElement);
//   irrElement.style.backgroundColor = iss;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let irr = document.getElementsByClassName("sub-header");
// iss = prompt("please enter background color: ");
// for (let irrElement of irr) {
//   if(irrElement.innerText === "content 2 segment"){
//     irrElement.style.backgroundColor = iss;
//   }
//   console.log(irrElement);
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let irr = document.getElementsByClassName("content_1");
// let iss = prompt("please enter text: ");
// for (let i = 0; i < irr.length; i++) {
//   irr[i].innerText = iss;
//   console.log(irr[i]);
//
// }

// -- отримати елементи p та змінити їм padding на довільне значення

// let irr = document.getElementsByTagName("p");
// let i = 0;
// while(i<irr.length){
//   irr[i].style.padding = "10px";
//   console.log(irr[i]);
//   i++;
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let irr = document.getElementsByClassName("text2");
// for (let irrElement of irr) {
//   irrElement.innerText = "Hello my little friend";
//   console.log(irrElement);
// }