import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/movies").then((res) => {
            setMovies(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);




    return (
        <div className="container">
            <div className="movie-row row">
                <h2 className="universal-heading">Movies</h2>
                {movies.map((movie) => (
                    <div className="col-md-4" key={movie._id}>
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/movies/${movie.slug}`}>{movie.title}</Link>
                                </h5>
                                <p className="card-text">{movie.director.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    }
export default Movies;