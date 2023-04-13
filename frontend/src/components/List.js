import React from 'react';
import { Table } from 'react-bootstrap';

function MovieList({ movies }) {
  return (
    <>
      <h2>Movies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release Year</th>
            <th>Rating</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.description}</td>
              <td>{movie.releaseYear}</td>
              <td>{movie.rating}</td>
              <td>{movie.director.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

function DirectorList({ directors }) {
  return (
    <>
      <h2>Directors</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Oscars</th>
            <th>Movies</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr key={director._id}>
              <td>{director.name}</td>
              <td>{director.oscars}</td>
              <td>
                <ul>
                  {director.movies?.map((movie) => (
                    <li key={movie._id}>{movie.title}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export { MovieList, DirectorList };