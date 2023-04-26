//POST new director to the database - http://localhost:5000/directors/add
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
