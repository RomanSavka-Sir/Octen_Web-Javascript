//ДОМАШНЄ ЗАВДАННЯ
// Описати свій розпорядок дня за допомогою callbackhell та promise

//CALLBACK_HELL
//
// function myDay(day, callback){
//     console.log("Розпорядок дня!!!")
//     console.log("Ранок!!!")
//
//     setTimeout(() => {
//         console.log("1 крок!!!")
//         if(day === "holiday"){
//             callback("10", null)
//         }
//         else{
//             callback(null, "7:00")
//         }
//
//     }, 1500)
// }
//
//
// function firststep(hotwatter, callback){
//
//     setTimeout(() => {
//         console.log("2 крок!!!")
//         if(!hotwatter){
//             callback("Знову сьогодні воду відключи  - ну скільки вже можна!!!", null)
//
//         }
//         else{
//             callback(null, "Прийняти душ")
//
//         }
//
//     }, 2000)
// }
// function secondstep(istube, callback){
//
//     setTimeout(() => {
//         console.log("3 крок!!!")
//         if(!istube){
//             callback("І так сайдьот", null)
//         }
//         else{
//             callback(null, "Почистити зуби")
//
//         }
//
//     }, 1000)
// }
//
// function thirdstep(isbreakfest, callback){
//
//     setTimeout(() => {
//         console.log("4 крок!!!")
//         if(!isbreakfest){
//             callback("Залишитись голодним", null)
//         }
//         else{
//             callback(null, "Поснідати")
//
//         }
//
//     }, 2500)
// }
//
//
//
// function fourthstep(money, callback){
//
//     setTimeout(() => {
//         console.log("5 крок!!!")
//         if(money<14){
//             callback("Іти пішком в офіс", null)
//         }
//         else{
//             callback(null, "Сісти на трамвай")
//
//         }
//
//     }, 500)
// }
//
// function fifthstep(mood, callback){
//
//     setTimeout(() => {
//         console.log("6 крок!!!")
//         if(mood === "поганий"){
//             callback("Проігнорити колег", null)
//         }
//         else{
//             callback(null, "Привітатись і побажати колегам гарного дня)))")
//
//         }
//
//     }, 700)
// }
//
//
// function laststep(day, callback){
//
//     setTimeout(() => {
//         console.log("7 крок!!!")
//         if(day === "Friday"){
//             callback(null, "сходити на пиво із друзями")
//         }
//         else{
//             callback("Поїхати додому", null)
//
//         }
//
//     }, 3000)
// }
//
//
// myDay("working", (err, action) => {
//     if(err){
//         console.log("Прокинутись в", err);
//     }
//     else{
//         console.log("Прокинутись в", action);
//
//         firststep(true, (err,action)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(action);
//
//                 secondstep(true,  (err, action) => {
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log(action);
//
//                         thirdstep(true,  (err, action) => {
//                             if(err){
//                                 console.log(err);
//                             }
//                             else {
//                                 console.log(action);
//
//                                 fourthstep(15,  (err, action) => {
//                                     if(err){
//                                         console.log(err);
//                                     }
//                                     else {
//                                         console.log(action);
//
//                                         fifthstep("хороший",  (err, action) => {
//                                             if(err){
//                                                 console.log(err);
//                                             }
//                                             else {
//                                                 console.log(action);
//
//                                                 laststep("Friday",  (err, action) => {
//                                                     if(err){
//                                                         console.log(err);
//                                                     }
//                                                     else {
//                                                         console.log(action);
//
//
//                                                     }
//                                                 })
//
//
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                             })
//                     }
//                 })
//             }
//         })
//     }
// })


// promise

// function myDay(day){
//     return new Promise((resolve, reject) => {
//         console.log("Розпорядок дня!!!")
//         console.log("Ранок!!!")
//         setTimeout(() => {
//             console.log("1 крок!!!");
//             if(day === "holiday"){
//                 reject("10")
//             }
//             else{
//                 resolve(" Прокинутись в 7:00")
//             }
//         }, 1500)
//     });
// }
//
// function firststep(hotwatter){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("2 крок!!!")
//         if(!hotwatter){
//             reject("Знову сьогодні воду відключи  - ну скільки вже можна!!!");
//         }
//         else{
//             resolve("Прийняти душ");
//         }
//     }, 2000);
//     });
// }
//
//
// function secondstep(istube){
// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3 крок!!!")
//             if(!istube){
//                 reject("І так сайдьот")
//             }
//             else{
//                 resolve("Почистити зуби")
//
//             }
//
//         }, 1000)
//     });
//
// }
//
// function thirdstep(isbreakfest){
// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("4 крок!!!")
//             if(!isbreakfest){
//                 reject("Залишитись голодним")
//             }
//             else{
//                 resolve("Поснідати")
//
//             }
//
//         }, 2500)
//     });
//
// }
//
//
//
// function fourthstep(money){
// return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("5 крок!!!")
//         if(money<14){
//             reject("Іти пішком в офіс")
//         }
//         else{
//             resolve("Сісти на трамвай")
//
//         }
//
//     }, 500)
// });
//
// }
//
// function fifthstep(mood){
// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("6 крок!!!")
//             if(mood === "поганий"){
//                 reject("Проігнорити колег")
//             }
//             else{
//                 resolve("Привітатись і побажати колегам гарного дня)))")
//
//             }
//
//         }, 700)
//     });
//
// }
//
//
// function laststep(day){
// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("7 крок!!!")
//             if(day === "Friday"){
//                 resolve("сходити на пиво із друзями")
//             }
//             else{
//                 reject("Поїхати додому")
//
//             }
//
//         }, 3000)
//     });
//
// }
//
//
//
//
// myDay("working").then(action => {
//     console.log(action);
//     return firststep(true);
// })
//     .then(action => {
//         console.log(action);
//         return secondstep(true);
//     })
//     .then(action => {
//         console.log(action);
//         return thirdstep(true);
//     })
//     .then(action => {
//         console.log(action);
//         return fourthstep(15);
//     })
//     .then(action => {
//         console.log(action);
//         return fifthstep("хороший");
//     })
//     .then(action => {
//         console.log(action);
//         return laststep("Friday");
//     })
//     .then(action => {
//         console.log(action);
//     })
//     .catch(reason =>{
//         console.log(reason);
//     })



