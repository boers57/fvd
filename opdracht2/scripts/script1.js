var jokeContainer = document.querySelector("p");
var btn = document.querySelector("button");
var image = document.getElementById("lights");

var content = document.getElementById('content');
var favorieten = document.getElementById('favorieten');


var url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


// functie wordt uitgevoerd wanneer er op de knop wordt geklikt om een nieuwe mop op te halen.
function getJoke() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // de tekst van de p veranderen in de API tekst
      jokeContainer.textContent = `${item.joke}`; 
      btn.textContent = "New Joke";
    });
  }

btn.addEventListener("click", function() {
  // voert de functie uit
  getJoke();

  // toont de afbeelding
  image.style.display = "block";

});


//favorietenlijstje
new Sortable(favorieten, {
  group: {
      name: 'shared',
  },
  animation: 150
});

//contentlijstje
new Sortable(content, {
  group: {
      name: 'shared',
      put: false
  },
  animation: 150
});