import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const MoviePage = () => {
    const {slug } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/movies/${slug}`);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, [slug]);

    //Get the year from the release date and convert it to a YYYY format
    const releasedYear = movie ? moment(movie.releaseYear).format("YYYY") : null;

    const handleUpdate = () => {
        navigate(`/movies/${movie.slug}/edit`);
    };

    return (
        <div>
            {movie ? (
                <div>
                    <h1 className="universal-heading">{movie.title}</h1>
                    <div className="text-center m-3">
                            <button className="btn btn-info m-2" onClick={handleUpdate}>Edit</button>
                            <button className="btn btn-danger m-2">Delete</button>
                        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <img src="" alt={movie.title} />
                            </div>
                            <div className="col-md-6 col-xs-6 movie-details ">
                                <h3 className="">Released: {releasedYear}</h3>
                                <h3>Director: {movie.director.name}</h3>
                                <h3>Rating: {movie.rating}</h3>
                            </div>
                            <div className="col-md-12">
                                <p className="universal-paragraph">
                                    {movie.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-danger text-center ">Movie not found!</h2>
            )}
        </div>
    );
}

export default MoviePage;