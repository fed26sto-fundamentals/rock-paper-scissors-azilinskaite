let compChoice;
let humanChoice;
let scorePlayer = 0;
let scoreComputer = 0;

//get computer choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}

//get user choice
function getHumanChoice() {
  let answer = prompt("Rock, Paper or Scissors?");
  humanChoice = answer.toLowerCase();
  return humanChoice;
}

//compare who wins
function playRound() {
  console.log(humanChoice);
  console.log(compChoice);
  if (humanChoice === compChoice) {
    console.log("It's a draw.");
  } else if (humanChoice === "rock" && compChoice === "scissors") {
    console.log("Player wins!");
    scorePlayer++;
  } else if (humanChoice === "paper" && compChoice === "rock") {
    console.log("Player wins!");
    scorePlayer++;
  } else if (humanChoice === "scissors" && compChoice === "paper") {
    console.log("Player wins!");
    scorePlayer++;
  } else {
    console.log("Computer wins!");
    scoreComputer++;
  }
};

function playGame() {
    for (let step = 0; step < 5; step++){
        getHumanChoice();
        getComputerChoice();
        playRound();
        console.log("Player score: " + scorePlayer);
        console.log("Computer score: " +scoreComputer);
    }
};

playGame();

//compare scores, declare winner