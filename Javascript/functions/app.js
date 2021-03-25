// let die1 = Math.floor(Math.random() * 6) + 1;

// function rollDice(numTimes) {
//   let result = [];
//   for (let i = 1; i <= numTimes; i++) {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     result.push(roll);
//   }
//   return result;
// }

// function rollUniqueDice(numTimes, numSides) {
//   let result = [];
//   for (let i = 1; i <= numTimes; i++) {
//     let roll = Math.floor(Math.random() * numSides) + 1;
//     result.push(roll);
//   }
//   return result;
// }

// function greet(name) {
//   if (name.toLowerCase() === "evan") {
//     console.log("You Are Awesome");
//   } else {
//     console.log(`Hello ${name}, welcome`);
//   }
// }

// function rant(message) {
//   for (let i = 1; i <= 3; i++) {
//     console.log(message.toUpperCase());
//   }
// }

// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
//   } else {
//     let last = arr[arr.length - 1];
//     return last;
//   }
// }

// function capitalize(word) {
//   let cap = word[0].toUpperCase();
//   let end = "";
//   for (let i = 1; i < word.length; i++) {
//     end += word[i];
//   }
//   return cap + end;
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function capitalize(word) {
//   console.log(word.slice(1));
//   return word[0].toUpperCase() + word.slice(1);
// }

// const square = function (num) {
//   return Math.pow(num, 2);
// };

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("CONGRATS, I AM A GOOD FUNCTION! YOU WIN $1M");
//     };
//   } else {
//     return function () {
//       alert("ALERT, YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function isBetween(num) {
//     return num >= min && num <= max;
//   };
// }
// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(18, 65);
// const isSenior = makeBetweenFunc(65, 120);

// const verifyAge = {
//   isChild: function (age) {
//     return age > 0 && age < 18;
//   },
//   isAdult: function (age) {
//     return age > 19 && age < 65;
//   },
//   isSenior: function (age) {
//     return age > 66 && age < 120;
//   },
// };

// const testObject = {
//   firstName: "Evan",
//   lastName: "Granato",
//   age: 37,
//   sex: "Male",
// };

// const person = {
//   first: "Heromine",
//   last: "Granger",
//   fullName: function () {
//     return `${this.first}, ${this.last}`;
//   },
// };

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg: function () {
//     this.eggCount += 1;
//     return "EGG";
//   },
// };
