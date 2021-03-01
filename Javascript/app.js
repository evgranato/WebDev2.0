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

// const dayOfWeek = prompt("Enter a day").toLowerCase();
// const validWeekday = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// // console.log(validWeekday.includes(dayOfWeek));
// if (validWeekday.includes(dayOfWeek) == true) {
//   if (dayOfWeek === "monday") {
//     console.log("I hate Mondays");
//   } else if (dayOfWeek === "saturday") {
//     console.log("I love Saturdays");
//   } else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent, especially after work!");
//   } else {
//     console.log("MEH");
//   }
// } else {
//   console.log("You did not enter a valid weekday");
// }
// let age = prompt("enter your age");

// if (age <= 5) {
//   console.log("You are free");
// } else if (age > 5 && age <= 10) {
//   console.log("You are a child and $10");
// } else if (age > 10 && age < 65) {
//   console.log("You are and adult and $20");
// } else {
//   console.log("You are a senior and $10");
// }
// const password = prompt("Please enter a password");

// if (password.includes(" ") && password.length >= 6) {
//   console.log("Your password cannot contain spaces");
// } else {
//   console.log("Good password");
// }
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.log("Your password cannot have spaces");
//   }
// } else {
//   console.log("Password too short. Must be 6+ characters");
// }
// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Valid Password");
// } else {
//   console.log("Incorrect format for password");
// }
const age = parseInt(prompt("What's your age?"));

if ((age >= 0 && age < 5) || age >= 65) {
  console.log("Free");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("$20");
} else {
  console.log("Invalid Age");
}
