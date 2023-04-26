//PUT (edit) a director - http://localhost:5000/directors/:slug/edit
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DirectorForm from "../../../components/DirectorForm/DirectorForm";

const EditDirector = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [director, setDirector] = useState(null);

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

  const handleEditDirector = async (data) => {
    try {
      await axios.put(`http://localhost:5000/directors/${slug}/edit`, data);
      navigate(`/directors/${slug}`);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h1 className="universal-heading">Edit Director</h1>
      <DirectorForm director={director} onSubmit={handleEditDirector} onCancel={() => navigate(`/directors/${slug}`)} />
    </div>
  );
};

export default EditDirector;
