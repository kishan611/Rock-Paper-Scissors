let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const restart = document.getElementById("restart");

const choices = document.querySelectorAll(".choice");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const displayDraw = () => {
  msg.innerText = "Game Draw. Play Again";
  msg.style.backgroundColor = "darkblue";
};
const displayWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreBoard.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreBoard.innerText = compScore;
    msg.innerText = `You Loose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  let userWin = true;
  if (userChoice == compChoice) {
    displayDraw();
  } else {
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "rock" ? true : false;
    } else {
      userWin = compChoice == "paper" ? true : false;
    }
    displayWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
restart.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  msg.innerText = "Play your game.";
  msg.style.backgroundColor = "black";
  userScoreBoard.innerText = 0;
  compScoreBoard.innerText = 0;
});
