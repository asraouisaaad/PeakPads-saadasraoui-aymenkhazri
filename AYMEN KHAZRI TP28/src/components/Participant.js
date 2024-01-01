// import  styles from '../components/participant.module.css'
import { Link } from "react-router-dom";
import React from 'react';

export const Participant = () => {
  return (
    <>
<div>
      <h1>Choisissez un niveau :</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap ">
        <Link to="/in" style={{ textDecoration: 'none'}}>
          <button className='btn btn-primary btn-lg w-100 mb-3 '>Intermédiaire</button>
        </Link>
        <Link to ="/de">
          <button className='btn btn-primary btn-lg w-100 mb-3 '>Débutant</button>
        </Link>
        
       
      </div>
    </div>
</>
  );
};
export default Participant;