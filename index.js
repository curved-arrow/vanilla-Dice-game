var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

var diceSource1 = "images/" + randomDice1;
var diceSource2 = "images/" + randomDice2;

var dicePic1 = document.querySelectorAll("img")[0];
dicePic1.setAttribute("src", diceSource1);

var dicePic2 = document.querySelectorAll("img")[1];
dicePic2.setAttribute("src", diceSource2);

 // "correct" code is above
// my code is below


// var dice1 = [0,1,2,3,4,5];
// var dice2 = [0,1,2,3,4,5];
//
// function diceRollA() {
//   var diceRoll1 = dice1[Math.floor(Math.random()*6)+1];
//   if (diceRoll1==dice1[0]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//   } else if (diceRoll1==dice1[1]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//   } else if (diceRoll1==dice1[2]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//   } else if (diceRoll1==dice1[3]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//   } else if (diceRoll1==dice1[4]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//   } else if (diceRoll1==dice1[5]) {
//   document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//   }
//   return diceRoll1;
// }
//
// function diceRollB() {
//   var diceRoll2 = dice2[Math.floor(Math.random()*6)+1];
//   if (diceRoll2==dice2[0]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   } else if (diceRoll2==dice2[1]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   } else if (diceRoll2==dice2[2]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   } else if (diceRoll2==dice2[3]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   } else if (diceRoll2==dice2[4]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   } else if (diceRoll2==dice2[5]) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//   return diceRoll2;
// }

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player One Wins!";
} else if (randomNumber1 < randomNumber2)  {
  document.querySelector("h1").innerHTML="Player Two Wins!";
} else {
  document.querySelector("h1").innerHTML="Draw!";
}
