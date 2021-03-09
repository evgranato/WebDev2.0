const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunners",
];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let sub of subreddits) {
//   console.log(`Visit reddit.com/r/${sub}`);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let num of numbers) {
//   console.log(num * num);
// }

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let person in testScores) {
  console.log(person);
}
for (let person in testScores) {
  console.log(`${person} got ${testScores[person]}`);
}

const scores = Object.values(testScores);
let sum = 0;

for (let score of scores) {
  sum += score;
}
console.log(sum / scores.length);
