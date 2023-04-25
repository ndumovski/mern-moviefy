import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieForm from "../../../components/MovieForm/MovieForm";

const AddMovie = () => {
    const navigate = useNavigate();

    const handleAddMovie = async (data) => {
        try {
            await axios.post("http://localhost:5000/movies/add", data);
            navigate(`/movies`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="universal-heading">Add Movie</h1>
            <MovieForm onSubmit={handleAddMovie} onCancel={() => navigate(`/movies`)} />
        </div>
    );
};

export default AddMovie;