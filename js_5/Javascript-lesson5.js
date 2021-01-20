// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// function Tags(titleoftag, action, attribute) {
//     this.titleoftag = titleoftag;
//     this.action = action;
//     this.attribute = attribute;
// }
// let a_attr = [{name: "href", description: "Задает адрес документа, на который следует перейти."},
//     {name: "title", description: "Добавляет всплывающую подсказку к тексту ссылки."},
//     {name: "type", description: "Указывает MIME-тип документа, на который ведёт ссылка."}];
//
// let div_attr = [{name:"align", description:"Задает выравнивание содержимого тега"},
//     {name:"title", description: "Добавляет всплывающую подсказку к содержимому."}];
//
// let h1_attr = [{name:"align", description:"Определяет выравнивание заголовка."},
//     {name:"class", description: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {name:"id", description: "Указывает имя стилевого идентификатора"}];
//
// let span_attr = [{name:"onblur", description:"Потеря фокуса"},
//     {name:"onchange", description: "Изменение значения элемента формы"},
//     {name:"onfocus", description: "Получение фокуса"}];
//
// let input_attr = [{name:"alt", description:"Альтернативный текст для кнопки с изображением"},
//     {name:"border", description: "Толщина рамки вокруг изображени"},
//     {name:"form", description: "Связывает поле с формой по её идентификатору"}];
//
// let form_attr = [{name:"action", description:"Адрес программы или документа, который обрабатывает данные формы"},
//     {name:"name", description: "Имя формы"},
//     {name:"method", description: "Метод протокола HTTP"}];
//
// let option_attr = [{name:"label", description:"Указание метки пункта списка"},
//     {name:"selected", description: "Заранее устанавливает определенный пункт списка выделенным"}];
//
// let select_attr = [{name:"form", description:"Связывает список с формой"},
//     {name:"size", description: "Количество отображаемых строк списка"}];
//
//
//
// let a = new Tags("a", "предназначен для создания ссылок", a_attr);
// console.log(a);
// let h1 = new Tags("h1", "представляет собой наиболее важный заголовок первого уровня", h1_attr);
// let div = new Tags("div", "предназначен для выделения фрагмента документа с целью изменения вида содержимого", div_attr);
// let span = new Tags("span", "предназначен для определения строчных элементов документа", span_attr);
// let input = new Tags("input", "предназначен для создания текстовых полей, различных кнопок, переключателей и флажков", input_attr);
// let form = new Tags("form", "устанавливает форму на веб-странице", form_attr);
// let option = new Tags("optin", "определяет отдельные пункты списка, создаваемого с помощью контейнера" , option_attr);
// let select = new Tags("select", "позволяет создать элемент интерфейса в виде раскрывающегося списка", select_attr);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// class Tags {
//     constructor(titleoftag, action, attrs) {
//         this.titleoftag = titleoftag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let a_attr = [{name: "href", description: "Задает адрес документа, на который следует перейти."},
//     {name: "title", description: "Добавляет всплывающую подсказку к тексту ссылки."},
//     {name: "type", description: "Указывает MIME-тип документа, на который ведёт ссылка."}];
//
// let div_attr = [{name:"align", description:"Задает выравнивание содержимого тега"},
//     {name:"title", description: "Добавляет всплывающую подсказку к содержимому."}];
//
// let h1_attr = [{name:"align", description:"Определяет выравнивание заголовка."},
//     {name:"class", description: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {name:"id", description: "Указывает имя стилевого идентификатора"}];
//
// let span_attr = [{name:"onblur", description:"Потеря фокуса"},
//     {name:"onchange", description: "Изменение значения элемента формы"},
//     {name:"onfocus", description: "Получение фокуса"}];
//
// let input_attr = [{name:"alt", description:"Альтернативный текст для кнопки с изображением"},
//     {name:"border", description: "Толщина рамки вокруг изображени"},
//     {name:"form", description: "Связывает поле с формой по её идентификатору"}];
//
// let form_attr = [{name:"action", description:"Адрес программы или документа, который обрабатывает данные формы"},
//     {name:"name", description: "Имя формы"},
//     {name:"method", description: "Метод протокола HTTP"}];
//
// let option_attr = [{name:"label", description:"Указание метки пункта списка"},
//     {name:"selected", description: "Заранее устанавливает определенный пункт списка выделенным"}];
//
// let select_attr = [{name:"form", description:"Связывает список с формой"},
//     {name:"size", description: "Количество отображаемых строк списка"}];
//
//
//
// let a = new Tags("a", "предназначен для создания ссылок", a_attr);
// let h1 = new Tags("h1", "представляет собой наиболее важный заголовок первого уровня", h1_attr);
// let div = new Tags("div", "предназначен для выделения фрагмента документа с целью изменения вида содержимого", div_attr);
// let span = new Tags("span", "предназначен для определения строчных элементов документа", span_attr);
// let input = new Tags("input", "предназначен для создания текстовых полей, различных кнопок, переключателей и флажков", input_attr);
// let form = new Tags("form", "устанавливает форму на веб-странице", form_attr);
// let option = new Tags("optin", "определяет отдельные пункты списка, создаваемого с помощью контейнера" , option_attr);
// let select = new Tags("select", "позволяет создать элемент интерфейса в виде раскрывающегося списка", select_attr);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: "BMW",
//     manufactor: "BMW",
//     year: 2010,
//     maxspeed: 250,
//     power: 100,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     },
//     info: function () {
//         console.log(car);
//     },
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     },
//     changeYear (newValue) {
//         this.year = newValue;
//     },
//     addDriver (driver) {
// this.driver = driver;
//     }
//
// }
// let drivers = {name: "Ivan", age: 34};
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(45);
// car.changeYear(2021);
// car.addDriver(drivers);

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Cars(model, manufactor, year, maxspeed, volume ) {
//     this.model = model;
//     this.manufactor = manufactor;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//
//     this.drive  = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed}  на годину`)
//     }
//     this.info = function(){
//         console.log(this);
//     }
//
//     this.increaseMaxSpeed = function (newspeed) {
//         this.maxspeed =  maxspeed + newspeed;
//         console.log(`Нова швидкість: ${this.maxspeed}`);
//
//     }
//     this.changeYear  = function (newValue){
//         this.year = newValue;
//         console.log(`Рік випуску тепер: ${this.year}`)
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//         console.log(Ferari);
//
//     }
//
// }
// let drivers = {name: "Ivan", age: 34};
// let Ferari = new Cars("LAFERRARI", "FIAT Group", 2013, 250, 3.0);
// Ferari.drive();
// Ferari.info();
// Ferari.increaseMaxSpeed(50);
// Ferari.changeYear(2017);
// Ferari.addDriver(drivers);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, manufactor, year, maxspeed, volume) {
//         this.model = model;
//         this.manufactor = manufactor;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxspeed}  на годину`)
//         }
//         this.info = function () {
//             console.log(this);
//         }
//         this.increaseMaxSpeed = function (newspeed) {
//             this.maxspeed = maxspeed + newspeed;
//             console.log(`Нова швидкість: ${this.maxspeed}`);
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//             console.log(`Рік випуску тепер: ${this.year}`)
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
// }
// let drivers = {name: "Ivan", age:34};
//
// let Ferrari = new Car("F8 Spider", "FIAT Group", 2019, 300, 3.8)
// Ferrari.drive();
// Ferrari.info();
// Ferrari.increaseMaxSpeed(34);
// Ferrari.changeYear(2020);
// Ferrari.addDriver(drivers);

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Pop {
//     constructor(name, age, legsize) {
//         this.name = name;
//         this.age = age;
//         this.legsize = legsize;
//     }
// }
// class Prince {
//     constructor(name, age, shoessize) {
//         this.name = name;
//         this.age = age;
//         this.shoessize = shoessize;
//     }
// }
// let Pop1 = new Pop("Oksana", 25, 38);
// let Pop2 = new Pop("Olena", 20, 37);
// let Pop3 = new Pop("Iryna", 21, 36);
// let Pop4 = new Pop("Olha", 22, 35);
// let Pop5 = new Pop("Anna", 19, 35.5);
// let Pop6 = new Pop("Natalya", 22, 36.5);
// let Pop7 = new Pop("Lidiya", 24, 39);
// let Pop8 = new Pop("Luba", 21, 39.9);
// let Pop9 = new Pop("Khrystyna", 25, 37.5);
// let Pop10 = new Pop("Victoria", 22, 38.5);
//
// let a = [Pop1, Pop2, Pop3,  Pop4, Pop5, Pop6,  Pop7,  Pop8, Pop9, Pop10];
//
// let Prince1 = new Prince("August", 28, 37);
//
// for (let i = 0; i < a.length; i++) {
//     if(a[i].legsize === Prince1.shoessize){
//         console.log(`Попельшка знайшлась: ${JSON.stringify(a[i])}`);
//     }
// }

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Pop(name, age, legsize) {
//         this.name = name;
//         this.age = age;
//         this.legsize = legsize;
//     }
//
// function Prince(name, age, shoessize) {
//     this.name = name;
//     this.age = age;
//     this.shoessize = shoessize;
//     this.find = function (massive) {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i].legsize === Prince1.shoessize) {
//                 console.log(`Попельшка знайшлась: ${JSON.stringify(a[i])}`);
//             }
//         }
//     }
// }
// let Pop1 = new Pop("Oksana", 25, 38);
// let Pop2 = new Pop("Olena", 20, 37);
// let Pop3 = new Pop("Iryna", 21, 36);
// let Pop4 = new Pop("Olha", 22, 35);
// let Pop5 = new Pop("Anna", 19, 35.5);
// let Pop6 = new Pop("Natalya", 22, 36.5);
// let Pop7 = new Pop("Lidiya", 24, 39);
// let Pop8 = new Pop("Luba", 21, 39.9);
// let Pop9 = new Pop("Khrystyna", 25, 37.5);
// let Pop10 = new Pop("Victoria", 22, 38.5);
//
// let a = [Pop1, Pop2, Pop3,  Pop4, Pop5, Pop6,  Pop7,  Pop8, Pop9, Pop10];
//
// let Prince1 = new Prince("August", 28, 37);
//
//
// Prince1.find(a);