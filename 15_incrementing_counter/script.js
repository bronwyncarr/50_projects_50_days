// Adds event listener to submit button on form and passes value to fetchData function to fetch.
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  countryName = document.getElementById("input").value;
  fetchData(countryName)
    .then((country) => countNumbers(country))
    .catch((err) => alert(`Error occured: ${err}`));
});

// FetchData async function gets json data from API. 
async function fetchData(searchItem) {
  const data = await fetch(
    `https://restcountries.eu/rest/v2/name/${searchItem}`); // returns a promise
  const [country] = await data.json();
  return country;
}

// Count numbers function takes country object. It loops over every item in facts, the desired info from country object.
// The number is set to the target and the increment is set to a /200 fraction of it. 
// The inner text starts at 0, while it is less then the target it adds the increment on then calls itself again.
// Contiues to add the increment and call itself every 1ms so it appears on screen like it's counting up.
// once it will no longer be less than the tartget, the target is set. 
function countNumbers(country) {
  const counters = document.querySelectorAll(".counter");
  const facts = [country["population"], country["area"]];

  for (let i = 0; i < facts.length; i++) {
      value = facts[i];
      counters[i].innerText = "0";

      const updateCounter = (value) => {
        console.log(value);
        const target = value;
        const c = +counters[i].innerText;
        const increment = target / 200;
        if (c < target) {
          counters[i].innerText = `${Math.ceil(c + increment)}`;
          setTimeout(function () {
            updateCounter(value);
          }, 1);
        } else {
          counters[i].innerText = target;
        }
      };
      updateCounter(value);
  }
}
