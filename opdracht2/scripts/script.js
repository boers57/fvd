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
  
  // zorgt ervoor dat een mop niet meerdere keren kan worden toegevoegd aan het favorietenlijstje
  if (!isInFavorites(jokeText)) {
    // als de mop niet in het lijstje staat wordt de p toegevoegd aan het lijstje
    favoritesContainer.appendChild(p);
    // als de mop niet in het lijstje staat wordt de moptekst toegevoegd 'favoriteJokes' Array, hierdoor wordt bijgehouden welke moppen zich in het lijstje bevinden.
    favoriteJokes.push(jokeText);
  }

  // Speel het geluid af wanneer een mop wordt toegevoegd aan favorieten
  var sound = new Audio("mp3/geluid.mp3");
  sound.play();
}

// wordt uitgevoerd wanneer er op een mop in favorietenlijstje wordt geklikt.
function removeFromFavorites(event) {
  // slaat de tekst op van het element waar op is geklikt, dus als er geklikt wordt slaat de tekst op in jokeText.
  var jokeText = event.target.textContent;
  // met index0f wordt gecontroleerd of de tekst in de array aanwezig is. Als die gevonden wordt dan geeft de 'index0f' de index terug anders als die niet gevonden wordt geeft die -1.
  var index = favoriteJokes.indexOf(jokeText);
  // als de moptekst al aanwezig is in de favoriteJokes array, voor de if uit. !== niet gelijk.
  if (index !== -1) {
    // verwijdert de moptekst uit de favoriteJokes array door de splice. Splice verwijdert of voegt nieuwe elementen toe.
    favoriteJokes.splice(index, 1);
    // wordt css class op gezet voor de animatie
    event.target.classList.add("fadeOut");
    
    // stelt een timer in, na 1 seconden wordt de functie uitgevoerd
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