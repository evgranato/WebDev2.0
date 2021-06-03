// axios
//   .get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log(Math.round(res.data.ticker.price));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const currentPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(Math.round(res.data.ticker.price));
  } catch (e) {
    console.log("ERROR", e);
  }
};

setInterval(() => {
  currentPrice();
}, 30000);
