//This code is for the movie form, same like the director form
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieForm = ({ movie, onSubmit, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [rating, setRating] = useState("");
    const [director, setDirector] = useState("");
    const [photo, setPhoto] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setDescription(movie.description);
            setReleaseYear(movie.releaseYear);
            setRating(movie.rating);
            setDirector(movie.director);
            setPhoto(movie.photo);
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

    const handlePhoto = (event) => {
        const photo = event.target.files[0];
        setPhoto(photo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // create a new FormData object and append the form data to it
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('releaseYear', releaseYear);
        formData.append('rating', rating);
        formData.append('director', director);
        formData.append('photo', photo);
    
        // send the form data to the server
        axios.post('http://localhost:5000/movies/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            onCancel();
            navigate(`/movies`);
        })
        .catch(error => {
            console.log(error);
        })
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
                    <label className="form-header-color" htmlFor="poster">Photo</label>
                    <input type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={handlePhoto} />
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