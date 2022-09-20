//Promise (обіцянка, проміс) - об'єкт, що представляє поточний стан асинхронної операції.
//Це обгортка для значення, невідомого на момент створення промісу.

// Очікування (pending) - початковий стан під час створення промісу.
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.

//Створення
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

//Метод then()
// promise.then((data)=> {
//     return data.map()
// })
//Метод catch()

//Метод finally()

//Ланцюжки промісів

//Методи класу Promise

//Promise.all()
//Приймає масив промісів, очікує їх виконання і повертає проміс. Якщо всі проміси
//виконаються успішно, проміс, що повертається, перейде у стан fulfilled, а його
//значенням буде масив результатів виконання кожного промісу. У разі, коли хоча б один
//з промісів буде відхилений, проміс, що повертається, перейде у стан rejected, а його
//значенням буде помилка.

//Promise.race()
//Повертає виконаний або відхилений проміс, залежно від того, з яким результатом
//завершиться «найшвидший» з переданих промісів, зі значенням або причиною його відхилення.

//Promise.resolve() і Promise.reject()

//Promise.resolve("success value").then(value => console.log(value));

//Promise.reject("error").catch(error => console.error(error));

function f1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (false) {
        res('promise value');
      }
      rej('Error');
    }, 2000);
  });
}

// console.log('f1() :>> ', f1());

// f1().then(data => console.log('data :>> ', data));
f1()
  .then(console.log)
  .catch(error => console.log('error :>> ', error));

const formRef = document.querySelector('form');

function onSubmit(e) {
  const { amount, step, delay } = e.target.elements;
  const amountVal = Number(amount.value);
  //   const amountVal = Number(amount.value)
  //   const amountVal = Number(amount.value)
  for (let index = 0; index < amountVal; index++) {
    getPromise(index, delayVal)
      .then(({ pos, delay }) => alert())
      .catch(({ pos, delay }) => alert());
    delayVal += stepVal;
  }
}

function getPromise(p, d) {
  return new Promise((res, rej) => {
    const randomNum = true;
    setTimeout(() => {
      if (randomNum) {
        res({ pos, delay });
      }
      rej({ pos, delay });
    });
  });
}

formRef.addEventListener('submit', onSubmit);
