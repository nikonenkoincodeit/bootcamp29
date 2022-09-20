/*
1 - console.log('console.log: 1');
2 - console.log('console.log: 2');
3 - console.log('promise: 1');
4 - console.log('promise: 2');
5 - console.log('setTimeout');
*/

// console.log: 1
// task1.js:23 console.log: 2
// task1.js:15 data :>>  promise: 1
// task1.js:19 data :>>  promise: 2
// task1.js:9 setTimeout

setTimeout(() => console.log('setTimeout'), 0);

new Promise(resolve => {
  resolve('promise: 1');
})
  .then(data => {
    console.log('data :>> ', data);
    return 'promise: 2';
  })
  .then(data => {
    console.log('data :>> ', data);
  });

console.log('console.log: 1');
console.log('console.log: 2');
