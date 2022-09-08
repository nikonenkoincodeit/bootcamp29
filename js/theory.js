// const formData = new FormData(formElemRef);

// console.log('formData :>> ', formData);

// const obj = {};
// formData.append('age', 25);
// console.log('formData.has(age); :>> ', formData.has('user'));
// formData.forEach((value, key) => {
//   obj[key] = value;
// });
// console.log('obj :>> ', obj);
// console.log(formData);

//input, textarea, select - у цих елементів є властивість value

// const formElemRef = document.querySelector('[name="name"]');
// // const formElemRef = document.querySelector('#formElem');

// console.log('formElemRef :>> ', formElemRef);
// formElemRef.addEventListener('input', e => {
//   console.log('target :>> ', e.target);
//   console.log('currentTarget :>> ', e.currentTarget);
// });

// document.addEventListener('keydown', e => {
//   console.log('e :>> ', e);
//   console.log(e.ctrlKey && e.code === 'KeyB');
//   console.log(e.ctrlKey);
//   if (e.ctrlKey && e.code === 'KeyB') {
//     alert('Hello!');
//   }
// });

const user = {
  name: "Poly",
};

function sayHi(text) {
  console.log(`${text} ${this.name}`);
}
// sayHi.call(user, 'Hi, ');
// sayHi.apply(user, ['Hi, ']);

// const say = sayHi.bind(user, 'Hi, ');

// const a = {
//   b: {
//     c: {
//       d: 'Lorem',
//     },
//   },
// };

// const a = {
//   b: {
//     c: {},
//   },
// };

// const a = {
//   b: {},
// };
// console.log(a?.b?.c?.d);
