//THIS IS A STRING OF JSON
// const data =
//   '{"ticker":{"base":"ETH","target":"USD","price":"2594.14061237","volume":"1376806.90967132","change":"34.47390763"},"timestamp":1621956542,"success":true,"error":""}';
// //MAKE IT AN OBJECT
// const usableData = JSON.parse(data);
// //ROUNDING THE PRICE AFTER ACCESSING IT
// const price = Math.round(usableData.ticker.price);

// //IF WE NEED TO MAKE AN OBJECT JSON:
// const backToJs = JSON.stringify(usableData);
let lastPrice = 0;

function getPrice() {
  fetch("https://api.cryptonator.com/api/ticker/eth-usd")
    .then((response) => response.json())
    .then((data) => {
      let myData = Math.round(data.ticker.price);
      let pic = document.getElementById("reaction");
      document.getElementById("price").innerText = myData;
      if (lastPrice > myData) {
        document.getElementById("price").style.color = "red";
        pic.classList.remove("good");
        pic.classList.remove("bad");
        pic.classList.toggle("bad");
      } else if (lastPrice < myData) {
        document.getElementById("price").style.color = "green";
        pic.classList.remove("good");
        pic.classList.remove("bad");
        pic.classList.toggle("good");
      }
      console.log(myData);
      lastPrice = myData;
    })
    .catch((err) => {
      console.log(err);
    });
}
getPrice();
setInterval(getPrice, 30000);
