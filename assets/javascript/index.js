const space = document.getElementsByClassName("empty-space");
const turn = document.getElementById("turn");

for (let i = 0; i < 42; i++) {
    space[i].addEventListener("click", addPiece);
    space[i].classList.add(i);
    if (i > 34) {
        space[i].classList.add("starting-option");
    };
};

function addPiece() {

    if (turn.textContent == "Red's Turn") {
        this.classList.add("red");
        turn.textContent ="Yellow's Turn"
    } 

    else if (turn.textContent == "Yellow's Turn") {
        this.classList.add("yellow");
        turn.textContent ="Red's Turn"
    };
};
   

