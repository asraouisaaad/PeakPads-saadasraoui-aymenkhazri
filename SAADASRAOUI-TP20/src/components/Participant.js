

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Participant = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/formations")
      .then((res) => {
        setFormations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = (id) => {
    setFormations(formations.map(formation => {
      if (formation.id === id) {
        return { ...formation, clicked: !formation.clicked };
      }
      return formation;
    }));
  };

  return (
    <div className="row">
      {formations.map((formation) => (
        <div key={formation.id} className="col-md-4 mb-4 col-12 text-center border rounded border-dark border-3 border-opacity-50">
          <Card>
            <Card.Body>
              <Card.Title>{formation.titre}</Card.Title>
              <Card.Text>
                <p>Domaine: {formation.domaine}</p>
                <p>Niveau: {formation.niveau}</p>
                <p>Description: {formation.description}</p>
              </Card.Text>
              <Button
              className='w-100 mt-3 mb-2 btn btn-lg btn-block btn-primary text-white text-decoration-none rounded border border-dark border-3 border-opacity-50 bg-opacity-75 border-opacity-50'
                variant={formation.clicked ? 'danger' : 'primary'}
                onClick={() => handleButtonClick(formation.id)}
              >
                {formation.clicked ? 'Quitter' : 'Inscription'}
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Participant;