let scorePlayer1 = 0;
let scorePlayer2 = 0;
const winningScore = document.querySelector("select");
let winScore = 1;
let gameOver = false;
winningScore.addEventListener("change", function (e) {
  let initWinScore = winningScore.value;
  winScore = parseInt(initWinScore);
  return winScore;
});
console.log(winScore);

const pointPlayer1 = document.querySelector("#player1");
const pointPlayer2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const p1Disp = document.querySelector("#p1Display");
const p2Disp = document.querySelector("#p2Display");
const h2 = document.querySelector("h2");
const newH1 = document.createElement("h1");
const div = document.querySelector("#append");

pointPlayer1.addEventListener("click", function () {
  if (!gameOver) {
    scorePlayer1 += 1;
    if (scorePlayer1 === winScore) {
      newH1.innerText = "GAME OVER, Player 1 Wins";
      div.appendChild(newH1);
      gameOver = true;
    }
    p1Disp.innerText = scorePlayer1;
  }
});
pointPlayer2.addEventListener("click", function () {
  if (!gameOver) {
    scorePlayer2 += 1;
    if (scorePlayer2 === winScore) {
      newH1.innerText = "Game Over, Player 2 Wins";
      div.appendChild(newH1);
      gameOver = true;
    }
    p2Disp.innerText = scorePlayer2;
  }
});

reset.addEventListener("click", function () {
  gameOver = false;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  p1Disp.innerText = 0;
  p2Disp.innerText = 0;
  newH1.remove();
});

// reset.addEventListener("click", addPoint);

// function addPoint(e) {
//   if (gameOver === false) {
//     if (e.target.id === "player1") {
//       if (gameOver === false) {
//         scorePlayer1 += 1;
//         p1Disp.innerText = scorePlayer1;
//         console.log("player 1 point");
//       } else {
//         alert("GAME OVER, Player 1 Wins");
//       }
//     } else if (e.target.id === "player2") {
//       if (gameOver === false) {
//         scorePlayer2 += 1;
//         p2Disp.innerText = scorePlayer2;
//         console.log("player 2 point");
//       } else {
//         alert("Game Over, Player 2 Wins");
//       }
//     } else if (e.target.id === "reset") {
//       scorePlayer1 = 0;
//       scorePlayer2 = 0;
//       p1Disp.innerText = 0;
//       p2Disp.innerText = 0;
//       Alert("NEW GAME!");
//     } else {
//       console.log("Error (Probably)");
//     }
//   } else {
//     console.log("I'm here");
//   }
// }
