import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieList, DirectorList } from '../../components/List';

function Home() {
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:5000/directors')
      .then((response) => {
        setDirectors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <MovieList movies={movies} />
      <DirectorList directors={directors} />
    </div>
  );
}

export default Home;
