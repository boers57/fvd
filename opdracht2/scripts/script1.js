var jokeContainer = document.getElementById("joke");
var favoritesContainer = document.getElementById("favorites");
var favoriteJokes = []; // Array om favoriete moppen bij te houden
var btn = document.getElementById("btn");
var url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



// functie wordt uitgevoerd wanneer er op de knop wordt geklikt om een nieuwe mop op te halen.
function getJoke() {
  jokeContainer.classList.add("kleur");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // de tekst van de p veranderen in de API tekst
      jokeContainer.textContent = `${item.joke}`; 
      btn.textContent = "New Joke";
      // "draggable" wordt toegevoegd aan het jokeContainer-element en maakt het sleepbaar
      jokeContainer.setAttribute("draggable", "true");
      // wanneer het element wordt gesleept wordt de functie "dragstart" uitgevoerd
      jokeContainer.addEventListener("dragstart", dragStart);
        
    });
}

// controleert of de mop in het het favorietenlijstje staat 
function isInFavorites(jokeText) {
  return favoriteJokes.includes(jokeText);
}

// geeft aan dat het een "drop" gebeurtenis kan accepteren. 
function allowDrop(event) {
  // voorkomt standaard sleepactie
  event.preventDefault();
}

// wordt uitgevoerd wanneer de mop wordt gesleept
function dragStart(event) {
  // de gegevens van de mop worden toegevoegd
  event.dataTransfer.setData("text/plain", jokeContainer.textContent);
  }

// wordt uitgevoerd wanneer de mop wordt neergelaten op het favorietenlijstje
function drop(event) {
  event.preventDefault();
  // mop wordt hier opgehaald
  var jokeText = event.dataTransfer.getData("text/plain");
  // element gemaakt om de moptekst te laten zien
  var p = document.createElement("p");
  // zorgt ervoor dat de "p" veranderd in de tekst van jokeText
  p.textContent = jokeText;
  p.classList.add("kleur");
  
  if (!isInFavorites(jokeText)) {
    favoritesContainer.appendChild(p);
    favoriteJokes.push(jokeText);
  }

  // Speel het geluid af wanneer een mop wordt toegevoegd aan favorieten
  var sound = new Audio("../mp3/ping.aiff");
  sound.play();
}

// wordt uitgevoerd wanneer er op een mop in favorietenlijstje wordt geklikt.
function removeFromFavorites(event) {
  var jokeText = event.target.textContent;
  var index = favoriteJokes.indexOf(jokeText);
  if (index !== -1) {
    favoriteJokes.splice(index, 1);
    event.target.classList.add("fadeOut");
    setTimeout(() => {
      event.target.remove();
    }, 1000);
  }
}
  
btn.addEventListener("click", getJoke);
favoritesContainer.addEventListener("click", removeFromFavorites);


////////////////////////////////////////
/////DIT STUK GAAT OVER toetsenbord
////////////////////////////////////////
// het event wordt geactiveerd wanneer een toets wordt ingedrukt
document.addEventListener("keydown", function(event) {
  // vergelijkt de waar met het getal en het teken, als dit waar is dan wordt de 'getJoke' functie aangeroepen.
  if (event.key === 32 || event.key === " ") {
    getJoke();
  }
});