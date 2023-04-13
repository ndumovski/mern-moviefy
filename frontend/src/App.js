import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Moviefy</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.title} ({movie.releaseYear}) - ({movie.rating}) - directed by {movie.director.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
