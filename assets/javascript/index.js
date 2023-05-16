const space = document.getElementsByClassName("space");
const turn = document.getElementById("turn");

for (let i = 0; i < 42; i++) {
    space[i].addEventListener("click", addPiece);
    space[i].classList.add(i);
    if (i > 34) {
        space[i].classList.add("starting-option");
    };


function addPiece() {

    
    if (turn.textContent == "Red's Turn") {
        if (this.classList.contains("starting-option") || space[i+7].classList.contains("used") && !this.classList.contains("used"))  {
            this.classList.remove("starting-option");
            this.classList.add("red", "used");
            turn.textContent ="Yellow's Turn"
        }
    } 

    else if (turn.textContent == "Yellow's Turn") {
        if (this.classList.contains("starting-option") || space[i+7].classList.contains("used") && !this.classList.contains("used")) {
            this.classList.remove("starting-option");
            this.classList.add("yellow", "used");
            turn.textContent ="Red's Turn"
        }
    };
};

};
   

