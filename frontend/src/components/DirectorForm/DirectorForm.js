import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DirectorForm = ({ director, onSubmit, onCancel }) => {
    const [name, setName] = useState(director ? director.name : "");
    const [oscars, setOscars] = useState(director ? director.oscars : 0);
    const [bio, setBio] = useState(director ? director.bio : "");
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = { name, oscars, bio };
        try{
            if(director){
                axios.put(`http://localhost:5000/directors/${director.slug}/edit`, data);
                onSubmit(data);
            } else {
                axios.post("http://localhost:5000/directors/add", data);
                onSubmit(data);
            }
            navigate(`/directors`);
        } catch (error) {
            console.log(error);
        }

        }
    const handleCancel = (e) => {
        navigate(`/directors/${director.slug}`);
    };


    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="name">Name</label>
                    <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                 </div>

                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="oscars">Oscars</label>
                    <input required type="number" id="oscars" value={oscars} onChange={(e) => setOscars(e.target.value)}/>
                </div>
                <div className="col-md-12 my-form-item">
                    <label className="form-header-color" htmlFor="bio">Bio</label>
                    <textarea required id="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
                </div>
            </div>

            <div className="container">
             <div className="my-btn-row mt-4">
                <button type="submit" className="btn btn-outline-primary">{director ? "Update" : "Add"}</button>
               {onCancel && <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>Cancel</button> }
             </div>
            </div>
        </form>
    );
};

export default DirectorForm;


