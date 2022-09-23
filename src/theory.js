//api https://dummyjson.com/posts

//Синтаксис async/await

// function foo() {
//   fetch("https://dummyjson.com/posts")
//     .then((response) => response.json())
//     .then(console.log);
// }

// async function foo() {
//   const response = await fetch("https://dummyjson.com/posts");
//   const json = await response.json();
//   console.log(json);
// }

// const foo = async function () {
//   const response = await fetch("https://dummyjson.com/posts");
//   const json = await response.json();
//   console.log(json);
// };

// const foo = async () => {
//   const response = await fetch("https://dummyjson.com/posts");
//   const json = await response.json();
//   console.log(json);
// };

// foo();

// class Foo {
//   async getData() {
//     const response = await fetch("https://dummyjson.com/posts");
//     const json = await response.json();
//     console.log(json);
//   }
// }

// const foo = new Foo();
// foo.getData();

//Обробка помилок
//Паралельні запити
// const foo = async () => {
//   try {
//     console.time("time");
//     const response1 = await fetch("https://dummyjson.com/posts/1");
//     const response2 = await fetch("https://dummyjson.com/posts/2");
//     const response3 = await fetch("https://dummyjson.com/posts/3");
//     const json1 = await response1.json();
//     const json2 = await response2.json();
//     const json3 = await response3.json();
//     return { json1, json2, json3 };
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// foo()
//   .then((res) => {
//     console.log(res);
//     console.timeEnd("time");
//   }) //result 1.2, 1.3 s
//   .catch(console.log);

const urls = [
  "https://dummyjson.com/posts/1",
  "https://dummyjson.com/posts/2",
  "https://dummyjson.com/posts/3",
];
const foo = async () => {
  try {
    console.time("time");
    const promise = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );
    return promise;
  } catch (error) {
    throw new Error(error);
  }
};

foo()
  .then((res) => {
    console.log(res);
    console.timeEnd("time");
  }) //result 1.2, 1.3 s
  .catch(console.log);
