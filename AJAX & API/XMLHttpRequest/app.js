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
fetch("https://icanhazdadjoke.com/")
  .then((res) => {
    console.log("RESPONSE, waiting to parse", res);
    return res.json();
  })
  .then((data) => {
    console.log("DATA PARSED");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO. ERROR!", err);
  });
//USING ASYNC FUNCTIONS:
const fetchJoke = async () => {
  try {
    const res = await fetch("https://icanhazdadjoke.com/");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
