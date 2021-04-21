for (let i = 0; i < 33; i++) {
  const button = document.createElement("button");
  button.innerText = "Click Me";
  document.body.append(button);
}
for (let i = 0; i < 10; i++) {
  const h1s = document.createElement("h1");
  h1s.innerText = "I'm an H1";
  document.body.append(h1s);
}

function randNums() {
  return Math.floor(Math.random() * 256) + 1;
}

function makeRGB() {
  let nums = [];
  for (let i = 0; i < 3; i++) {
    nums.push(randNums());
  }
  let color = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
  let output = [color, nums];
  return output;
}

const buttons = document.querySelectorAll("button");
const h1All = document.querySelectorAll("h1");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = makeRGB()[0];
//     button.style.color = makeRGB()[0];
//   });
// }

// for (let h1 of h1All) {
//   h1.addEventListener("click", function () {
//     h1.style.backgroundColor = makeRGB()[0];
//     h1.style.color = makeRGB()[0];
//   });
// }

for (let button of buttons) {
  button.addEventListener("click", colorize);
}
for (let h1 of h1All) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRGB()[0];
  this.style.color = makeRGB()[0];
}
