// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Get references to game elements
const choices = document.querySelectorAll(".options div"); // Rock, Paper, Scissors buttons
const msg = document.querySelector(".gameStatement button"); // Message display button
const userScorePara = document.querySelector(".yourScore"); // User's score display
const compScorePara = document.querySelector(".computerScore"); // Computer's score display

// Function to randomly choose Rock, Paper, or Scissors for the computer
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

// Function to handle a draw situation
const handleDraw = () => {
  msg.innerText = "It's a Draw! Try again.";
  msg.style.backgroundColor = "#081b31"; // Blue color for draw
};

// Function to update scores and display winner message
const updateGameResult = (userWon, userChoice, compChoice) => {
  if (userWon) {
    userScore++; // Increase user's score
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // Green for win
  } else {
    compScore++; // Increase computer's score
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"; // Red for loss
  }

  // Update score display
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
};

// Function to play the game when the user selects a choice
const playGame = (userChoice) => {
  const compChoice = getComputerChoice(); // Get computer's choice

  if (userChoice === compChoice) {
    handleDraw(); // If both choices are the same, it's a draw
  } else {
    // Determine if the user wins based on game rules
    const userWins =
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper");

    updateGameResult(userWins, userChoice, compChoice);
  }
};

// Add event listeners to each choice (rock, paper, scissors)
choices.forEach((choice, index) => {
  const choicesArray = ["rock", "paper", "scissors"]; // Map index to choice name
  choice.addEventListener("click", () => playGame(choicesArray[index]));
});
