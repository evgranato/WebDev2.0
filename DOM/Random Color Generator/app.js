const title = document.querySelector("h1");
const button = document.querySelector("button");

function randNums() {
  return Math.floor(Math.random() * 256) + 1;
}

function makeRGB() {
  let nums = [];
  for (let i = 0; i < 3; i++) {
    nums.push(randNums());
  }
  return `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
}

button.addEventListener("click", function () {
  let thisColor = makeRGB();
  title.innerText = thisColor;
  document.body.style.backgroundColor = thisColor;
});

// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 256) + 1;
//   const g = Math.floor(Math.random() * 256) + 1;
//   const b = Math.floor(Math.random() * 256) + 1;
//   const newColor = `rgb(${r}, ${g}, ${b})`;
//   document.body.style.backgroundColor = newColor;
//   title.innerText = newColor;
// });
