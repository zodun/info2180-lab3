var gameboard;
var winners;
var button;





window.onload= function(){


    
    gameboard=document.querySelectorAll('#board div');
    button= document.getElementsByClassName("btn")[0];


    for (i=0; i<gameboard.length; i++){
        gameboard[i].classList.add("square");
        gameboard[i].addEventListener("click", startGame);
        gameboard[i].addEventListener("mouseover", highlight);
        gameboard[i].addEventListener("mouseout", nohighlight);
    }



}

var player=1;
function startGame(i){

    if ((i.target.innerHTML != "X")&&(i.target.innerHTML != "O")){
        if (player == 1){
            i.target.innerHTML = "X";
            i.target.className += (" X ");
            player = 2;
        }
        else{
            i.target.innerHTML = "O";
            i.target.className += (" O ");
            player = 1;
        }
    }
    checkWin();


}

function highlight(i){
    i.target.classList.add("hover");
    
}

function nohighlight(i){
    i.target.classList.remove("hover");
}


const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};
function checkWin(){

    var win1= gameboard[0]&&gameboard[1]&&gameboard[2]
    var win2= gameboard[3]&&gameboard[4]&&gameboard[5]
    var win3= gameboard[6]&&gameboard[7]&&gameboard[8]
    var win4= gameboard[0]&&gameboard[3]&&gameboard[6]
    var win5= gameboard[1]&&gameboard[4]&&gameboard[6]
    var win6= gameboard[2]&&gameboard[5]&&gameboard[8]
    var win7= gameboard[0]&&gameboard[4]&&gameboard[8]
    var win8= gameboard[2]&&gameboard[4]&&gameboard[6]
    

button.addEventListener("click",newGame);
function newGame(){
    
    for(var i = 0; i<gameboard.length; i++){
        gameboard[i].innerHTML = "";
        gameboard[i].classList.remove("X");
        gameboard[i].classList.remove("O");
    }
    winners.innerHTML = "Move your mouse over a square and click to play an X or an O.";
     winners.classList.remove("you-won");

     

    
}

}