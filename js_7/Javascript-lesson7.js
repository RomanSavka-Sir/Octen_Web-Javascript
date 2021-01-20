// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let htmlElement = document.createElement("div");
// htmlElement.innerText = "id = text";
// document.body.appendChild(htmlElement);
// let element = document.createElement("button");
// element.innerText = "HIDE";
// htmlElement.appendChild(element);
// element.onclick = (ev) => {
//     htmlElement.style.display = "none";
// };

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let element = document.createElement("button");
// element.innerText = "PRESS";
// document.body.appendChild(element);
// element.onclick = () => {
//     element.style.display = "none";
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let formElement = document.createElement("form");
// let inputElement = document.createElement("input");
// let inputElement1 = document.createElement("input");
// formElement.setAttribute("name", "MyForm");
// inputElement.setAttribute("type", "text");
// inputElement.setAttribute("name", "check1");
// inputElement1.setAttribute("type", "submit");
// inputElement1.setAttribute("value", "submit");
// inputElement1.setAttribute("name", "check2");
//
// formElement.appendChild(inputElement);
// formElement.appendChild(inputElement1);
// document.body.appendChild(formElement);
// inputElement1.onclick = () => {
//     if (inputElement.value < 18){
//         alert("Вам не має 18 років");
//         return;
//     }
//      console.log(inputElement.value);
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let ol = document.createElement("ol");
// let li1 = document.createElement("li");
// let ol1 = document.createElement("ol");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let li5 = document.createElement("li");
// li1.innerText = "Тема";
// li2.innerText = "Тема 1";
// li3.innerText = "Тема 2";
// li4.innerText = "Тема 3";
// li5.innerText = "Тема 4";
// li2.style.listStyleType = "none";
// li3.style.listStyleType = "none";
// li4.style.listStyleType = "none";
// li5.style.listStyleType = "none";
// ol.appendChild(li1);
// li1.appendChild(ol1);
// ol1.appendChild(li2);
// ol1.appendChild(li3);
// ol1.appendChild(li4);
// ol1.appendChild(li5);
// document.body.appendChild(ol);
//
// let a = false;
//         li1.onclick = (ev) => {
//             if (a){
//             li2.style.display = "block";
//             li3.style.display = "block";
//             li4.style.display = "block";
//             li5.style.display = "block";
//         a = false;}
//
//             else{
//                 li2.style.display = "none";
//                 li3.style.display = "none";
//                 li4.style.display = "none";
//                 li5.style.display = "none";
//             a = true;
//             }
//             }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let arr = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti1'},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti2'},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ameti3'}];
//
// arr.forEach(value => {
//     let DivElement = document.createElement("div");
//     let h2Element = document.createElement("h2");
//     let pElement = document.createElement("p");
//     let buttonElement = document.createElement("button");
//     h2Element.innerText = value.title;
//     pElement.innerText = value.body;
//     buttonElement.innerText = "HIDE";
//     let a = false
// buttonElement.onclick = () => {
//     if(a){
//         pElement.style.display = "block";
//     }
//     else{
//     pElement.style.display = "none";
//     a = true;}
// }
//
// DivElement.appendChild(h2Element);
// DivElement.appendChild(pElement);
// DivElement.appendChild(buttonElement);
// document.body.appendChild(DivElement);
//
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement("form");
// let form2 = document.createElement("form");
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
// let input4 = document.createElement("input");
// let button = document.createElement("button");
// form1.setAttribute("name", "form1");
// form2.setAttribute("name", "form2");
// input1.setAttribute("type", "text");
// input2.setAttribute("type", "text");
// input3.setAttribute("type", "text");
// input4.setAttribute("type", "text");
// input1.setAttribute("name", "input1");
// input2.setAttribute("name", "input2");
// input3.setAttribute("name", "input3");
// input4.setAttribute("name", "input4");
// input1.setAttribute("placeholder", "Введіть ім'я");
// input2.setAttribute("placeholder", "Введіть прізвище");
// input3.setAttribute("placeholder", "Введіть логін");
// input4.setAttribute("placeholder", "Введіть пароль");
// input1.style.display = "block";
// input2.style.display = "block";
// input3.style.display = "block";
// button.innerText = "SHOW";
// button.onclick = () => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }
// form1.appendChild(input1);
// form1.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(input4);
// document.body.appendChild(form1);
// document.body.appendChild(form2);
// document.body.appendChild(button);

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function Table (a, b, element) {
//     let k = document.createElement("table");
//
//     let f = document.createElement(element);
//
//     for (let i = 0; i < a; i++) {
//         let n = document.createElement("tr");
//         k.appendChild(n);
//         for (let j = 0; j < b; j++) {
//             let t = document.createElement("td");
//             t.innerText = "грооші";
//             n.appendChild(t);
//         }
//     }
//
//     f.appendChild(k);
// document.body.appendChild(f);
//
// };
//
// Table(4, 5, "div");


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement("form");
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
// let button = document.createElement("button");
// input1.setAttribute("name", "input1");
// input2.setAttribute("name", "input2");
// input3.setAttribute("name", "input3");
// input1.setAttribute("type", "text");
// input2.setAttribute("type", "text");
// input3.setAttribute("type", "text");
// input1.setAttribute("placeholder", "numberofrows");
// input2.setAttribute("placeholder", "numberofcolumns");
// input3.setAttribute("placeholder", "text");
// input1.style.display = "block";
// input2.style.display = "block";
// button.innerText = "Create_Table";
// button.onclick = () => {
//     let tableElement = document.createElement("table");
//     tableElement.style.marginTop = "20px";
//     for (let i = 0; i < input1.value; i++) {
//         let tr = document.createElement("tr");
//         for (let j = 0; j < input2.value; j++) {
//             let td = document.createElement("td");
//             td.innerText = input3.value;
//             tr.appendChild(td);
//         }
//         tableElement.appendChild(tr);
//     }
//     document.body.appendChild(tableElement);
// }
// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(input3);
// document.body.appendChild(form);
// document.body.appendChild(button);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let Array = [{ id: 1, name: "https://klike.net/uploads/posts/2019-05/1556777145_1.jpg"},
//     { id:2, name: "https://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg"},
//     {id:3, name:"https://lh3.googleusercontent.com/proxy/o8-XHn3CbDEgzJ22z5Bq3n7_f3iKN5Ra2QyZ4xfdnslZGegmc4DVBvPro8eFoDcjoD5lU11sHoiXkoDX7gQLQxzj"},
//     {id: 4, name:"https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"},
//     {id:5, name:"https://i.pinimg.com/originals/82/89/c8/8289c80943be622e6873089a9752356d.jpg"}];
// let div1 = document.createElement("div");
// let div = document.createElement("div");
// let buttonleft = document.createElement("button");
// let buttonright= document.createElement("button");
// let img = document.createElement("img");
// img.style.width = "100px";
// img.style.height = "200px";
// let a  = 0;
// img.src = Array[a].name;
//
//
// buttonright.onclick = () => {
//     if (a+1 > Array.length -1){
//         a = 0;
//     }
//         else {
//             a = a+1;
//         }
//     img.src = Array[a].name;
// }
//
//
// buttonleft.onclick = () => {
//     if (a-1 < 0){
//         a = Array.length -1;
//     }
//     else {
//         a = a-1;
//     }
//     img.src = Array[a].name;
// }
//
// buttonleft.innerText = "LEFT";
// buttonright.innerText = "RIGHT";
//
// div1.appendChild(img);
// document.body.appendChild(div1);
// div.appendChild(buttonleft);
// div.appendChild(buttonright);
// document.body.appendChild(div);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let Array = ["гівно", "покидьок", "курва", "сучка", "блін"];
// let input = document.createElement("input");
// input.setAttribute("name", "input");
// input.setAttribute("type", "text");
// let button = document.createElement("button");
// button.innerText = "CHECK";
// button.onclick = () => {
//     for (let i = 0; i < Array.length; i++) {
//         if (input.value === Array[i]) {
//             alert("Ви ввели нецензурне слово!!!");
//
//         }
//     }
//     }
// document.body.appendChild(input);
// document.body.appendChild(button);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let Array = ["гівно", "покидьок", "курва", "сучка", "блін"];
// let input = document.createElement("input");
// input.setAttribute("name", "input");
// input.setAttribute("type", "text");
// let button = document.createElement("button");
// button.innerText = "CHECK";
//
// button.onclick = () => {
//     for (let i = 0; i < Array.length; i++) {
//         if (input.value.includes(Array[i]) === true) {
//             alert("Ви використали нецензурне слово!!!");
//         }
//     }
// }
//
// document.body.appendChild(input);
// document.body.appendChild(button);



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let id = document.getElementById("content");
// let h2 = document.getElementsByTagName("h2");
// let ul = document.createElement("ul");
// id.style.float = "left";
//
// for (let i = 0; i < h2.length; i++) {
//     let li = document.createElement("li");
//     let a = document.createElement("a");
//     let ref = "ref" + i;
//     h2[i].setAttribute("id", ref);
//     a.href = "#" + ref;
//     a.innerText = h2[i].innerText;
//
//
//     li.appendChild(a);
//     ul.appendChild(li);
//
// }
//
// document.body.appendChild(ul);

// -- взять массив пользователей

// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// let div = document.createElement("div");
// let a = document.createElement("input");
// a.type = "checkbox";
// let b = document.createElement("input");
// b.type = "checkbox";
// let c = document.createElement("input");
// c.type = "checkbox";
// let d = document.createElement("label");
// let e = document.createElement("label");
// let f = document.createElement("label");
// d.innerText = "со статусом false";
// e.innerText = "старше 29";
// f.innerText = "город киев";
//
//
//
// document.body.appendChild(div);
// div.appendChild(d);
// div.appendChild(a);
// div.appendChild(e);
// div.appendChild(b);
// div.appendChild(f);
// div.appendChild(c);
//
// let button = document.createElement("button");
// button.innerText = "FILTER";
// div.appendChild(button);
// let users = document.createElement("div");
//
// button.addEventListener("click", () => {
//     if (a.checked && b.checked && c.checked) {
//         let ii = document.createElement("div");
//         ii.innerText = JSON.stringify(usersWithAddress.filter(value => !value.status && value.age > 29 && value.address.city === "Kyiv"));
//         users.appendChild(ii);
//         return;
//     }
//
//     if (a.checked) {
//         let aa = document.createElement("div");
//         aa.innerHTML = JSON.stringify(usersWithAddress.filter(value => !value.status));
//         users.appendChild(aa);
//         return;
//     }
//     if (b.checked) {
//         let bb = document.createElement("div");
//         bb.innerText = JSON.stringify(usersWithAddress.filter(value => value.age > 29));
//         users.appendChild(bb);
//         return;
//     }
//     if (c.checked) {
//         let cc = document.createElement("div");
//         cc.innerText = JSON.stringify(usersWithAddress.filter(value => value.address.city === "Kyiv"));
//         users.appendChild(cc);
//     }
// })
// document.body.appendChild(users);








// ДОДАТКОВО
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан