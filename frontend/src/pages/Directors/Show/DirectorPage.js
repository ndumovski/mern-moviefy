//GET a single director - localhost:5000/directors/:slug
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

    const DirectorPage = () => {
        const {slug } = useParams();
        const [director, setDirector] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            const fetchDirector = async () => {
                try {
                    const { data } = await axios.get(`http://localhost:5000/directors/${slug}`);
                    setDirector(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchDirector();
        }, [slug]);

        const handleUpdate = () => {
            navigate(`/directors/${director.slug}/edit`);
        };

        const handleDelete = async () => {
          try{
            await axios.delete(`http://localhost:5000/directors/${director.slug}`);
            navigate('/directors');
            } catch (error) {
                console.log(error);
          }
        };


        return (
            <div>
                {director ? (
                    <div>
                        <h1 className="universal-heading">{director.name}</h1>
                        <div className="text-center m-3">
                            <button className="btn btn-info m-2" onClick={handleUpdate} >Edit</button>
                            <button className="btn btn-danger m-2" onClick={handleDelete} >Delete</button>
                        </div>
                        <p className="universal-paragraph">{director.bio}</p>
                    </div>
                ) : (
                    <h2 className="text-danger text-center ">Director not found!</h2>
                )}
            </div>
        );
    };

export default DirectorPage;