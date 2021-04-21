document.querySelector("button").addEventListener("click", function (evt) {
  alert("click");
  console.log(evt);
});

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log("keydown");
  console.log(e.key);
});
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("Down!");
      break;
    case "ArrowLeft":
      console.log("Left!");
      break;
    case "ArrowRight":
      console.log("Right!");
      break;
    default:
      console.log("IGNORED");
  }
});
// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });
