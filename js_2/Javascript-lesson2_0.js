// Домашнє завдання


// --створити масив та вивести його в консоль:
//     - з 5 числових значень

// let Array = [12, 23, 34, 45, 56];
// console.log(Array);

// - з 5 стічкових значень

// let Array = ["12", "23", "34", "45", "56"];
// console.log(Array);

// - з 5 значень стрічкового, числового та булевого типу

// let Array = ["12", 3, "dog", true, 56];
// console.log(Array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let Array = [];
// Array[0] = 23;
// Array[1] = "23";
// Array[2] = true;
// Array[3] = NaN;
// Array[4] = {name: "Ivan", age: 23};
// console.log(Array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i<10; i++){
//     document.write("<div>Антон</div>");
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i<10; i++){
//     document.write(`<div>Антон: ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while(i<20){
//     document.write("<h1>Привіт</h1>");
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while(i<20){
//     document.write(`<h1>Привіт: ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// for (let i = 0; i < Array.length; i++){
//     console.log(Array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let Array = ["1"," 2", "3", "4", "5", "6", "7",  "8", "9","10"];
// for (let i = 0; i < Array.length; i++){
//     console.log(Array[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let Array = ["1",2, "fog", false, NaN, "dog", {name: "Roman", age: 25},  [12, 23,34], 9, true];
// for (let i = 0; i < Array.length; i++){
//     console.log(Array[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Array = ["1",2, "fog", false, 34, "dog", "Roman",  , 9, true];
// for (let i =0; i<Array.length; i++){
//     if (typeof (Array[i]) === "boolean"){
//         console.log(Array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let Array = ["1",2, "fog", false, 34, "dog", "Roman",  45, 9, true];
// for (let i =0; i<Array.length; i++){
//     if (typeof (Array[i]) === "number"){
//         console.log(Array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let Array = ["1",2, "fog", false, 34, "dog", "Roman",  45, 9, true];
// for (let i =0; i<Array.length; i++){
//     if (typeof (Array[i]) === "string"){
//         console.log(Array[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let Array = [];
// Array[0] = 1;
// Array[1] = "1";
// Array[2] = false;
// Array[3] = NaN;
// Array[4] = -23;
// Array[5] = "frog";
// Array[6] = true;
// Array[7] = 134;
// Array[8] = 24;
// Array[9] = {name: "Anton", age: 18};
//
// let i =0;
// while (i < Array.length){
//     console.log(Array[i]);
//     i++;
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i =0; i<10; i++){
//     console.log(i);
//     document.write(`Номер кроку: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i =0; i<100; i++){
//     console.log(i);
//     document.write(`Номер кроку: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i =0; i<200; i+=2){
//     console.log(i);
//     document.write(`Номер кроку: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i =0; i<100; i++){
//     if(i%2 ===0) {
//         console.log(i);
//         document.write(`Номер кроку: ${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i =0; i<100; i++){
//     if(i%2 ===0) {
//         console.log(i);
//         document.write(`Номер кроку: ${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i =0; i<100; i++){
//     if(i%2 > 0) {
//         console.log(i);
//         document.write(`Номер кроку: ${i} <br>`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i<=2; i++){
//     for(let j = 0; j<60; j++){
//         if(i===2){
//             console.log(i + ":"+  "00" );
//         }
//         else{
//             console.log(i + ":" + j);
//         }
//     }
// }

// -  Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let i = 0; i<3; i++){
//     for(let j = 0; j<60; j++){
//             for(let k = 0; k<60; k++){
//                 if(i===2){
//                     for (let j = 0; j<21; j++){
//                         console.log(i+":" + j  + ":" + "00");
//                     }
//                 }
//                 else{
//                     console.log(i + ":" + j + ":" + k);
//                 }
//         }
//
//     }
// }




// Додатково

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let Array = ["a", "b", "с"];
// let arr = "";
// for (let i = 0; i<Array.length; i++){
//     arr = arr + Array[i];
// }
// console.log(arr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let Array = ["a", "b", "с"];
// let i =0;
// let arr = "";
// while(i<Array.length){
//     arr = arr + Array[i];
//     i++;
// }
// console.log(arr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let Array = ["a", "b", "с"];
// // let arr = "";
// // for (let value of Array) {
// //     arr = arr + value;
// // }
// // console.log(arr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let Array = ["a", "b", "с"];
// let arr = "";
// for (let value in Array) {
//     arr = arr + Array[value];
// }
// console.log(arr);




// КЛАСНА РОБОТА


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let Array = ['a', 'b', 'c'];
// for (let i= 1; i <4; i++){
//     Array.push(i);
// }
// console.log(Array);

//  - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let Array = [1, 2, 3];
// let array = [];
// for(let i = 2; i>=0; i--){
//     array.push(Array[i]);
// }
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let Array = [1, 2, 3];
// let i = 4;
// while(i<7){
//     Array.push(i);
//     i++;
// }
// console.log(Array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let Array = [1, 2, 3];
// for (let i = 6; i > 3; i--) {
//     Array.unshift(i);
// }
// console.log(Array);

//  - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let Array = ['js', 'css', 'jq'];
// console.log(Array)
// let newArray = Array.shift();
// console.log(newArray);
// console.log(Array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let Array = ['js', 'css', 'jq'];
// console.log(Array)
// let newArray = Array.pop();
// console.log(newArray);
// console.log(Array);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let Array = [1, 2, 3, 4, 5];
// let arr = Array.slice(3);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let Array = [1, 2, 3, 4, 5];
// let arr = Array.slice(0,2);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let Array = [1, 2, 3, 4, 5];
// let arr = Array.splice(1, 2);
// console.log(Array);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let Array = [1, 2, 3, 4, 5];
// let arr = Array.splice(3,2,"a", "b", "с", 4, 5);
// console.log(Array);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let Array = [1, 2, 3, 4, 5];
// let arr = Array.splice(1,4, "a", "b", 2,3, 4, "с", 5, "e");
// console.log(Array);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let Array = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i<Array.length; i++){
//     if(Array[i]%2 === 0){
//         console.log(Array[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let Array = [1,2,3,4,5,6,7,8,9,10];
// let arr = [];
// for(let i = 0; i<Array.length; i++){
//     arr.push(Array[i]);
// }
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let Array = [1,2,3,4,5,6,7,8,9,10];
// let arr = [];
// for(let i = 0; i<Array.length; i++){
//    arr[i] = Array[i];
// }
// console.log(arr);




// Домашнє завдання

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<Array.length){
//     console.log(Array[i]);
//     i++;
// }

//     2. перебрати його циклом for

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < Array.length; i++) {
//     console.log(Array[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<Array.length){
//     if(i%2 >0) {
//         console.log(Array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 1; i < Array.length; i+=2) {
//     console.log(Array[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<Array.length){
//     if(Array[i]%2 === 0) {
//         console.log(Array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < Array.length; i++) {
//     if(Array[i]%2 === 0) {
//         console.log(Array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < Array.length; i++) {
//     if (Array[i] % 3 === 0) {
//         Array[i] = "okten"
//     }
// }
// console.log(Array);

// 8. вивести масив в зворотньому порядку.

// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let newArray = [];
// for (let i = 9; i >=0; i--) {
// newArray.push(Array[i]);
// }
// console.log(newArray);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 9;
// let array = [];
// while(i>=0){
//     array.push(Array[i]);
//     i--;
// }
// console.log(array);
//
// 2. the same like 8
//
// 3.
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 9;
// let array = [];
// while(i>=0){
//     if(i%2 >0) {
//         array.push(Array[i]);
//     }
//     i--;
// }
// console.log(array);
//
// 4.
//
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let array = [];
// for (let i = 9; i >=0; i-=2) {
//     array.push(Array[i]);
// }
// console.log(array);
//
// 5.
//
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 9;
// let array = [];
// while(i>= 0){
//     if(Array[i]%2 === 0) {
//         array.push(Array[i]);
//     }
//     i--;
// }
// console.log(array);
//
// 6.
//
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let array = [];
// for (let i = 9; i>=0; i--) {
//     if(Array[i]%2 === 0) {
//         array.push(Array[i]);
//     }
// }
// console.log(array);
//
// 7.
//
// let Array = [2,17,13,6,22,31,45,66,100,-18];
// let array = [];
// for (let i = 9; i>=0; i--) {
//     if (Array[i] % 3 === 0) {
//         Array[i] = "okten"
//     }
//     array.push(Array[i]);
// }
// console.log(array);

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let Array = [];
// for (let i = 1; i<100; i++){
//     if(i%2 === 0) {
//         Array[i] = i;
//     }
// }
// console.log(Array);

// - заповнити його 50 непарними числами за допомоги циклу.

// let Array = [];
// for (let i = 1; i<100; i++){
//     if(i%2 > 0) {
//         Array[i] = i;
//     }
// }
// console.log(Array);







//Класна робота

// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.

// let Array = [];
// for (let i = 1; i<100; i++){
//     if(i%2 === 0) {
//         Array[i] = i;
//     }
// }
// console.log(Array);

// 2. заповнити його 50 непарними числами за допомоги циклу.

// let Array = [];
// for (let i = 1; i<100; i++){
//     if(i%2 > 0) {
//         Array[i] = i;
//     }
// }
// console.log(Array);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let Array = [];
// for (let i = 0; i<10; i++){
//     Array[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(Array);

// 3.2. вывести на консоль  каждый третий елемент

// let Array = [];
// for (let i = 0; i<10; i++){
//     Array[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(Array);
// for (let i = 2; i<Array.length; i+=3){
//     console.log(Array[i]);
// }

// 3.3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

// let Array = [];
// for (let i = 0; i<10; i++){
//     Array[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(Array);
//
// for (let i = 2; i<Array.length; i+=3){
//     if(Array[i]%2 === 0) {
//         console.log(Array[i]);
//     }
// }

// 3.4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let Array = [];
// for (let i = 0; i<10; i++){
//     Array[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(Array);
//
// let arr = [];
// for (let i = 2; i<Array.length; i+=3){
//     if(Array[i]%2 === 0) {
//         console.log(Array[i]);
//         arr.push(Array[i]);
//     }
// }
// console.log(arr);

// 3.5. Вывести каждый елемент массива у которого соседний с права элемент - парный.

// let Array = [];
// for (let i = 0; i<10; i++){
//     Array[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(Array);
//
// for (let i = 0; i<Array.length; i++){
//     if(Array[i+1]%2 === 0){
//         console.log(Array[i]);
//     }
// }

//  масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let Array = [100,250,50,168,120,345,188];
// let a = 0;
// for (let i =0; i<Array.length; i++){
//     a = a + Array[i];
// }
// console.log(Math.round(a/Array.length));

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let Array = [];
// for(let i = 0; i < 10; i++){
//     Array[i] = Math.floor(Math.random()*(999-1)+1);
// }
// console.log(Array);
// let arr = [];
// for (let i = 0; i<Array.length; i++){
//     arr[i] = Array[i]*5;
// }
// console.log(arr);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let Array = [1, 45, "Fabula", true, "Jack", 75];
// let arr = [];
// for(let i = 0; i<Array.length; i++){
//     if(typeof Array[i] === "number"){
//         arr[i] = Array[i];
//     }
// }
// console.log(Array);
// arr.splice(2, 3);
// console.log(arr);

