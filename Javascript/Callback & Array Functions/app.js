const nums = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

// nums.forEach(function (n) {
//   console.log(n);
// });
// for (let el of nums) {
//   console.log(el);
// }
// nums.forEach(function (n) {
//   if (n % 2 === 0) {
//     console.log(n);
//   }
// });

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });
// let output = "";

// for (let movie of movies) {
//   output += movie.title + " " + movie.score + " ";
// }
// console.log(output);

const doubles = nums.map(function (num) {
  return num * 2;
});

// const titles = movies.map(function (tit) {
//   return tit.title;
// });

// function cleanNames(arr) {
//   arr.map(function (item) {
//     return item.trim();
//   });
// }

// function cleanNames(arr) {
//   let result = arr.map(function (item) {
//     return item.trim();
//   });
//   return result;
// }

// function cleanNames(arr) {
//   let result = arr.map((item) => {
//     return item.trim();
//   });
//   return result;
// }
// const greet = (name) => {
//   console.log("Hey " + name + "!");
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1;
// )

// const rollDie = () => Math.floor(Math.random() * 6) + 1

const newMovies1 = movies.map((movie) => {
  return `${movie.title}, ${movie.score / 10}/10`;
});

const newMovies2 = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`
);
