var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var liList = document.querySelectorAll("li");
var lightImage = document.getElementById("lights");

var animationPaused = true;


function startAnimation () {
  liList.forEach(function (li) {
    li.style.animationPlayState = "running";
  });
  lightImage.style.display = "none";
  animationPaused = false;
}

function stopAnimation () {
  liList.forEach(function (li) {
    li.style.animationPlayState = "paused";
  });
  lightImage.style.display ="block";
  animationPaused = true;

  var sound = new Audio("./mp3/tada.mp3");
    sound.play();
}

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);

// toevoegen aan favorieten
// Bron: codepen animaties - oefening 3 shopping cart
var favButton = document.querySelectorAll("button#favorieten");

for (let i = 0; i < favButton.length; i++) {
  favButton[i].addEventListener("click", favorietMaken);
}

function favorietMaken() {
  if (animationPaused) {
    let favAmount = document.querySelector("#like span");
    let currentAmount = favAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    favAmount.innerHTML = newAmount;
    
    favAmount.classList.add("updated");
    
    setTimeout(function(){
    favAmount.classList.remove("updated");
    }, 400);  
  
    var sound = new Audio("./mp3/ding.mp3");
      sound.play();
  }
}
