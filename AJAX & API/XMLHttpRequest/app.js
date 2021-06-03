//OLD WAY OF DOING IT:
// const myReq = new XMLHttpRequest();

// myReq.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   console.log(data.joke);
//   const jokeText = data.joke;
//   const joke = document.createElement("h2");
//   joke.innerText = jokeText;
//   document.body.append(joke);
// };
// myReq.onerror = function (err) {
//   console.log("ERROR!", err);
// };
// myReq.open("get", "https://icanhazdadjoke.com/", true);
// myReq.setRequestHeader("Accept", " application/json");
// myReq.send();

//FETCH API USING PROMISES:
// fetch("https://icanhazdadjoke.com/")
//   .then((res) => {
//     console.log("RESPONSE, waiting to parse", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO. ERROR!", err);
//   });
// //USING ASYNC FUNCTIONS:
// const fetchJoke = async () => {
//   try {
//     const res = await fetch("https://icanhazdadjoke.com/");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fakeRequest = (url) => {
//   return new Promise((response, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         response("Heres your fake data");
//       }
//       reject("Oh, No. Rejected");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("Here's your fake data!!!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("ERRRRRRR");
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("violet", 1000);
  await delayedColorChange("pink", 1000);
  return "All done.";
}

// async function printRainbow() {
//   await rainbow();
//   console.log("end of rainbow");
// }
// printRainbow();
