// Movie array
const movies = [
  { name: 'Batman', genre: 'Action', price: 4.55, stock: 5 },
  { name: 'Superman', genre: 'Action', price: 4.55, stock: 3 },
  { name: 'Wonder Woman', genre: 'Action', price: 4.55, stock: 0 },
  { name: 'Spiderman', genre: 'Action', price: 4.55, stock: 2 },
  { name: 'Iron Man', genre: 'Action', price: 4.55, stock: 4 },
  { name: 'Captain America', genre: 'Action', price: 4.55, stock: 1 },
  { name: 'Thor', genre: 'Action', price: 4.55, stock: 6 },
  { name: 'Hulk', genre: 'Action', price: 4.55, stock: 7 }
];

// Array to hold rented movies
let yourMovies = [];

// Function to generate movie list
function generateMovieList() {
  const movieListContainer = document.getElementById('movie-list');
  
  // Clear existing movie rows
  const existingRows = movieListContainer.querySelectorAll('.movie-row');
  existingRows.forEach(row => row.remove());

  // Generate movie rows
  movies.forEach((movie, index) => {
    const movieRow = document.createElement('div');
    movieRow.classList.add('movie-row');

    movieRow.innerHTML = `
      <div class="content-col">${movie.name}</div>
      <div class="content-col">${movie.genre}</div>
      <div class="content-col">${movie.price}$</div>
      <div class="content-col">
        <img src="images/${movie.stock > 0 ? 'Check.png' : 'Cross.png'}" alt="${movie.stock > 0 ? 'Check' : 'Cross'} Icon">
      </div>
      <div class="content-col">
        ${movie.stock > 0 ? `<button class="rent-button" onclick="rentMovie(${index})">Rent</button>` : ''}
      </div>
    `;
    
    movieListContainer.appendChild(movieRow);
  });
}

// Function to handle renting a movie
function rentMovie(index) {
  if (movies[index].stock > 0) {
    // Add movie to yourMovies array
    yourMovies.push(movies[index]);

    // Decrease the stock count
    movies[index].stock--;

    // Regenerate the movie list to reflect changes
    generateMovieList();
  }
}

// Generate the initial movie list
generateMovieList();
