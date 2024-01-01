import React from 'react'
import { Link} from 'react-router-dom'



function Debutant() {
    
  return (
    <>
   
   <div class="card text-white bg-dark mb-3 text-center">
  <h5 class="card-header text-center ">TITRE :Gestion de Projet Agile</h5>
  <div class="card-body text-center ">
    <h5 class="card-title text-center "> DOMAIN : Management</h5>
    <p class="card-text text-center"> DESCRIPTION : Introduction aux méthodologies agiles, principalement Scrum et Kanban.</p>
    <Link to="/inscri" class="btn btn-primary text-center">SINSCRIRE</Link>
  </div>
</div>
  
    
    </>

  )}
  
export default Debutant