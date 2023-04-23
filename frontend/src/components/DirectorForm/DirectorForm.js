//This code adds a new director to the database and edits a existing director, and also creates a duplicate record in the database, I need to fix this
import React, { useState, useEffect } from "react";

const DirectorForm = ({ director, onSubmit, onCancel }) => {
    const [name, setName] = useState("");
    const [oscars, setOscars] = useState(0);
    const [bio, setBio] = useState("");
  
    useEffect(() => {
      if (director) {
        setName(director.name);
        setOscars(director.oscars);
        setBio(director.bio);
      }
    }, [director]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, oscars, bio });
    };
    
  return (
    <form onSubmit={handleSubmit}>
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
          <button type="button" className="btn btn-outline-danger"onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default DirectorForm;
