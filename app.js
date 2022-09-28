// selectors
const square = document.querySelectorAll(".square");
const form = document.querySelector(".start-form");
const p1n = document.querySelector(".pl1");
const p2n = document.querySelector(".pl2");
const formBtn = document.querySelector(".btn-start");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const game = document.querySelector(".hiden");
var p1;
var p2;
var currentPlayer;
var wins = [
    /0.*1.*2/,
    /3.*4.*5/,
    /6.*7.*8/,
    /0.*3.*6/,
    /1.*4.*7/,
    /2.*5.*8/,
    /0.*4.*8/,
    /2.*4.*6/,
];
p1Cards = []
p2Cards = []

// events
formBtn.addEventListener("click", getnames);

square.forEach((squ) => {
  squ.addEventListener("click", fillIt);
});

// functions

function getnames() {
  p1 = p1n.value;
  p2 = p2n.value;
  name1.textContent = p1;
  name2.textContent = p2;

  startTheGame();
}

function startTheGame() {
  if (p1 == "" || p2 == "") {
    alert("you should isert the names first");
  } else {
    game.classList.remove("hiden");
    game.classList.add("game");
    form.classList.add("hiden");
    name1.style.color = "black";
    currentPlayer = p1;
  }
}

function fillIt(e) {
  if (currentPlayer == p1) {
    e.target.textContent = "X";
    const card = e.target.id
    p1Cards.push(card)
    currentPlayer = p2;
    name1.style.color = "white";
    name2.style.color = "black";
    e.target.removeEventListener("click", fillIt);
    checkIfWin(p1Cards, 1)
  } else if (currentPlayer == p2) {
    e.target.textContent = "O";
    const card = e.target.id
    p2Cards.push(card)
    currentPlayer = p1;
    name1.style.color = "black";
    name2.style.color = "white";
    e.target.removeEventListener("click", fillIt);
    checkIfWin(p2Cards, 2)
  }
  
}

function checkIfWin(card, p){

    if(wins.some(e => card.sort((a,b)=> parseInt(a) - parseInt(b) ).join("").search(e) > -1)){
      alert('player:'+p+'is win')
    }
    
}