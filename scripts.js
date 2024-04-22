// scripts.js

// Asynchrone Funktion zum Abrufen von Filmdaten über die API
async function fetchMovies(searchTerm) {
    const options = {
      method: 'GET',
      url: `https://moviedatabase8.p.rapidapi.com/Search/${encodeURIComponent(searchTerm)}`,
      headers: {
        'X-RapidAPI-Key': '1d99e12f2cmsh0a2bd2117bf3c0ap1cea93jsnd64406ec5094',
        'X-RapidAPI-Host': 'moviedatabase8.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      displayMovies(response.data);
    } catch (error) {
      console.error(error);
      alert('Fehler beim Abrufen der Filmdaten.');
    }
  }
  
  // Funktion zum Anzeigen von Filmen auf der Webseite
  function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Vorhandene Inhalte löschen
  
    // Erstellen Sie HTML-Elemente für jeden Film und fügen Sie sie zum Container hinzu
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="${movie.imageUrl}" alt="${movie.title}">
        <p>${movie.summary}</p>
      `;
      moviesContainer.appendChild(movieElement);
    });
  }
  
  // Event-Listener für die Suchfunktion
  document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
      fetchMovies(searchTerm);
    } else {
      alert('Bitte geben Sie einen Suchbegriff ein.');
    }
  });
  
  // Führen Sie eine initiale Suche aus, wenn Sie möchten
  fetchMovies('Anfangssuche');  // Ersetzen Sie 'Anfangssuche' durch Ihren Standard-Suchbegriff
  