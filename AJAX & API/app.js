//THIS IS A STRING OF JSON
const data =
  '{"ticker":{"base":"ETH","target":"USD","price":"2594.14061237","volume":"1376806.90967132","change":"34.47390763"},"timestamp":1621956542,"success":true,"error":""}';
//MAKE IT AN OBJECT
const usableData = JSON.parse(data);
//ROUNDING THE PRICE AFTER ACCESSING IT
const price = Math.round(usableData.ticker.price);

//IF WE NEED TO MAKE AN OBJECT JSON:
const backToJs = JSON.stringify(usableData);
