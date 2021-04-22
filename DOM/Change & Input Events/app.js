const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", function () {
//   console.log("whatever");
// });

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});

h1.addEventListener("click", function (e) {
  console.dir(e);
});
