// Array to hold rented movies (this should be populated from home.js in a real-world application)
const yourMovies = JSON.parse(localStorage.getItem('yourMovies')) || [];

// Function to generate rented movie list
function generateRentedMovieList() {
  const rentedMovieListContainer = document.getElementById('rented-movie-list');
  
  // Clear existing movie rows
  const existingRows = rentedMovieListContainer.querySelectorAll('.movie-row');
  existingRows.forEach(row => row.remove());

  // Generate movie rows
  yourMovies.forEach((movie, index) => {
    const movieRow = document.createElement('div');
    movieRow.classList.add('movie-row');

    movieRow.innerHTML = `
      <div class="content-col">${movie.name}</div>
      <div class="content-col">${movie.genre}</div>
      <div class="content-col">
        <div class="content-col2">
          <div class="content-col3" onclick="updateRentTime(${index}, -12)">&lt;</div>
          <span class="content-time">${movie.rentTime}h</span>
          <div class="content-col4" onclick="updateRentTime(${index}, 12)">&gt;</div>
        </div>
      </div>
      <div class="content-col">${(movie.price * (movie.rentTime / 12)).toFixed(2)}$</div>
      <div class="content-col"><button class="remove-button" onclick="removeMovie(${index})">Remove</button></div>
    `;
    
    rentedMovieListContainer.appendChild(movieRow);
  });
}

// Function to update rent time
function updateRentTime(index, increment) {
  const minRentTime = 12;
  const maxRentTime = 168;
  const newRentTime = yourMovies[index].rentTime + increment;

  if (newRentTime >= minRentTime && newRentTime <= maxRentTime) {
    yourMovies[index].rentTime = newRentTime;
    saveToLocalStorage();
    generateRentedMovieList();
  }
}

// Function to remove a movie from the rented list
function removeMovie(index) {
  const movie = yourMovies.splice(index, 1)[0];
  const homeMovies = JSON.parse(localStorage.getItem('movies'));

  // Find the corresponding movie in homeMovies and increase the stock
  const movieIndex = homeMovies.findIndex(m => m.name === movie.name);
  if (movieIndex !== -1) {
    homeMovies[movieIndex].stock++;
  }

  // Update local storage
  localStorage.setItem('movies', JSON.stringify(homeMovies));
  saveToLocalStorage();
  generateRentedMovieList();
}

// Function to save yourMovies array to localStorage
function saveToLocalStorage() {
  localStorage.setItem('yourMovies', JSON.stringify(yourMovies));
}

// Generate the initial rented movie list
generateRentedMovieList();
