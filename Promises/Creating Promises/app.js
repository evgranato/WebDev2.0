// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("Your fake data here");
//       }
//       reject("Request Error");
//     }, 1000);
//   });
// };

// fakeRequest("dogs/1")
//   .then((data) => {
//     console.log("done with request", data);
//   })
//   .catch((err) => {
//     console.log("OH No!", err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  );
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("violet", 1000))
  .then(() => delayedColorChange("purple", 1000));
