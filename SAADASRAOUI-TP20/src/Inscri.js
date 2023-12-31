import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Inscri() {
    
    const [inputData, setInputData]=useState({
        nom:'',
        email:'',
        idformation:'',
        role:'',
    })
    const navigate = useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/utilisateurs',inputData)
        .then(res => {
            alert ("utilisateur inscrie")
            
            navigate('/de')
            
        })
        
    }
  return (
    <div className='d-flex w-100 vh-100 align-items-center justify-content-center '>
        <div className='w-50 p-5 bg-secondary text-white rounded '>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="nom">Nom :</label>
                    <input type='text' id='nom' className='form-control'
                    onChange={e => setInputData({...inputData , nom:e.target.value})}/>

                </div>
                <div>
                    <label for="role"> email :</label>
                    <input type='role' id='email' className='form-control'
                    onChange={e => setInputData({...inputData , email:e.target.value})}/>
                </div>
                <div>
                    <label for="role"> id-fomation :</label>
                    <input type='role' idformation='text' className='form-control'
                    onChange={e => setInputData({...inputData , idformation:e.target.value})}/>
                </div>
                <select className='form-control my-3 border border-dark border-3 border-success bg-opacity-75 border-opacity-50 border border-dark '>
                    
                    <option className='form-control my-3 border border-dark border-3 border-success bg-opacity-75 border-opacity-50 border border-dark '
                    onChange={e => setInputData({...inputData , role:e.target.value})}>
                        PARTICIPENT
                    </option>
                    
                </select>
                <br/>
                <button className='btn btn-info'>Ajouter</button>
            </form>

        </div>

    </div>)
}
export default Inscri