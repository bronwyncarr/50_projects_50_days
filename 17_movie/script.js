// 'APi endpoint' + '=apikey' + '&page=1'
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e201a6a56670b97f3a5f97c76b8c85e2&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=e201a6a56670b97f3a5f97c76b8c85e2&query="';
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// Clears results of previous search first
// Loop over movies data that was fetched and passed in.
// Destructure title, poster_path(img), vote_average(rating) and overview
// Create element with class of movie and the inner HTML then append to main.
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");

    movieCard.innerHTML = `
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `;
    main.appendChild(movieCard);
  });
}

function getClassByRating(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// Event listener on button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
