// const nums = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
// ];

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

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//     year: 1950,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//     year: 1997,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//     year: 2014,
//   },
//   {
//     title: "Alien",
//     score: 90,
//     year: 1979,
//   },
// ];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });
// let output = "";

// for (let movie of movies) {
//   output += movie.title + " " + movie.score + " ";
// }
// console.log(output);

// const doubles = nums.map(function (num) {
//   return num * 2;
// });

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

// const newMovies1 = movies.map((movie) => {
//   return `${movie.title}, ${movie.score / 10}/10`;
// });

// const newMovies2 = movies.map(
//   (movie) => `${movie.title} - ${movie.score / 10}`
// );

// setTimeout(() => console.log("Hello"), 3000);

// const id = setInterval(() => console.log("Hello"), 3000);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const odds = nums.filter((n) => {
//   return n % 2 === 1;
// });

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1950,
  },
  {
    title: "Stand By Me",
    score: 60,
    year: 1997,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2014,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// const yearRequest = prompt("What year of movie?");

// for (let i = 0; i < movies.length; i++) {
//   if (movies[i].year == yearRequest) {
//     console.log(movies[i].title);
//   }
// }

// let response = movies.find((m, i) => {
//   if (m.year === yearResponse){
//     movies[i] = {}
// }
// alert(response);

// function yearResponse(yearRequest) {
//   for (let i = 0; i < movies.length; i++) {
//     for (key in movies) {
//       if (movies[key].yearRequest === yearRequest) {
//         let response = movies[i];
//         return response;
//       }
//     }
//   }
// }

// const name = prompt("What's your first name?");

// const revisedName = name[0].toUpperCase() + name.slice(1);
// alert(`Hi ${revisedName}`);

const goodMovies = movies.filter((movie) => {
  return movie.score > 80;
});
// OR SMALLER WAY TO WRITE IT
// const goodMovies = movies.filter((m) => m.score > 80);

const badMovies = movies.filter((m) => m.score < 80);
const goodTitles = goodMovies.map((m) => m.title);
//OR SHORTER CODE:
const goodTitles2 = movies.filter((m) => m.score > 80).map((m) => m.title);

const validUserNames = function (arr) {
  return arr.filter((a) => a.length < 10);
};

const specificYear = movies.every((movie) => movie.year > 1920);
const anyYear = movies.some((movie) => movie.year === 1979);

const allEvens = function (arr) {
  return arr.every((a) => a % 2 === 0);
};

// REDUCE

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;
for (let price of prices) {
  total += price;
}

const total2 = prices.reduce((total, price) => {
  return total + price;
});

const lowestPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  } else {
    return min;
  }
});

const highestRating = movies.reduce((max, movie) => {
  if (movie.score > max.score) {
    return movie;
  } else {
    return max;
  }
});

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person2 = {
  firstName: "Evan",
  lastName: "Granato",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
