// RANDOM NUMBER GENERATOR
var random1=(Math.floor(Math.random()*6))+1;
var random2=(Math.floor(Math.random()*6))+1;

// RANDOM IMAGE GENERATOR
var randomDiceImage1 = "dice" + random1 + ".png";
var randomDiceImage2 = "dice" + random2 + ".png";

// RANDOM IMAGE SOURCE
var randomImageSource1="images/" + randomDiceImage1;
var randomImageSource2="images/" + randomDiceImage2;

// CHANGING IMAGE
var image=document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
var image=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// TEXT CHANGING SECTION
if(random1>random2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
