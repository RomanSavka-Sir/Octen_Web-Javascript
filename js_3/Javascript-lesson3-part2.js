// ДОМАШНЄ ЗАВДАННЯ




// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let object1 = {name: "Антон", age: 15, hascar: true};
// let object2 = {weight: 25, material: "plastic", height: 100};
// let object3 = {color: "green", status:"outofstock", hasidnumber:true};
// let object4 = {width: 35, sex:" male", number:3};
// let object5 = {city: "Lviv", hascar:false, haswork:true};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let car = { name: "BMW", type:{seria: "B", class: "premium"}, characteristics: ["black", "universal"] };
// let smartphone = {name : "Apple", characteristics: ["white", "6.7d"], cost:{standart: "$800", full: "$1000"}};
// let animal= {name : "dog", characteristics:["brown", "small"], general:{country:"Ukraine", age: "1"}};
// let painting = {name: "Mona Lisa", characteristics:["oilpainting", "1886year"], general:{country:"Belgium", painter:"Van Gogh"}}
// let room = {numberofflat: 8, characteristics:{widht:125, height: 250}, owners:["Victor", "Olha"]};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let arrayKey in object1) {
//   console.log(arrayKey);
// }
// for (let arrayKey in object2) {
//   console.log(arrayKey);
// }
// for (let arrayKey in object3) {
//   console.log(arrayKey);
// }
// for (let arrayKey in object4) {
//   console.log(arrayKey);
// }
// for (let arrayKey in object5) {
//   console.log(arrayKey);
// }
// for (let arrayKey in car) {
//   console.log(arrayKey);
// }
// for (let arrayKey in smartphone) {
//   console.log(arrayKey);
// }
// for (let arrayKey in animal) {
//   console.log(arrayKey);
// }
// for (let arrayKey in painting) {
//   console.log(arrayKey);
// }
// for (let arrayKey in room) {
//   console.log(arrayKey);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let strings = Object.keys(object1);
// console.log(strings);
// let strings1 = Object.keys(object2);
// console.log(strings1);
// let strings2 = Object.keys(object3);
// console.log(strings2);
// let strings3 = Object.keys(object4);
// console.log(strings3);
// let strings4 = Object.keys(object5);
// console.log(strings4);
// let strings5 = Object.keys(car);
// console.log(strings5);
// let strings6 = Object.keys(smartphone);
// console.log(strings6);
// let strings7 = Object.keys(animal);
// console.log(strings7);
// let strings8 = Object.keys(painting);
// console.log(strings8);
// let strings9 = Object.keys(room);
// console.log(strings9);

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [{model: "Audi", year: 1995, power: 1.1, color: "grey"},
//   {model: "BMW", year: 2010, power: 2.5, color: "white"},
//   {model: "Deo", year: 2003, power: 1.5, color: "black"},
//   {model: "Suzuki", year: 2007, power: 1.4, color: "red" },
//   {model: "Mercedes", year: 2018, power: 2.5, color: "silver"},
//   {model: "Toyota", year: 2014, power: 2.1, color: "white"},
//   {model: "Renault", year: 1998, power: 1.3, color: "green"},
//   {model: "Volvo", year: 2010, power: 1.8, color: "black"},
//   {model: "Jeep", year: 2006, power: 1.6, color: "white"},
//   {model: "Skoda", year: 2007, power: 1.5, color: "black"}]

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [{name: "Lviv", population: 900000, country: "Ukraine", region: "Europe"},
//   {name: "Barcelona", population: 500000, country: "Spain", region: "Europe"},
//   {name: "Milan", population:3400000000 , country: "Italy", region: "Europe"},
//   {name: "Toronto", population: 2500000000, country: "Canada", region: "North America"},
//   {name: "Chicago", population: 3200000000, country: "USA", region: "North America"},
//   {name: "Oslo", population: 1300000000, country: "Norway", region: "Europe"},
//   {name: "New Deli", population: 400000000000, country: "India", region: "Asia"},
//   {name: "Berlin", population: 1400000000, country: "Germany", region: "Europe"},
//   {name: "Paris", population: 3200000000, country: "France", region: "Europe"},
//   {name: "London", population: 50000000000, country: "Great Britain", region: "Europe"}]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars1 = [{model: "Audi", year: 1995, power: 1.1, color: "grey", driver:{ name: "Ihor", age: 25, sex: "Male", experience: 5}},
//   {model: "BMW", year: 2010, power: 2.5, color: "white", driver:{name:"Oksana", age: 40, sex:"Female", experience: 6}},
//   {model: "Deo", year: 2003, power: 1.5, color: "black", driver: {name: "Oleh", age: 21, sex: "Male", experience: 2}},
//   {model: "Suzuki", year: 2007, power: 1.4, color: "red", driver: {name: "Anton", age: 31, sex:"Male", experience: 1}},
//   {model: "Mercedes", year: 2018, power: 2.5, color: "silver", driver: {name: "Vlad", age: 55, sex: "Male", experience: 6}}]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
//
// let j = 0;
// while(j<cities.length){
//     console.log(cities[j]);
//     j++;
// }
//
// let k = 0;
// while(k<cars1.length){
//     console.log(cars1[k]);
//     k++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
//
// for (let j = 0; j < cities.length; j++) {
//     console.log(cities[j]);
// }
//
// for (let k = 0; k < cars1.length; k++) {
//     console.log(cars1[k]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let car of cars) {
//     console.log(car);
// }
//
// for (let car of cities) {
//     console.log(car);
// }
//
// for (let car of cars1) {
//     console.log(car);
// }

// - взять объекты из задания 1 и превратить каждый в json.

// let variable = JSON.stringify(object1);
// console.log(variable);
//
// let variable1 = JSON.stringify(object2);
// console.log(variable1);
//
// let variable2 = JSON.stringify(object3);
// console.log(variable2);
//
// let variable3 = JSON.stringify(object4);
// console.log(variable3);
//
// let variable4 = JSON.stringify(object5);
// console.log(variable4);

// - взять json из задания 11 и превратить их обратно в объекты.

// let parse1 = JSON.parse(variable);
// console.log(parse1);
//
// let parse2 = JSON.parse(variable1);
// console.log(parse2);
//
// let parse3 = JSON.parse(variable2);
// console.log(parse3);
//
// let parse4 = JSON.parse(variable3);
// console.log(parse4);
//
// let parse5 = JSON.parse(variable4);
// console.log(parse5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let cars = [{model: "Audi", year: 1995, power: 1.1, color: "grey"},
//   {model: "BMW", year: 2010, power: 2.5, color: "white"},
//   {model: "Deo", year: 2003, power: 1.5, color: "black"},
//   {model: "Suzuki", year: 2007, power: 1.4, color: "red" },
//   {model: "Mercedes", year: 2018, power: 2.5, color: "silver"},
//   {model: "Toyota", year: 2014, power: 2.1, color: "white"},
//   {model: "Renault", year: 1998, power: 1.3, color: "green"},
//   {model: "Volvo", year: 2010, power: 1.8, color: "black"},
//   {model: "Jeep", year: 2006, power: 1.6, color: "white"},
//   {model: "Skoda", year: 2007, power: 1.5, color: "black"}]
//
// for (let car of cars) {
//     let s = JSON.stringify(car);
//     console.log(s);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [{name: "Lviv", population: 900000, country: "Ukraine", region: "Europe"},
//   {name: "Barcelona", population: 500000, country: "Spain", region: "Europe"},
//   {name: "Milan", population:3400000000 , country: "Italy", region: "Europe"},
//   {name: "Toronto", population: 2500000000, country: "Canada", region: "North America"},
//   {name: "Chicago", population: 3200000000, country: "USA", region: "North America"},
//   {name: "Oslo", population: 1300000000, country: "Norway", region: "Europe"},
//   {name: "New Deli", population: 400000000000, country: "India", region: "Asia"},
//   {name: "Berlin", population: 1400000000, country: "Germany", region: "Europe"},
//   {name: "Paris", population: 3200000000, country: "France", region: "Europe"},
//   {name: "London", population: 50000000000, country: "Great Britain", region: "Europe"}]
//
// for (let i = 0; i < cities.length; i++) {
//     let s = JSON.stringify(cities[i]);
//     console.log(s);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars1 = [{model: "Audi", year: 1995, power: 1.1, color: "grey", driver:{ name: "Ihor", age: 25, sex: "Male", experience: 5}},
//   {model: "BMW", year: 2010, power: 2.5, color: "white", driver:{name:"Oksana", age: 40, sex:"Female", experience: 6}},
//   {model: "Deo", year: 2003, power: 1.5, color: "black", driver: {name: "Oleh", age: 21, sex: "Male", experience: 2}},
//   {model: "Suzuki", year: 2007, power: 1.4, color: "red", driver: {name: "Anton", age: 31, sex:"Male", experience: 1}},
//   {model: "Mercedes", year: 2018, power: 2.5, color: "silver", driver: {name: "Vlad", age: 55, sex: "Male", experience: 6}}]
//
// let cars2 = [];
// for (let i = 0; i < cars1.length; i++) {
//     let s = JSON.stringify(cars1[i]);
//     console.log(s);
//     cars2.push(JSON.stringify(cars1[i]));
//     console.log(cars2[i]);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let newArr = [{name:"Ivan", skills:["English", "German"]},
//     {name:"Anton", skills:["French", "English"]},
//     {name:"Ihor", skills:["English", "Italian"]}];
//
//
// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i].name);
//
//     for (let j = 0; j < newArr[i].skills.length; j++) {
//         console.log(newArr[i].skills[j]);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let newArr = [{name:"Ivan", skills:["English", "German"]},
//     {name:"Anton", skills:["French", "English"]},
//     {name:"Ihor", skills:["English", "Italian"]}];
//
// let arr = [];
// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i].name);
//
//     for (let j = 0; j < newArr[i].skills.length; j++) {
//         console.log(newArr[i].skills[j]);
//         arr.push(newArr[i].skills[j]);
//     }
// }
// console.log(arr);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//
//         console.log(users[i].skills[j]);
//     }
// }


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newarr = [];
// for (let us in users) {
//     console.log(users[us].address);
//     newarr.push(users[us].address);
// }
// console.log(newarr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

//  for (let user of users) {
//     let element = document.createElement("div");
// element.innerText = `${user.name}, ${user.age}, ${user.status}. ${user.address}`;
//  document.body.appendChild(element);
//      console.log(element);
//  }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

//  for (let user of users) {
//      let element = document.createElement("div");
// element.innerText = `${user.name}`
//  document.body.appendChild(element);
//     console.log(element);
//
//      let element1 = document.createElement("div");
//      element1.innerText = `${user.age}`
//      document.body.appendChild(element1);
//      console.log(element1);
//
//      let element3 = document.createElement("div");
//      element3.innerText = `${user.status}`
//      document.body.appendChild(element3);
//      console.log(element3);
//
//      let element4 = document.createElement("div");
//      element4.innerText = `${user.address}`
//      document.body.appendChild(element4);
//      console.log(element4);
//  }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

 // for (let user of users) {
 //     let element = document.createElement("div");
 //     element.innerText = `${user.name}`
 //     document.body.appendChild(element);
 //     console.log(element);
 //
 //     let element1 = document.createElement("div");
 //     element1.innerText = `${user.age}`
 //     document.body.appendChild(element1);
 //     console.log(element1);
 //
 //     let element3 = document.createElement("div");
 //     element3.innerText = `${user.status}`;
 //     document.body.appendChild(element3);
 //     console.log(element3);
 //
 //     let element4 = document.createElement("div");
 //     element4.innerText = `${user.address}`;
 //     document.body.appendChild(element4);
 //     console.log(element4);
 //
 //     let element5 = document.createElement("div");
 //     element5.innerText = `${user.address.city}`;
 //     document.body.appendChild(element5);
 //     console.log(element5);
 //
 //     let element6 = document.createElement("div");
 //     element6.innerText = `${user.address.country}`;
 //     document.body.appendChild(element6);
 //     console.log(element6);
 //
 //     let element7 = document.createElement("div");
 //     element7.innerText = `${user.address.street}`;
 //     document.body.appendChild(element7);
 //     console.log(element7);
 //
 //     let element8 = document.createElement("div");
 //     element8.innerText = `${user.address.houseNumber}`;
 //     document.body.appendChild(element8);
 //     console.log(element8);
 // }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// let arr =[];
// for (let i = 0; i < usersWithId.length; i++) {
// for(let j =0; j <citiesWithId.length; j++){
//
// if (usersWithId[i].id === citiesWithId[j].user_id){
// usersWithId[i].address = citiesWithId[j];
//     arr.push(usersWithId[i]);
// }
// }
// }
// console.log(usersWithId);
// console.log(arr);

// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]



// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let elementById = document.getElementById("task");
// console.log(elementById);
// let elementsByClassName = document.getElementsByClassName("task1");
// console.log(elementsByClassName);
// let elementsByTagName = document.getElementsByTagName("div");
// console.log(elementsByTagName);

// - змінити цей текст використовуючи селектори id, class,  tag

// elementById.innerText = "Good morning";
// for (let elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = "Привіт";
//}
// for (let elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.innerText = "Good afternoon";
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// elementById.style.height = "200px";
// elementById.style.width = "400px";
// for (let elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = "50px";
//     elementsByClassNameElement.style.height = "300px";
// }
// for (let elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.width = "40px";
//     elementsByTagNameElement.style.height = "200px";
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let tableElement = document.createElement("table");
// let tr = document.createElement("tr");
// let td0 = document.createElement("td");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// tr.appendChild(td0);
// tr.appendChild(td1);
// tr.appendChild(td2);
// tableElement.appendChild(tr);
// document.body.appendChild(tableElement);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let tableElement = document.createElement("table");
// for (let i = 0; i < 10; i++) {
// let tr = document.createElement("tr");
//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     tableElement.appendChild(tr);
//
// }
// document.body.appendChild(tableElement);
// console.log(tableElement);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let tableElement = document.createElement("table");
// for (let i = 0; i < 10; i++) {
// let tr = document.createElement("tr");
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     tableElement.appendChild(tr);
//
// }
// document.body.appendChild(tableElement);
// console.log(tableElement);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let n = prompt("Введіть значення n: ");
// let m = prompt("Введіть значення m: ");
//
// let tableElement = document.createElement("table");
// for (let i = 0; i < n; i++) {
// let tr = document.createElement("tr");
//     for (let i = 0; i < m; i++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     tableElement.appendChild(tr);
//
// }
// document.body.appendChild(tableElement);
// console.log(tableElement);



// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class

// let listOf = document.querySelectorAll("[class]");
// console.log(listOf);

// - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let name = document.getElementsByTagName("p");
// console.log(name);
// for (let nameElement of name) {
//     nameElement.innerText = "hello oktenweb!";
// }

// - знайти всі div та змінити ім колір на червоний

// let name = document.getElementsByTagName("div");
// console.log(name);
// for (let nameElement of name) {
//     nameElement.style.backgroundColor = "red";
// }




// ============
// ====class===
//     ============


//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let name = document.getElementsByTagName("h2");
// let id = document.getElementById("content");
//
// let htmluListElement = document.createElement("ul");
// for (let htmluListElementElement of name) {
//  let li = document.createElement("li");
//  li.innerText = htmluListElementElement.innerText;
//  htmluListElement.appendChild(li);
// }
// id.appendChild(htmluListElement);


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let wrap =document.createElement("div");
// wrap.id = "wrap";
//
// for (let i = 0; i < rules.length; i++) {
//    let ruly = rules[i];
//   let div =  document.createElement("div");
//   let h2 =  document.createElement("h2");
//   let p =  document.createElement("p");
// div.className = `rules rules${i+1}`;
// h2.innerText = ruly.title;
// p.innerText = ruly.body;
// div.appendChild(h2);
// div.appendChild(p);
// wrap.appendChild(div);
// }
// document.body.appendChild(wrap);
//
// console.log(wrap);


// ДОДАТКОВО
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту