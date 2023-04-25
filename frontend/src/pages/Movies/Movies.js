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
                <h2 className="universal-heading">Movies</h2>
                <div className="row">
                {movies.map((movie) => (
                        <div className="col-sm-4 mb-3" key={movie._id}>
                            <div className="movie-container">
                                <img className="movie-poster" src={`/uploads/${movie.photo}`} alt={movie.title} />
                                <div className="movie-overlay">
                                    <i className="fa fa-star rating-star"></i>
                                    <div className="movie-rating">{movie.rating} / 10 </div>
                                    <Link to={`/movies/${movie.slug}`} className="movie-details-btn">View Details </Link>
                                </div>   
                            </div>
                        </div>
                     ))}
                </div>
            </div>
    );
    }
export default Movies;