
// For 1st Dice //
var randomNumber1  = Math.random();
randomNumber1  = randomNumber1 *6;
randomNumber1  = Math.floor(randomNumber1)+1;

if(randomNumber1==1){
    document.getElementById('img1').src = "images/dice1.png";
}
if(randomNumber1==2){
    document.getElementById('img1').src = "images/dice2.png";
}
if(randomNumber1==3){
    document.getElementById('img1').src = "images/dice3.png";
}
if(randomNumber1==4){
    document.getElementById('img1').src = "images/dice4.png";
}
if(randomNumber1==5){
    document.getElementById('img1').src = "images/dice5.png";
}
if(randomNumber1==6){
    document.getElementById('img1').src = "images/dice6.png";
}

// For 2nd Dice //

var randomNumber2  = Math.random();
randomNumber2  = randomNumber2 *6;
randomNumber2  = Math.floor(randomNumber2)+1;

if(randomNumber2==1){
    document.getElementById('img2').src = "images/dice1.png";
}
if(randomNumber2==2){
    document.getElementById('img2').src = "images/dice2.png";
}
if(randomNumber2==3){
    document.getElementById('img2').src = "images/dice3.png";
}
if(randomNumber2==4){
    document.getElementById('img2').src = "images/dice4.png";
}
if(randomNumber2==5){
    document.getElementById('img2').src = "images/dice5.png";
}
if(randomNumber2==6){
    document.getElementById('img2').src = "images/dice6.png";
}

// Result Decalaration //

var el = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    el.innerHTML  = "🚩 Player1 Wins!" 
}
else if(randomNumber1<randomNumber2){
    el.innerHTML  = "Player2 Wins! 🚩" 
}
else if(randomNumber1==randomNumber2){
    el.innerHTML  = "Draw!" 
}
// else{
//     document.querySelector("h1").innerHTML  = "Refresh Me" 
// }


