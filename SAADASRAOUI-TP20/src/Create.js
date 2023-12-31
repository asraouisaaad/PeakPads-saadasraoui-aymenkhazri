import React, { useState, useEffect } from "react";
// import styles1 from "../components/create.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/utilisateurs").then((res) => setUsers(res.data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === '' || name === null || role === '' || role === null || role === 'select') {
      alert("Veuillez sélectionner votre nom et votre rôle");
    } else {
      const loggedInUser = users.find((user) => user.nom === name && user.role === role);
      if (loggedInUser) {
        if (loggedInUser.role === 'Participant') {
          navigate('/participant');
        } else if (loggedInUser.role === 'Formateur') {
          navigate('/formateur');
        } else {
          alert("Aucun utilisateur correspondant trouvé.");
        }
      } else {
        alert("Aucun utilisateur correspondant trouvé.");
      }
    }
  };

  return (
    <div className="d-flex w-100 vh-100 align-items-center justify-content-center ">
      <form className="w-50 p-5 bg-danger text-white rounded btn bg-opacity-75 btn btn-dark" onSubmit={handleLogin}>
        <p className="text-center text-white bg-primary rounded p-2 ">Ofppt Inscription</p>
        <div className=" form-group mt-3">
          <label htmlFor="nameInput">Nom :</label>
          <input type="text" placeholder="Enter Your FullName" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mt-3 ">
          <label htmlFor="roleSelect">Rôle :</label>
          <select id="roleSelect" name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="select">Sélectionnez</option>
            <option value="Participant">Participant</option>
            <option value="Formateur">Formateur</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4 ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Create;