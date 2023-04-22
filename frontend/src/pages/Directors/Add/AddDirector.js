import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DirectorForm from "../../../components/DirectorForm/DirectorForm";

const AddDirector = () => {
    const navigate = useNavigate();

    const handleAddDirector = async (director) => {
        try {
            const response = await axios.post("http://localhost:5000/directors/add", director);
            navigate(`/directors/${response.data.slug}`);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleCancel = () => {
        navigate("/directors");
    };


    return (
        <div>
            <h1 className="universal-heading">Add Director</h1>
            <DirectorForm onSubmit={handleAddDirector} onCancel={handleCancel} />
        </div>
    );
};
   

export default AddDirector;