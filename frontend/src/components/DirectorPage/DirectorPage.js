import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

    const DirectorPage = () => {
        const {slug } = useParams();
        const [director, setDirector] = useState(null);

        useEffect(() => {
            const fetchDirector = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/directors/${slug}`);
                    const data = await response.json();
                    setDirector(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchDirector();
        }, [slug]);

        return (
            <div>
                {director ? (
                    <div>
                        <h1 className="universal-heading">{director.name}</h1>
                        <p className="universal-paragraph">{director.bio}</p>
                    </div>
                ) : (
                    <h2 className="text-danger text-center ">Director not found!</h2>
                )}
            </div>
        );
    };

export default DirectorPage;