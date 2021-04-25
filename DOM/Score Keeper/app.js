const p1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#p1Display"),
  name: "Player 1",
};
const p2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#p2Display"),
  name: "Player 2",
};

const winningScore = document.querySelector("select");
let gameOver = false;
let winScore = 3;
const reset = document.querySelector("#reset");
const h2 = document.querySelector("h2");
const newH1 = document.createElement("h1");
const div = document.querySelector("#append");

winningScore.addEventListener("change", function () {
  winScore = parseInt(this.value);
  resetting();
  return winScore;
});

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winScore) {
      newH1.innerText = `GAME OVER, ${player.name} wins!`;
      div.appendChild(newH1);
      player.button.disabled = true;
      opponent.button.disabled = true;
      gameOver = true;
    }
    player.display.innerText = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

reset.addEventListener("click", resetting);

function resetting() {
  gameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = 0;
  p2.display.innerText = 0;
  p1.button.disabled = false;
  p2.button.disabled = false;
  newH1.remove();
}
