let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".options div");
const msgBox = document.querySelector(".gameStatement");
const userScorePara = document.querySelector(".yourScore");
const compScorePara = document.querySelector(".computerScore");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const handleDraw = () => {
    msgBox.innerText = "It's a Draw! Try again.";
    msgBox.style.backgroundColor = "skyblue";
};

const updateGameResult = (userWon, userChoice, compChoice) => {
    if (userWon) {
        userScore++;
        msgBox.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
    } else {
        compScore++;
        msgBox.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = "red";
    }

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

const playGame = (userChoice) => {
    const compChoice = getComputerChoice();
    if (userChoice === compChoice) {
        handleDraw();
    } else {
        const userWins =
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper");
        updateGameResult(userWins, userChoice, compChoice);
    }
};



choices.forEach((choice, index) => {
  const choicesArray = ["rock", "paper", "scissors"];
  choice.addEventListener("click", () => {
      const img = choice.querySelector("img");
      img.classList.add("clicked");

      setTimeout(() => {
          img.classList.remove("clicked");
      }, 150);

      playGame(choicesArray[index]);
  });
});
