// console.log("Sending request to server!");
// setTimeout(() => {
//   console.log("Here is your data from the server");
// }, 3000);
// console.log("I am at the end of the file");

const colors = ["red", "orange", "yellow", "green", "blue"];

const h1 = document.querySelector("h1");

const delayColorChange = (color, delay) => {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
};

// for (color of colors) {
//   delayColorChange(color);
// }

for (i = 1; i < colors.length + 1; i++) {
  delayColorChange(colors[i - 1], `${i + 2}000`);
}
