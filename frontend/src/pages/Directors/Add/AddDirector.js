//This code adds a new director to the database, and also creates a duplicate record in the database, I need to fix this
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DirectorForm from "../../../components/DirectorForm/DirectorForm";


const AddDirector = () => {
    const navigate = useNavigate();

    const handleAddDirector = async (data) => {
        try {
            await axios.post("http://localhost:5000/directors/add", data);
            navigate(`/directors`);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
      <h1 className="universal-heading">Add Director</h1>
      <DirectorForm onSubmit={handleAddDirector} onCancel={() => navigate(`/directors`)} />
    </div>
  );
};

export default AddDirector;
