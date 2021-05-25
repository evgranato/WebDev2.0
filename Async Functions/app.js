// const sing = async () => {
//   throw new Error("Uh Oh");
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("promise resolved with", data);
//   })
//   .catch((err) => {
//     console.log("Oh no, Promise Rejected");
//     console.log(err);
//   });

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials";
//   if (password === "test") return "Welcome!";
//   throw "Invalid Password";
// };
// login("tesdfdst", "test")
//   .then((msg) => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("error!");
//     console.log(err);
//   });

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay)
//   );
// };

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("violet", 1000))
//   .then(() => delayedColorChange("purple", 1000));

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("orange", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("violet", 1000);
//   return "All Done!";
// }

// rainbow().then(() => console.log("END OF RAINBOW!"));

// async function printRainbow() {
//   await rainbow();
//   console.log("END OF RAINBOW!");
// }

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  let data1 = await fakeRequestPromise("/page1");
  console.log(data1);
}
