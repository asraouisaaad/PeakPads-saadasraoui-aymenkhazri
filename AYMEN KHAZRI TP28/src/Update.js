import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    nom: '',
    email: '',
    role: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/utilisateurs/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/utilisateurs/${id}`, inputData)
      .then((res) => {
        alert('Utilisateur modifié');
        navigate('/create');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 align-items-center justify-content-center'>
      <div className='w-50 p-5 bg-secondary text-white rounded '>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='id'>ID :</label>
            <input
              type='text'
              id='id'
              className='form-control'
              value={inputData.id}
            />
          </div>
          <div>
            <label htmlFor='nom'>Nom :</label>
            <input
              type='text'
              id='nom'
              className='form-control'
              value={inputData.nom}
              onChange={(e) =>
                setInputData({ ...inputData, nom: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor='email'>role :</label>
            <input
              type='email'
              id='email'
              className='form-control'
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
