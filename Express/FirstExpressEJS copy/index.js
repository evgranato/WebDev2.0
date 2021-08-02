const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "/public"));

let characters = ["mickey", "goofy", "donald", "pluto"];
app.get("/", (req, res) => {
  res.render("home", { characters: characters });
});

app.get("/cats", (req, res) => {
  const cats = ["blue", "rocky", "stephanie", "monty", "winston"];
  res.render("cats", { cats: cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notFound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
