import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Directors(){
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/directors')
            .then(res => {
                setDirectors(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="container">
            <div className="director-row row">
            <h2 className="universal-heading">Directors</h2>
            {directors.map(director => (
                <div className="col-md-4" key={director._id}>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">
                            <Link to={`/directors/${director.slug}`}>{director.name}</Link>  
                            </h5>
                            <p className="card-text">Oscars: {director.oscars}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Directors;