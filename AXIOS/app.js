// axios
//   .get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log(Math.round(res.data.ticker.price));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const currentPrice = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.cryptonator.com/api/ticker/btc-usd"
//     );
//     console.log(Math.round(res.data.ticker.price));
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// setInterval(() => {
//   currentPrice();
// }, 30000);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  getDadJoke();
});

const ul = document.querySelector("#jokes");

const getDadJoke = async function () {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const li = document.createElement("li");
    li.innerText = res.data.joke;
    ul.append(li);
  } catch (e) {
    return "NO JOKES AVAILABLE";
  }
};
