var jokeContainer = document.getElementById("joke");
var btn = document.getElementById("btn");
var url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke() {
  jokeContainer.classList.add("kleur");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // de tekst van de p veranderen in de API tekst
      jokeContainer.textContent = `${item.joke}`; 
      btn.textContent = "New Joke";
    });
}

btn.addEventListener("click", getJoke);