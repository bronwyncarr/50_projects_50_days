// Async Function that sends a fetch request for json (accept in header.)
// Event listener on button, will clear prev joke, scale in by adding class waiting while fetch request.
// Then remove waiting to scale out and display joke.
// Catch for error handling
async function generateJoke() {
  const jokeEl = document.getElementById("joke");
  const container = document.querySelector(".container");

  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  container.classList.add("waiting");
  jokeEl.innerHTML = "";
  try {
    const data = await fetch("https://icanhazdadjoke.com/", config);
    const jokeData = await data.json();
    container.classList.remove("waiting");
    jokeEl.innerHTML = jokeData.joke;
  } catch (e) {
    alert(`An error occured: ${e}`);
  }
}

// Initial Load
generateJoke();

// Btn click event listener
document.getElementById("jokeBtn").addEventListener("click", generateJoke);
