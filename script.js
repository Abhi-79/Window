
"use strict";
const player1Screen = document.querySelector(".player--0");

const player2Screen = document.querySelector(".player--1");
const rollbtn = document.querySelector(".btn--roll");
const currentScore1 = document.querySelector(".current--0");
const currentScore2 = document.querySelector(".current--1");
const image = document.querySelector(".dice");

const holdBtn = document.querySelector(".btn--hold");

const newGameBtn = document.querySelector(".btn--new");
let player1Total = document.querySelector("#score--0");
let player2Total = document.querySelector("#score--1");

let Score1 = 0;
let playerScore1 = 0;
let playerScore2 = 0;

rollbtn.addEventListener("click", () => {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  let randomImage = `dice-${randomNumber}.png`;
  image.setAttribute("src", randomImage);
  image.classList.remove("hidden-dice");
  if (
    player1Screen.classList.contains("player--active") === true &&
    randomNumber !== 1
  ) {
    Score1 = Score1 + randomNumber;
    currentScore1.textContent = Score1;
  } else if (
    player2Screen.classList.contains("player--active") === true &&
    randomNumber !== 1
  ) {
    Score1 = Score1 + randomNumber;
    currentScore2.textContent = Score1;
  } else {
    if (player1Screen.classList.contains("player--active") === true) {
      Score1 = 0;
      currentScore1.textContent = Score1;
    } else if (player2Screen.classList.contains("player--active") === true) {
      Score1 = 0;
      currentScore2.textContent = Score1;
    }
    player1Screen.classList.toggle("player--active");
    player2Screen.classList.toggle("player--active");
  }
});

holdBtn.addEventListener("click", () => {
  if (player1Screen.classList.contains("player--active")) {
    playerScore1 = playerScore1 + Score1;
    player1Total.textContent = playerScore1;
    Score1 = 0;
    currentScore1.textContent = Score1;
    if (playerScore1 >= 100) {
      player1Screen.classList.add("player--winner");
      rollbtn.disabled = true;
      holdBtn.disabled = true;
    }
  } else if (player2Screen.classList.contains("player--active")) {
    playerScore2 = playerScore2 + Score1;
    player2Total.textContent = playerScore2;
    Score1 = 0;
    currentScore2.textContent = Score1;
    if (playerScore2 >= 100) {
      player2Screen.classList.add("player--winner");
      rollbtn.disabled = true;
      holdBtn.disabled = true;
    }
  }

  player1Screen.classList.toggle("player--active");
  player2Screen.classList.toggle("player--active");
});

newGameBtn.addEventListener("click", () => {
  player1Screen.classList.add("player--active");
  Score1 = 0;
  playerScore1 = 0;
  playerScore2 = 0;
  player1Total.textContent = playerScore1;
  player2Total.textContent = playerScore2;
  currentScore1.textContent = Score1;
  currentScore2.textContent = Score1;
  image.classList.add("hidden-dice");
  if (player1Screen.classList.contains("player--winner")) {
    player1Screen.classList.remove("player--winner");
    player1Screen.classList.add("player--active");
    player2Screen.classList.remove("player--active");
  } else if (player2Screen.classList.contains("player--winner")) {
    player2Screen.classList.remove("player--winner");
    player1Screen.classList.add("player--active");
    player2Screen.classList.remove("player--active");
  }
  rollbtn.disabled = false;
  holdBtn.disabled = false;
});
