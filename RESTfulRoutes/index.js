const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
  res.send("GET /tacos RESPONSE");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, HERE ARE YOUR ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
