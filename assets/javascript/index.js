const space = document.getElementsByClassName("space");
const turn = document.getElementById("turn");


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
    // gamestate[i] = i;
    if (i > 34) {
        space[i].classList.add("starting-option");
    }
}

function addPiece() {

    var thisSpace = Number(this.id);
    var belowSpace = thisSpace + 7;
    
    
    if (turn.textContent == "Red's Turn") {
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used"))  {
            this.classList.remove("starting-option");
            this.classList.add("red", "used");
            turn.textContent ="Yellow's Turn";
            gamestate[thisSpace] = 1;
        }
    } 

    else if (turn.textContent == "Yellow's Turn") {
        if (this.classList.contains("starting-option") || space[belowSpace].classList.contains("used") && !this.classList.contains("used")) {
            this.classList.remove("starting-option");
            this.classList.add("yellow", "used");
            turn.textContent ="Red's Turn";
            gamestate[thisSpace] = 2;
        }
    }
    detectWin(gamestate);
}


function detectWin(gamestate) {

    //HORIZONTAL
    for (let i = 0; i < 42; i++) {
        if(i % 7 <4) {
            if(
             gamestate[i] === 1 &&
             gamestate[i+1] === 1 &&
             gamestate[i+2] === 1 &&
             gamestate[i+3] === 1
            ) {
                alert("Red is the winner!");
            } 
            else if (
             gamestate[i] === 2 &&
             gamestate[i+1] === 2 &&
             gamestate[i+2] === 2 &&
             gamestate[i+3] === 2   
            ) {
                alert("Yellow is the winner!");
            }
        }
    }
    
}
