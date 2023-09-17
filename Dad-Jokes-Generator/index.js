let jokes = [
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
