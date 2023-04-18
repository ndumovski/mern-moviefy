import React, { useState } from "react";

const DirectorForm = ({ onSubmit, onCancel }) => {
    const [name, setName] = useState("");
    const [oscars, setOscars] = useState(0);
    const [bio, setBio] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, oscars, bio });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setName("");
        setOscars(0);
        setBio("");
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
                <button type="submit" className="btn btn-outline-primary">Add</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>Cancel</button>
             </div>
            </div>
        </form>
    );
};

export default DirectorForm;


