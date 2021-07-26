const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("<h1>This is my webpage</h1>");
// });

// "/"
app.get("/", (req, res) => {
  res.send("THIS IS THE HOME PAGE");
});

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`<h1>THIS IS THE ${subreddit.toUpperCase()} SUBREDDIT</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>VIEWING ${postId}. THIS IS THE ${subreddit.toUpperCase()} SUBREDDIT</h1>`
  );
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  const { flavor } = req.query;
  if (!q) {
    res.send("<h1>NOTHING FOUND IF NOTHING SEARCHED</h1>");
  } else if (q && flavor) {
    res.send(
      `<h1>YOUR SEARCH FOR ${q.toUpperCase()} AND ${flavor.toUpperCase()} GOOD SIR.</h1>`
    );
  } else {
    res.send(`<h1>YOUR SEARCH FOR ${q.toUpperCase()} GOOD SIR.</h1>`);
  }
});

//test

//CATS => 'meow'
app.get("/cats", (req, res) => {
  res.send("MEOW!!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO CATS. THIS IS DIFFERENT");
});

//DOGS => 'woof'
app.get("/dogs", (req, res) => {
  res.send("WOOF!!!");
});

app.get("*", (req, res) => {
  res.send(`I don't know that path ${req.url}`);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
