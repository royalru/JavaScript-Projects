/*let jokes = [
  "hello jokes 1",
  "hello jokes 2",
  "hello jokes 3",
  "hello jokes 4",
];
let selected = "";

function handleChangeJoke() {
  let jokeContainer = document.getElementById("joke");
  let button = document.getElementById("btn");

  let randIdx = Math.floor(Math.random() * jokes.length);
  jokeContainer.innerHTML = jokes[randIdx];
}
*/
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "IUxOjRegOeSlyobOEEQw7g==JwJ9lpD2XOe3BnAp";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error Happened, Try again later.";
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
