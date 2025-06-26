const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");

function loadMovies(genre = "All") {
  grid.innerHTML = "";
  let filtered = genre === "All" ? movies : movies.filter(m => m.genre === genre);

  const searchTerm = search.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(m => m.title.toLowerCase().includes(searchTerm));
  }

  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <small>${movie.duration} | ${movie.genre}</small>
        <a href="watch.html?videoId=${movie.videoId}">▶️ Watch Now</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterGenre(genre) {
  loadMovies(genre);
}

search.addEventListener("input", () => loadMovies());
loadMovies();
