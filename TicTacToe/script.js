// Selecting necessary elements from the DOM
const gameGrid = document.querySelector(".game-grid");
const gameBox = document.querySelectorAll(".box");
const gameResult = document.querySelector(".game-result");
const clickSound = new Audio("sounds/click.mp3");
const winSound = new Audio("sounds/win.mp3");
const backgroundSound = new Audio("sounds/background.mp3");

// Bg-Music on page load
backgroundSound.loop = true;
backgroundSound.volume = 1; // sets volume to 100%

// Start background music when the page loads or when user interacts
window.addEventListener("click", () => {
    if (backgroundSound.paused) {
        backgroundSound.play().catch(e => console.log("Autoplay prevented"));
    }
});

// Winning conditions for Tic-Tac-Toe
const winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical wins
    [0, 4, 8], [2, 4, 6],             // Diagonal wins
];

let turn = true; // 'true' represents Player X's turn, 'false' represents Player O's turn
let gameOver = false; // Flag to check if the game is over

// Adding event listener to each box for player moves
gameBox.forEach((box) => {
    box.addEventListener("click", () => {
        // If the game is already over or the box is occupied, return
        if (gameOver || box.innerText !== "") {
            return;
        }

        // Assign "X" or "O" based on the player's turn
        if (turn) {
            box.innerText = "X";
            box.classList.add("x-mark");
        } else {
            box.innerText = "O";
            box.classList.add("o-mark");
        }

        turn = !turn; // Switch turn
        console.log(turn); // Log the turn status.

        checkWinner(); // Check if there is a winner after each move

        clickSound.currentTime = 0; // rewind to start
        clickSound.play();
    });
});

// Function to check for a winner
let checkWinner = () => {
    for (let pattern of winCondition) {
        let patternValue1 = gameBox[pattern[0]].innerText;
        let patternValue2 = gameBox[pattern[1]].innerText;
        let patternValue3 = gameBox[pattern[2]].innerText;

        // If all three boxes of a pattern are filled and match, declare the winner
        if (patternValue1 !== "" && patternValue1 === patternValue2 && patternValue2 === patternValue3) {
            gameResult.innerText = patternValue1 + " won the game";
            winSound.play();
            gameOver = true;
            return;
        }
    }

    // Check for a draw condition (if all boxes are filled and no winner)
    let isDraw = [...gameBox].every(box => box.innerText !== "");
    if (isDraw) {
        gameResult.innerText = "It's a draw!";
        gameOver = true;
    }
};

let clearBtn = document.querySelector(".start-btn");
clearBtn.innerText = "Start new game";

// resetting the game
clearBtn.addEventListener("click", () => {

    gameBox.forEach((box) => {
        box.innerText = "";//clear boxes
    });

    //game state
    gameResult.innerText = "Make a move to start game";
    gameOver = false;
    turn = true; // x's turn is always first
});
