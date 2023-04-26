//PUT (edit) a movie - http://localhost:5000/movies/:slug/edit
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MovieForm from "../../../components/MovieForm/MovieForm";

const EditMovie = () => {
    const { slug } = useParams();
    const navigate = useNavigate();


    const [movie, setMovie] = useState(null);

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

    const handleEditMovie = async (data) => {
        try {
            await axios.put(`http://localhost:5000/movies/${slug}/edit`, data);
            navigate(`/movies/${slug}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
          <h1 className="universal-heading">Edit Movie</h1>
          <MovieForm movie={movie} onSubmit={handleEditMovie} onCancel={() => navigate(`/movies/${slug}`)} />
        </div>
      );  
};

export default EditMovie;