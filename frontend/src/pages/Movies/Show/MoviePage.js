//GET a single movie - localhost:5000/movies/:slug
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

    //Get the image url
    const imageUrl = movie ? `/uploads/${movie.photo}` : null;
    // console.log(imageUrl);

    //Update movie
    const handleUpdate = () => {
        navigate(`/movies/${movie.slug}/edit`);
    };

    //Delete movie
    const handleDelete = async () => {
        try{
            await axios.delete(`http://localhost:5000/movies/${movie.slug}`);
            navigate('/movies');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {movie ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="movie-cover border border-5 rounded" src={imageUrl} alt={movie.title} />
                            </div>
                            <div className="col-md-6">
                                <h1 className="universal-heading text-start">{movie.title}</h1>
                                    <button className="btn btn-info m-2" onClick={handleUpdate}>Edit</button>
                                    <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
                                    <hr className="text-moviefy" />
                                    <div className="col-md-12 movie-details">
                                        <p className="text-moviefy">Released in {releasedYear} by {movie.director.name} </p>
                                        <p className="text-moviefy">{movie.description}</p>
                                    </div>
                                    <div className="col-md-12 movie-details">
                                        <p className="text-moviefy">Rating by IMDb is {movie.rating} </p>
                                    </div>
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