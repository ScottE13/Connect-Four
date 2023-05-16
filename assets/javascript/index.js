const space = document.getElementsByClassName('empty-space');

for (let i = 0; i < 42; i++) {
    space[i].addEventListener("click", addPiece);
};
      
function addPiece() {
    this.style.backgroundColor = "red";
  };
