//This code is for the movie form, same like the director form
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieForm = ({ movie, onSubmit, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [rating, setRating] = useState("");
    const [director, setDirector] = useState("");

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setDescription(movie.description);
            setReleaseYear(movie.releaseYear);
            setRating(movie.rating);
            setDirector(movie.director);
        }

    }, [movie]);

    //Fetch directors from the database
    const [directors, setDirectors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/directors")
            .then(response => {
                setDirectors(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const handleYearChange = (event) => {
        const year = event.target.value.substring(0, 4);
        setReleaseYear(year);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, description, releaseYear, rating, director });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="title">Title</label>
                    <input required type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="description">Description</label>
                    <textarea required id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="release-year">Release Year</label>
                    <input required type="date" id="releaseYear" name="release-year" onChange={handleYearChange} />
                </div>

                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="rating">Rating</label>
                    <input required type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>

                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="director">Director</label>
                    <select id="director" name="director" value={director} onChange={(e) => setDirector(e.target.value) }>
                        <option value="">Select a director</option>
                        {directors.map(director => (
                            <option key={director._id} value={director._id}>{director.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="container">
              <div className="my-btn-row mt-4">
                <button type="submit" className="btn btn-outline-primary">{movie ? "Update" : "Add"}</button>
                <button type="button" className="btn btn-outline-danger"onClick={onCancel}>Cancel</button>
              </div>
            </div>
        </form>
    );
}

export default MovieForm;