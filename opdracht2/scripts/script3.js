var jokeContainer = document.querySelector("p");
var btn = document.querySelector("button:last-of-type");
var image = document.getElementById("lights");


var url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


// functie om een nieuwe mop op te halen
function getJoke() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // de tekst van de p veranderen in de API tekst
      jokeContainer.textContent = `${item.joke}`; 
      btn.textContent = "New Joke";
    });
  }

// zorgt ervoor dat dit wordt uitgeveord wanneer er op de button van 'spin' wordt geklikt
btn.addEventListener("click", function() {
  // voert de functie uit
  getJoke();

  // toont de afbeelding
  image.style.display = "block";

});


// Bron: codepen animaties - oefening 3 shopping cart
var favButton = document.querySelectorAll("button#favorieten");

for (let i = 0; i < favButton.length; i++) {
  favButton[i].addEventListener("click", favorietMaken);
}

function favorietMaken() {  
  let favAmount = document.querySelector("#like span");
  let currentAmount = favAmount.innerHTML;
  currentAmount = parseInt(currentAmount);
  let newAmount = currentAmount + 1;
  favAmount.innerHTML = newAmount;
  
  favAmount.classList.add("updated");
  
  setTimeout(function(){
  favAmount.classList.remove("updated");
  }, 400);  
}