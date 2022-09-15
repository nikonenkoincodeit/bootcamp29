//Синхронний код
//Синхронний код виконується послідовно, кожна інструкція очікує, доки виконається
//попередня. Коли ви викликаєте функцію, яка виконує тривалу дію, це зупиняє програму
//на увесь час її виконання. Тобто в моделі синхронного програмування все відбувається
//по черзі.

//Асинхронний код
//Асинхронне програмування дозволяє виконати блок коду без зупинки (або блокування)
//всього потоку, в якому виконується дія.

//Багатопотоковість - властивість платформи (наприклад, операційної
//системи, віртуальної машини і т. д.) або програми, що полягає в тому, що процес,
//породжений в операційній системі, може складатися з декількох потоків, що виконуються
//«паралельно».

//Таймери

//setTimeout
//const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// const timerId = setTimeout(
//   (str) => {
//     console.log(str);
//   },
//   3000,
//   "Hello world!"
// );
// console.log("timerId :>> ", timerId);
//setInterval
//const timerId = setInterval(callback, delay, arg1, arg2, ...);
// let step = 0;
// const intervalId = setInterval(() => {
//   if (step < 10) {
//     console.log("intervalId :>> ", intervalId);
//     // console.log(step, ") interval:>> ");
//     step += 1;
//   } else {
//     clearInterval(intervalId);
//   }
// }, 1000);

let step = null;

// function rec() {
//   setTimeout(() => {
//     if (step < 10) {
//       console.log("step :>> ", step);
//       rec();
//       step += 1;
//     }
//   }, 1000);
// }

// rec();
//Дата і час
// const date = new Date("2030-03");

// console.log(date);

//Встановлення дати
// new Date("2030-03-16");
// new Date("2030-03");
// new Date("2018");
// new Date("03/16/2030");
// new Date("2030/03/16");
// new Date("2030/3/16");
// new Date("March 16, 2030");
// new Date("March 16, 2030 14:25:00");
// new Date("2030-03-16 14:25:00");
// new Date("2030-03-16T14:25:00");
// new Date("16 March 2030");
//new Date(2030, 2, 16, 14, 25, 0, 0);

//Геттери

// const date = new Date();

// console.log("getTime() ", date.getTime());
// console.log("Date.now ", Date.now());

// Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

// console.log("UTC time:>> ");

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

//Геттери використовуються для читання усієї дати або окремої складової.
//Значення, що повертається, залежить від поточного часового поясу, встановленого
//на вашому комп'ютері.

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

//Сеттери
//Все, що можна прочитати - можна записати, методи для запису називаються також геттери,
//але починаються з префіксу set. Також для всіх методів існують їх UTC еквіваленти.

// const date2 = new Date("March 16, 2030 14:25:00");

// date2.setMinutes(50);
// console.log(date2);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"
