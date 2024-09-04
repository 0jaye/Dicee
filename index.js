function showDefault() {
    var content=document.getElementById("content");
    content.innerHTML="Start Dice!";
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");

}


function diceRandom() {
    var images=["dice1","dice2","dice3","dice4","dice5","dice6"];
    var randomNumber1=images[Math.floor(Math.random()*images.length)];
    return ("images/"+randomNumber1+".png");
}
var diceRandom1=diceRandom();
var diceRandom2=diceRandom();

document.querySelector(".img1").setAttribute("src", diceRandom1);
document.querySelector(".img2").setAttribute("src", diceRandom2);

var diceNumber1=parseInt(diceRandom1.slice(11,-4));
var diceNumber2=parseInt(diceRandom2.slice(11,-4));

if (diceNumber1>diceNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}else if (diceNumber1<diceNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}else if(diceNumber1===diceNumber2){
    document.querySelector("h1").innerHTML="Draw!";

}


  if (!sessionStorage.getItem("pageRefreshed")) {
    showDefault();
    sessionStorage.setItem("pageRefreshed", true);
  } else {
    sessionStorage.removeItem("pageRefreshed");
    diceRandom();}