let dice1 = document.createElement("img");
dice1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";

let dice2 = document.createElement("img");
dice2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png";

let dice3 = document.createElement("img");
dice3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png";

let dice4 = document.createElement("img");
dice4.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png";

let dice5 = document.createElement("img");
dice5.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png";

let dice6 = document.createElement("img");
dice6.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png";

let diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
// let diceRoll2 = [dice1, dice2, dice3, dice4, dice5, dice6];

let diceRoll1 = diceArray[Math.floor(Math.random()*diceArray.length)];
let diceRoll2 = diceArray[Math.floor(Math.random()*diceArray.length)];

// function myFunction() {

let src1 = document.getElementById("header1");
src1.appendChild(diceRoll1);

let src2 = document.getElementById("header2");
src2.appendChild(diceRoll2);

//   }


// let src1 = document.getElementById("header1");
// src1.appendChild(diceRoll1);

// let src2 = document.getElementById("header2");
// src2.appendChild(diceRoll2);

