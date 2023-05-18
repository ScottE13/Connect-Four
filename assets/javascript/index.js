// --------------- Declare Variables ---------------

const space = document.getElementsByClassName("space");
const turn = document.getElementById("turn");
let currentPlayer = 1;
let gamestate = 
// Array to store gamestate as moves are made.
// 0 signifies an empty space.
// 1 will signify a pink piece.
// 2 will signifiy a blue piece. 
[
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
];

// --------------- Game Setup ---------------
// Loops to set event listeners on each space.
// Sets ID for all game spaces.
// Labels the bottom row of spaces with their own class.

for (let i = 0; i < 42; i++) {
    space[i].addEventListener("click", addPiece);
    space[i].setAttribute("id", i);
    if (i > 34) {
        space[i].classList.add("starting-option");
    }
}

// --------------- Game Play ---------------
// Creates conditions for where a player may place their piece.
// Player can place a piece on the bottom row or above another piece only.
// Player cannot place a piece on a space that was already taken.
//
// Updates the gamestate array with the players move.
// Rotates between players and updates the DOM display for who's turn it is.
// Checks if anyone has won at the end of each turn. 


function addPiece() {

    var thisSpace = Number(this.id);
    var belowSpace = thisSpace + 7;
    
    
    if (turn.textContent == "Pink's Turn") {
        currentPlayer = 1;
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used"))  {
            this.classList.remove("starting-option");
            this.classList.add("pink", "used");
            gamestate[thisSpace] = 1;
            turn.textContent ="Blue's Turn";
        }
    } 

    else if (turn.textContent == "Blue's Turn") {
        currentPlayer = 2;
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used")) {
            this.classList.remove("starting-option");
            this.classList.add("blue", "used");
            gamestate[thisSpace] = 2;
            turn.textContent ="Pink's Turn";
        }
    }
    detectWin(gamestate);
}

// --------------- Check for Win---------------
// Loops through the gamestate array to check if a player has four tokens in a row and has won the game.
// Checks if all spaces are taken so the game is a draw. 
// Calls the endGame function if either of the above is true. 
//
// Credit to Tom Campbell's youtube video for the method used to specify checks using the remainder operator, to prevent false wins being recorded.
// https://www.youtube.com/watch?v=kA9OOeUXXSU&ab_channel=TomCampbell

function detectWin(gamestate) {
    for (let i = 0; i < 42; i++) {
        //HORIZONTAL CHECK
        if (
            i % 7 <4 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+1] === currentPlayer &&
            gamestate[i+2] === currentPlayer &&
            gamestate[i+3] === currentPlayer
            ) { endGame();
            }
    
         // VERTICAL CHECK
         if (
            gamestate[i] === currentPlayer &&
            gamestate[i+7] === currentPlayer &&
            gamestate[i+14] === currentPlayer &&
            gamestate[i+21] === currentPlayer
            ) { endGame();
            }

        // DIAGANOL CHECK
        if (
            i % 7 <4 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+8] === currentPlayer &&
            gamestate[i+16] === currentPlayer &&
            gamestate[i+24] === currentPlayer
            ) { endGame();
            }

        // DIAGANOL OPPOSITE DIRECTION CHECK
        if (
            i % 7 > 2 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+6] === currentPlayer &&
            gamestate[i+12] === currentPlayer &&
            gamestate[i+18] === currentPlayer
            ) { endGame();
            }
    }     
    // CHECK FOR DRAW
    if (!gamestate.includes(0)) {
        endGame();
    }
}

// --------------- Game End ---------------
// Ends the game when someone has won or there is a draw.
// Makes modal visible and updates the DOM to display the games result.
// Allows players to then reset the game by reloading the page.

function endGame() {

    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    turn.textContent = "";

    let winDisplay = document.getElementById("winning-player");
    if (currentPlayer === 1 && gamestate.includes(0) ) {
        winDisplay.textContent = 'Pink Player Wins!';
    } else if (currentPlayer === 2 && gamestate.includes(0)) {
        winDisplay.textContent = 'Blue Player Wins!';
    } else {
        winDisplay.textContent = 'It is a draw!';
    }
}

let reset = document.getElementsByClassName("reset");
    reset[0].onclick = function() {
        location.reload();
    };
    reset[1].onclick = function() {
        location.reload();
    };