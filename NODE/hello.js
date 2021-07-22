const button = document.querySelector("button");
const background = document.querySelector("body");

// button.addEventListener("click", () => {
//   const newH1 = document.createElement("h1");
//   newH1.innerText = "Yo Bitch!";
//   document.body.append(newH1);
//   background.style.backgroundColor = "red";
//   alert("clicked");
// });
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  if (count > 1 && count < 50) {
    const h1 = document.querySelector("h1");
    h1.innerText = `${count}`;
    document.h1.replace(h1);
  } else if (count >= 50) {
    const newPar = document.createElement("p");
    newPar.innerText = `${count} is the perfect number`;
    document.body.append(newPar);
    background.style.backgroundColor = "green";
  } else {
    const newH1 = document.createElement("h1");
    newH1.innerText = `${count}`;
    document.body.append(newH1);
    background.style.backgroundColor = "red";
  }
});
