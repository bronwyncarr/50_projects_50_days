const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");

// gets user from url.
// If no username calls error card that just notifies there is no user.
// If user does exist calls createUserCard function that inserts html. Also gets repos.
async function getUser(username) {
  try {
    // destructure data from response
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

// Async to get data
async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

// If data returned
function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
  <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
  </div>
  <div class="user-info">
  <h2>${user.name}</h2>
  <p>${user.bio}</p>
  <ul>
  <li>${user.followers} <strong>Followers</strong></li>
  <li>${user.following} <strong>Following</strong></li>
  <li>${user.public_repos} <strong>Repos</strong></li>
  </ul>
  <div id="repos"></div>
  </div>
  </div>
  `;
  main.innerHTML = cardHTML;
}

// If error returned
function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = cardHTML;
}

// If data returned part 2
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  // only 5 repos needed.
  repos.slice(0, 5).forEach((repo) => {
    
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    
    reposEl.appendChild(repoEl);
  });
}

// Event listener to form.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.getElementById("search");
  const user = search.value;
  
  if (user) {
    getUser(user);
    search.value = "";
  }
});
