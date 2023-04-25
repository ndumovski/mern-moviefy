import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const MoviePage = () => {
    const {slug } = useParams();
    const [movie, setMovie] = useState(null);
    // const navigate = useNavigate();

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

    return (
        <div>
            {movie ? (
                <div>
                    <h1 className="universal-heading">{movie.title}</h1>
                    <div className="text-center m-3">
                        <p>{releasedYear}</p>
                        <p>{movie.director.name}</p>
                    </div>
                </div>
            ) : (
                <h2 className="text-danger text-center ">Movie not found!</h2>
            )}
        </div>
    );
}

export default MoviePage;