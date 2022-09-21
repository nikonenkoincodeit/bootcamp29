//Формат запиту
// HTTP-метод	Визначає, яку операцію виконувати.
// HTTP-заголовки	Дозволяє клієнту передавати службову інформацію про запит.
// Шлях	Шлях до ресурсу. Доступні шляхи описуються в документації бекенду.
// Тіло	Блок запиту, що містить дані.

//HTTP-методи
//POST	Створити новий ресурс
// GET	Отримати набір ресурсів або один ресурс
// PUT	Оновити існуючий або створити новий ресурс
// PATCH	Оновити існуючий ресурс
// DELETE	Видалити ресурс

const BASE_URL = "http://localhost:3000/data/";

// const getData = (data) => {
//   return fetch(BASE_URL, {
//     method: "GET",
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(console.log);
// };
// getData();

const data = {
  value: "Купити вина!!!!!!!!!!",
  checked: false,
};

//method POST
const sendData = (data) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(console.log);
};
// sendData(data);
//method PUT
const updateData = (data, id) => {
  return fetch(BASE_URL + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(console.log);
};

//updateData({ value: "Купити солі" }, 1);

//method PATCH
const updatePATCHData = (data, id) => {
  return fetch(BASE_URL + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      //   console.log("response :>> ", response);
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(console.log);
};
// updatePATCHData({ value: "Купити ковбаси" }, 2);

// DELETE	Видалити ресурс

const deleteData = (id) => {
  return fetch(BASE_URL + "/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(console.log);
};
// deleteData(1);

//Заголовки запиту
// headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },

// const headers = new Headers({
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   });

//   headers.append("Content-Type", "text/bash");
//   headers.append("X-Custom-Header", "custom value");
//   headers.has("Content-Type"); // true
//   headers.get("Content-Type"); // "text/bash"
//   headers.set("Content-Type", "application/json");
//   headers.delete("X-Custom-Header");

//Cписок заборонених HTTP-заголовків, які ми не можемо встановити:
//https://fetch.spec.whatwg.org/#http-access-control-request-headers

// Шляхи
// Запити повинні містити шлях до ресурсу, над яким виконується операція.
// Доступні шляхи (ендпоінти, ресурси) описуються в документації бекенду.

// Коди відповіді HTTP
// Код відповіді (стану) HTTP показує, чи був успішно виконаний певний запит HTTP.
// Коди згруповані у 5 класів:

// Інформаційні 100 – 199
// Успішні 200 - 299
// Перенаправлення 300 - 399
// Клієнтські помилки 400 – 499
// Серверні помилки 500 - 599
//https://developer.mozilla.org/ru/docs/Web/HTTP/Status

//body: JSON.stringify(data),
//body
// body – тіло запиту, одне зі списку:
// рядок (наприклад, у форматі JSON),
// об'єкт FormData для надсилання даних як form/multipart,
// Blob/BufferSource для відправки бінарних даних,

//Клас URLSearchParams
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
// console.log(searchParams.get("topic") === "api"); // true
// console.log(searchParams.getAll("topic")); // ["api"]
// console.log(searchParams.get("foo") === null); // true
// console.log(searchParams.append("topic", "webdev"));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
// console.log(searchParams.set("topic", "More webdev"));

// const getData = () => {
//   return fetch("/api")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(console.log);
// };
// getData();
