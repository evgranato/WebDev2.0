console.log("Hello from my first js file!!!!");

// let rating = prompt("What is your rating?");

// if (parseInt(rating) === 3) {
//   console.log("You are a superstar");
// } else {
//   console.log("Nope Sir");
// }

// let random = Math.random();
// if (random <= 0.5) {
//   console.log("Heads");
// } else {
//   console.log("Tails");
// }

// const dayOFWeek = "Saturday";

// if (dayOFWeek === "Monday") {
//   console.log("I hate Mondays");
// } else if (dayOFWeek === "Saturday") {
//   console.log("I love Saturdays");
// }

let age = prompt("enter your age");

if (age <= 5) {
  console.log("You are free");
} else if (age > 5 && age <= 10) {
  console.log("You are a child and $10");
} else if (age > 10 && age < 65) {
  console.log("You are and adult and $20");
} else {
  console.log("You are a senior and $10");
}
