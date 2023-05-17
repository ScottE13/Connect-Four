const space = document.getElementsByClassName("space");
const turn = document.getElementById("turn");
let currentPlayer = 1;
let gamestate = 
// 0 = empty, 1 = red, 2 = yellow
[
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
];

for (let i = 0; i < 42; i++) {
    space[i].addEventListener("click", addPiece);
    space[i].setAttribute("id", i);
    if (i > 34) {
        space[i].classList.add("starting-option");
    }
}

function addPiece() {

    var thisSpace = Number(this.id);
    var belowSpace = thisSpace + 7;
    
    
    if (turn.textContent == "Red's Turn") {
        currentPlayer = 1;
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used"))  {
            this.classList.remove("starting-option");
            this.classList.add("red", "used");
            gamestate[thisSpace] = 1;
            turn.textContent ="Yellow's Turn";
        }
    } 

    else if (turn.textContent == "Yellow's Turn") {
        currentPlayer = 2;
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used")) {
            this.classList.remove("starting-option");
            this.classList.add("yellow", "used");
            gamestate[thisSpace] = 2;
            turn.textContent ="Red's Turn";
        }
    }
    detectWin(gamestate);
}

function detectWin(gamestate) {
    for (let i = 0; i < 42; i++) {
        //HORIZONTAL
        if (
            i % 7 <4 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+1] === currentPlayer &&
            gamestate[i+2] === currentPlayer &&
            gamestate[i+3] === currentPlayer
            ) { endGame();
            }
    
         // VERTICAL
         if (
            gamestate[i] === currentPlayer &&
            gamestate[i+7] === currentPlayer &&
            gamestate[i+14] === currentPlayer &&
            gamestate[i+21] === currentPlayer
            ) { endGame();
            }

        // DIAGANOL 
        if (
            i % 7 <4 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+8] === currentPlayer &&
            gamestate[i+16] === currentPlayer &&
            gamestate[i+24] === currentPlayer
            ) { endGame();
            }

        // DIAGANOL OPPOSITE DIRECTION
        if (
            i % 7 > 2 &&
            gamestate[i] === currentPlayer &&
            gamestate[i+6] === currentPlayer &&
            gamestate[i+12] === currentPlayer &&
            gamestate[i+18] === currentPlayer
            ) { endGame();
            }
    }     
}

function endGame() {

    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    turn.textContent = "";

    let winDisplay = document.getElementById("winning-player");
    if (currentPlayer === 1) {
        winDisplay.textContent = 'Red Player Wins!';
    } else if (currentPlayer === 2) {
        winDisplay.textContent = 'Yellow Player Wins!';
    }
    
    
}
