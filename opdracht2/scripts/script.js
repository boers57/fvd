var jokeContainer = document.getElementById("joke");
var btn = document.getElementById("btn");
var favoritesContainer = document.getElementById("favorites");
var url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke() {
  // hier wordt de css-class "kleur" toegevoegd aan het jokeContainer-element, veranderd de achtegrond kleur van de mop
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
      jokeContainer.addEventListener ("dragstart", dragStart);
    });
}

// geeft aan dat het een "drop" gebeurtenis kan accepteren. 
function allowDrop(event) {
  // voorkomt dat de standaardactie voor het slepen en neerzetten wordt uitgevoerd. Anders probeert de browser dit element op een andere manier te verwerken, zoals openen als link.
  event.preventDefault();
}

// functie wordt uitgevoerd wanneer het jokeContainer-element wordt gesleept. Zorgt ervoor dat de tekst zichtbaar is wanneer de mop daar komt
function dragStart(event) {
  // de gegevens van de mop wordt toegevoegd door "text/plain" en de inhoud van de mop komt via "jokeContainer.textContent"
  event.dataTransfer.setData("text/plain", jokeContainer.textContent);
}

// functie wordt uitgevoerd wanneer de mop wordt neergelaten op favoritesContainer-element. Het doel is om de mop toe te voegen aan het element. De twee variabelen moeten in de functie omdat ze specifiek zijn voor elke "drop", gegevens van die specifieke mop worden zo vast gehouden. Anders als het erbuiten staat, dan worden de laatst opgeslagen gegevens gebruikt
function drop(event) {
  // wordt gebrukt om de standaardactie te voorkomen en zelf de controle te geven over wat er gebeurd
  event.preventDefault();
  // mop wordt hier opgehaald, getData("text/plain") wordt gebruikt om de gegevens op te halen van de funcite dragStart
  var jokeText = event.dataTransfer.getData("text/plain");
  // element gemaakt om de moptekst te laten zien
  var p = document.createElement("p");
  // de moptekst wordt ingesteld. zorgt ervoor dat de p veranderd in de gegevens die worden opgehaald bij joketext
  p.textContent = jokeText;
  p.classList.add("kleur");
  // 'p' wordt toegevoegd aan favoritesContainer. Met 'appendChild' word het element toegevoegd als nieuw 'child' aan het favoritesContainer-element. Hierdoor wordt het p-element zichtbaar, deze bevat de moptekst.
  favoritesContainer.appendChild(p);
}

btn.addEventListener("click", getJoke);