let die1 = Math.floor(Math.random() * 6) + 1;

function rollDice(numTimes) {
  let result = [];
  for (let i = 1; i <= numTimes; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    result.push(roll);
  }
  return result;
}

function rollUniqueDice(numTimes, numSides) {
  let result = [];
  for (let i = 1; i <= numTimes; i++) {
    let roll = Math.floor(Math.random() * numSides) + 1;
    result.push(roll);
  }
  return result;
}

function greet(name) {
  if (name.toLowerCase() === "evan") {
    console.log("You Are Awesome");
  } else {
    console.log(`Hello ${name}, welcome`);
  }
}

function rant(message) {
  for (let i = 1; i <= 3; i++) {
    console.log(message.toUpperCase());
  }
}

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    let last = arr[arr.length - 1];
    return last;
  }
}

function capitalize(word) {
  let cap = word[0].toUpperCase();
  let end = "";
  for (let i = 1; i < word.length; i++) {
    end += word[i];
  }
  return cap + end;
}

function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
