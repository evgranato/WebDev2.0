//OLD WAY OF DEFAULTING SOMETHING IN A FUNCTION:
function rollDieOld(numSides) {
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
//NEW WAY TO DEFAULT SOMETHING IN A FUNCTION:
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

//console.log(Math.max(1, 2, 4, 11, 405, 21, 1));
//PRINTS 405
const nums = [1, 2, 4, 11, 405, 21, 1];
//console.log(Math.max(nums));
//PRINTS NaN
//console.log(Math.max(...nums));
//PRINTS 405

const cats = ["Snickers", "Maggie"];
const dogs = ["Bentley", "Lilly", "Jack"];

const allPets = [...cats, ...dogs];

const stringSpread = "Hello";
const stringSpread2 = [...stringSpread];

const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  isFurry: true,
  family: "Caninae",
};

const newFeline = { ...feline, color: "black" };
//ADDS COLOR: 'BLACK' TO FELINE AS NEW OBJECT
const catDog = { ...feline, ...canine };
//ORDER MATTERS. LAST ONE IN THE SPREAD IS THE PROPERTY IN THE NEW OBJECT

//USE CASE:
const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
//TOOK DATA FROM FORM, MADE OBJECT WITH OTHER ITEMS:
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

function sum() {
  console.log(arguments);
}

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const [gold, silver, bronze] = scores;
// gold = 929321
//silver = 899341
//bronze = 888336

const user = {
  email: "runner@gmail.com",
  password: "runningislife",
  firstName: "Eliud",
  lastName: "Kipchoge",
  born: 1980,
  died: undefined,
  bio: "He runs really far and really fast.",
  city: "New York",
  state: "New York",
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, firstName, lastName, bio, city } = user;

// const { born: birthYear } = user;

const user2 = {
  email: "test@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

const { city, state, died } = user2;

// GOOD:
function fullName() {
  return `${user2.firstName} ${user2.lastName}`;
}
//BETTER:
// function fullName() {
//   const { firstName, lastName } = user2;
//   return `${firstName} ${lastName}`;
// }
// //BEST:
// function fullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

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

const bestMovies = movies.filter((movie) => movie.score >= 90);
//BETTER:
//const bestMovies = movies.filter(({ score }) => score >= 90);

const ratings = movies.map((movie) => {
  return `${movie.title} (${movie.year}) is rated ${movie.score}`;
});
//DESTRUCTURED:
const destRatings = movies.map(
  ({ title, score, year }) => `${title} (${year}) is rated ${score}`
);
