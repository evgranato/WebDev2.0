// tweetForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   tweetP.innerText = `${user.value}: "${tweetContent.value}"`;
//   ul.appendChild(tweetP);
// });

tweetForm.addEventListener("submit", function (e) {
  const tweetForm = document.querySelector("#tweetForm");
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.comment;
  e.preventDefault();
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const newBTag = document.createElement("b");
  const ul = document.querySelector("ul");
  newBTag.append(username);
  newTweet.append(newBTag);
  newTweet.append(`: "${tweet}"`);
  ul.appendChild(newTweet);
};
