const title = document.querySelector("h1");
const button = document.querySelector("button");
button.classList.add("btn", "btn-outline-success", "mt-4");

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

button.addEventListener("click", function () {
  let myColor = makeRGB();
  let thisColor = myColor[0];
  let calc = myColor[1];
  let total = 0;
  for (let c of calc) {
    total += c;
  }
  if (total > 300) {
    title.innerText = thisColor;
    title.style.color = "black";
    document.body.style.backgroundColor = thisColor;
    button.classList.remove("btn", "btn-outline-light", "mt-4");
    button.classList.add("btn", "btn-outline-success", "mt-4");
  } else {
    title.innerText = thisColor;
    title.style.color = "white";
    document.body.style.backgroundColor = thisColor;
    button.classList.remove("btn", "btn-outline-success", "mt-4");
    button.classList.add("btn", "btn-outline-light", "mt-4");
  }
});

// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 256) + 1;
//   const g = Math.floor(Math.random() * 256) + 1;
//   const b = Math.floor(Math.random() * 256) + 1;
//   const newColor = `rgb(${r}, ${g}, ${b})`;
//   document.body.style.backgroundColor = newColor;
//   title.innerText = newColor;
// });
