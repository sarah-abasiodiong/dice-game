let randomNum1 = Math.floor(Math.random() * 6) + 1; 

let diceRandomImage =  "dice" + randomNum1 + ".png";

let randomImageSource = "images/" + diceRandomImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNum2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins! &#128513"

}
else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML ="Player 2 wins! &#128513"
}

else{
    document.querySelector("h1").innerHTML = "Draw!"
}