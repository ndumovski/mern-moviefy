import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


import DirectorForm from "../../../components/DirectorForm/DirectorForm";

const EditDirector = () => {
    const { slug } = useParams();
    const [director, setDirector] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDirector = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/directors/${slug}`);
                setDirector(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDirector();
    }, [slug]);

    const handleUpdate = async (director) => {
        try {
            await axios.put(`http://localhost:5000/directors/${slug}`, director);
            navigate(`/directors/${director.slug}`);
        } catch (error) {
            console.log(error);
        }
    };
    const handleCancel = () => {
        navigate(`/directors/${director.slug}`);
    };

    return (
        <div>
            {director ? (
                <div>
                    <h1 className="universal-heading">Edit {director.name}</h1>
                    <DirectorForm  director={director} onSubmit={handleUpdate} onCancel={handleCancel} />
                </div>
            ) : (
                <h2 className="text-danger text-center ">Director not found!</h2>
            )}
        </div>
    );
}

export default EditDirector;