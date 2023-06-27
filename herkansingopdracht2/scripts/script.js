var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var liList = document.querySelectorAll("li");
var lightImage = document.querySelector("img:last-of-type");
var favButton = document.querySelectorAll("button:first-of-type");

var animationPaused = true;

// zorgt dat de animatie start, hij staat eerst op 'pauze'
function startAnimation () {
  // voor elke li ingesteld op 'running', staat op 'pauze' in css
  liList.forEach(function (li) {
    li.style.animationPlayState = "running"; 
  });
  // zorgt ervoor dat de afbeelding niet zichtbaar is als je weer op start klikt
  lightImage.style.display = "none";
  // geeft aan dat de animatie niet gepauzeerd is
  animationPaused = false;
}

// zorgt dat de animatie stop
function stopAnimation () {
  // voor elke li ingesteld op 'pauze'
  liList.forEach(function (li) {
    li.style.animationPlayState = "paused";
  });
  // afbeelding is zichtbaar
  lightImage.style.display ="block";
  // geeft aan dat de animatie wel gepauzeerd is
  animationPaused = true;

  // speelt audio af
  var sound = new Audio("./mp3/tada.mp3");
    sound.play();
}

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);

// toevoegen aan favorieten
// code van de bron, weet niet precies hoe alles werkt, wel in de grote lijnen
for (let i = 0; i < favButton.length; i++) {
  favButton[i].addEventListener("click", favorietMaken);
}

function favorietMaken() {
  // kijkt of animationPaused waar is
  if (animationPaused) {
    let favAmount = document.querySelector("#like span");
    let currentAmount = favAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    favAmount.innerHTML = newAmount;
    
    // voegt css-class toe
    favAmount.classList.add("updated");
    
    // na 4 seconden wordt de css-class verwijderd
    setTimeout(function(){
    favAmount.classList.remove("updated");
    }, 400);  
  
    // speelt audio af
    var sound = new Audio("./mp3/ding.mp3");
      sound.play();
  }
}
