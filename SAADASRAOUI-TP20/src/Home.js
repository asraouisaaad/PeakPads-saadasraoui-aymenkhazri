// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { Link , useNavigate} from 'react-router-dom'

// function Home() {
//     const [utilisateurs, setUtilisateurs] = useState([])
//     const navigate = useNavigate()
//     useEffect(() => {
//        axios.get('http://localhost:3000/utilisateurs')
//        .then(res=> setUtilisateurs(res.data))
//        .catch(err => console.log(err))
//     },[])
//   return (
//     <div className='container '>
//         <h2>Liste des utilisateurs</h2>
        
//             <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        
//         <table className="table border shadow bg-light rounded border-dark border-3 border-success bg-opacity-75 border-opacity-50 border border-dark ">

//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>NOM</th>
//                     <th>ROLE</th>
//                     <th>ID-FORMATION</th>
//                     <th>ACTIONS</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 { utilisateurs && utilisateurs.map(utilisateur => (
//                     <tr key={utilisateur.id}>
//                         <td>{utilisateur.id}</td>
//                         <td>{utilisateur.nom}</td>
//                         <td>{utilisateur.role}</td>
//                         <td>{utilisateur.formations_inscrites}</td>

//                         <td>
                            
//                         <button className='btn btn-sm text-decoration btn-danger ' onClick={e => handleDelete(utilisateur.id)}>Supprimer</button>
//                         <Link  className='btn btn-sm text-decoration btn-warning ' to={`/update/${utilisateur.id}`}>Update</Link>
                    
                        
//                         </td>

//                     </tr>
//                 ))}
                
//             </tbody>
//         </table>

//     </div>
//   )
//   function handleDelete(id){
//     const confirm = window.confirm('Etes vous sur de vouloir supprimer cet utilisateur ?');
//     if(confirm){
//         axios.delete(`http://localhost:3000/utilisateurs/${id}`)
//         .then(res => {
//             alert("Utilisateur supprime")
//             navigate('/create')
//         })
        
//     }
    
//   }
// }

// export default Home