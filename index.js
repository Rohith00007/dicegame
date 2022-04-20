
var randomNumber1;
randomNumber1 = Math.floor((Math.random()*6)+1);


var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


// if(randomNumber1 == 1)
// {
// document.querySelector(".img1").setAttribute("dice6.png"),("dice1.png");
// }else if (randomNumber1 == 2) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice2.png");
// }else if (randomNumber1 == 3) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice3.png");
// }else if (randomNumber1 == 4) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice4.png");
// }else if (randomNumber1 == 5) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice5.png");
// }
//
//
// var randomNumber2;
// randomNumber2 = math.floor((math.random()*6)+1);
//
// if(randomNumber2 == 1)
// {
// document.querySelector(".img1").setAttribute("dice6.png"),("dice1.png");
// }else if (randomNumber2 == 2) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice2.png");
// }else if (randomNumber2 == 3) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice3.png");
// }else if (randomNumber2 == 4) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice4.png");
// }else if (randomNumber2 == 5) {
//   document.querySelector(".img1").setAttribute("dice6.png"),("dice5.png");
// }
//
// document.querySelector("h1").innerHTML("Refresh Me");
//
// if(randomNumber1 > randomNumber2)
// {
//   document.querySelector("h1").innerHTML("Player1 wins");
// }else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML("Player2 wins");
// }else{
//   document.querySelector("h1").innerHTML("Its a draw");
// }
