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

console.log(Math.max(1, 2, 4, 11, 405, 21, 1));
//PRINTS 405
const nums = [1, 2, 4, 11, 405, 21, 1];
console.log(Math.max(nums));
//PRINTS NaN
console.log(Math.max(...nums));
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
