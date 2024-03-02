// Identifier has already been declared Error in JavaScript

// EXAMPLE 1 - Use the `let` keyword if you need to reassign a variable

let x = 10;
x = 15;

console.log(x); // 👉️ 15

// ------------------------------------------------------------------

// // EXAMPLE 2 - Declaring a variable with the same name in different scopes

// const x = 15;

// if (true) {
//   const x = 100;
//   console.log(x); // 👉️ 100
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Syntax errors in `for` loops cause the error

// // ✅ correct (uses semicolons)
// const arr = ['bobby', 'hadz', 'com'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - You can declare a variable with the same name in different scopes

// const sum = 15;

// try {
//   const sum = 30;
//   console.log(sum); // 👉️ 30
// } catch (err) {}

// console.log(sum); // 👉️ 15

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using an immediately invoked function expression

// const num = 50;

// (function () {
//   const num = 100;

//   console.log(num); // 👉️ 100
// })();

// console.log(num); // 👉️ 50

// ------------------------------------------------------------------

// // EXAMPLE 6 - Wrapping each `case` in a `switch` statement in a block

// const action = 'buy_groceries';

// switch (action) {
//   case 'buy_groceries': {
//     const message = 'milk';
//     console.log(message);
//     break;
//   } // 👈️ add curly braces here

//   case 'walk_the_dog': {
//     const message = 'example';
//     console.log(message);
//     break;
//   } // 👈️ add curly braces

//   default: {
//     console.log('Action not matched.');
//   } // 👈️ add curly braces
// }
