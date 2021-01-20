
//ДОМАШНЄ ЗАВДАННЯ

// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
// let sort = Array.sort((a, b) => {
// return a-b;
// });

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
// Array.sort((a, b) => {
//     return b -a;
// })

// -- при помощи filter получить числа кратные 3

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
//
// let filter = Array.filter(value => value % 3 === 0);

// -- при помощи filter получить числа кратные 10

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
// let filter = Array.filter(value => value % 10 === 0);

// -- перебрать (проитерировать) массив при помощи foreach()

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
// Array.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let Array = [1,67,54,2,90,7,89,65,43,3,4,56,0,5,11,14,16,17,12,23];
// let map = Array.map(value => value*3);

//
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.

// let Array = ["hello", "ice", "good", "nice", "track", "class", "dad", "milk", "kind", "joke", "alfa", "green", "zebra", "fair", "rock", "camp", "store", "claim", "drink", "oleg"];
// Array.sort();

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let Array = ["hello", "ice", "good", "nice", "track", "class", "dad", "milk", "kind", "joke", "alfa", "green", "zebra", "fair", "rock", "camp", "store", "claim", "drink", "oleg"];
// Array.sort((a, b) => {
//     if (a > b){
//         return  -1;
//     }
//     return 1;
// });

// -- отфильтровать слова длиной менее 4х символов

// let Array = ["hello", "ice", "good", "nice", "track", "class", "dad", "milk", "kind", "joke", "alfa", "green", "zebra", "fair", "rock", "camp", "store", "claim", "drink", "oleg"];
// let filter = Array.filter(value => value.length<4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let Array = ["hello", "ice", "good", "nice", "track", "class", "dad", "milk", "kind", "joke", "alfa", "green", "zebra", "fair", "rock", "camp", "store", "claim", "drink", "oleg"];
// let map = Array.map(value =>  (value + "!"));




// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sort = JSON.stringify(users.sort((a, b) => a.age - b.age ));
// console.log(JSON.parse(sort));
// sort2 = users.sort((a, b) => b.age - a.age);
// console.log(sort2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sort = JSON.stringify(users.sort((a, b) => a.name.length - b.name.length));
// console.log(JSON.parse(sort));
// let sor2 = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sor2);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let newArray = users.map((value, index) => {
//  value.id = index;
//  return value
// });
//
// let new1 = newArray.sort((a, b) => b.id - a.id);
// console.log(new1);


// -- наисать функцию калькулятора с 2мя числами и колбеком

// function CalC(a,b, funct) {
//     funct(a,b);
// }
//
// CalC(12,10,  (a,b) => console.log(a+b));
// CalC(12,10,  (a,b) => console.log(a*b));

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function CalC(a,b,c ,funct) {
//     funct(a,b,c);
// }
//
// CalC(12,10,  32, (a,b,c) => console.log(a+b-c));
// CalC(12,10, 12,  (a,b,c) => console.log((a*b) - c));

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//  {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 0} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let filter = cars.filter(value => value.volume>3);

// - двигун = 2л

// let filter = cars.filter(value => value.volume === 2);

// - виробник мерс

// let filter = cars.filter(value => value.producer === "mercedes");

// - двигун більше 3х літрів + виробник мерседес

// let filter = cars.filter(value => value.volume > 3 && value.producer === "mercedes");

// - двигун більше 3х літрів + виробник субару

// let filter = cars.filter(value => value.volume>3 && value.producer === "subaru");

// - сили більше ніж 300

// let filter1 = cars.filter(value => value.power>300);

// - сили більше ніж 300 + виробник субару

// let filter1 = cars.filter(value => value.power>300 && value.producer === "subaru");

// - мотор серіі ej

// let filter1 = cars.filter(value => value.engine === "ej");

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filter1 = cars.filter(value => value.power>300 && value.producer === "subaru" && value.engine === "ej");

// - двигун меньше 3х літрів + виробник мерседес

// let filter1 = cars.filter(value => value.volume<3 && value.producer === "mercedes");

// - двигун більше 2л + сили більше 250

// let filter1 = cars.filter(value => value.volume>2 && value.power>250);

// - сили більше 250  + виробник бмв

// let filter1 = cars.filter(value => value.power>250 && value.producer);






// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей

// let sort = usersWithAddress.sort((a, b) => a.id - b.id);

// -- отсортировать его по id пользователей в обрат
// ном опрядке

// let sort = usersWithAddress.sort((a, b) => b.id - a.id);

// -- отсортировать его по возрасту пользователей

// let sort = usersWithAddress.sort((a, b) => a.age - b.age);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sort = usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей

// let sort1 = usersWithAddress.sort((a, b) =>
// {if(a.name > b.name){
//  return 1;
// }
//  return -1});

// -- отсортировать его по имени пользователей в обратном порядке

// let sort = usersWithAddress.sort((a, b) => {if(a.name>b.name){return -1}return 1});

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sort = usersWithAddress.sort((a, b) => { if (a.address.street < b.address.street){return  -1} return 1});

// -- отсортировать его по номеру дома по возрастанию

// let sort = usersWithAddress.sort((a, b) => a.address.number - b.address.number);

// -- отфильтровать (оставить) тех кто младше 30

// let filter = usersWithAddress.filter(value => value.age<30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filter = usersWithAddress.filter(value => !value.status);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filter = usersWithAddress.filter(value => !value.status && value.age<30);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filter = usersWithAddress.filter(value => {if(value.address.number%2 === 0){return value.address.number} });




// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

// let cars =[{},]

//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно
// відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі




// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


// let Arr = [1,1,3,3,5,5,7,7,9,9];
//
// function MaxMin(massive, element){
//     let min= massive.indexOf(element);
//     let max=massive.lastIndexOf(element);
//     if(min!==-1){
//         console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`);
//     }else {
//         console.log(-1);
//     }
//
// }
//
// MaxMin(Arr, 10);

