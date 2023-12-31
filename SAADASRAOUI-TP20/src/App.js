// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
// import Home from './Home';
import Create from './Create';
import Update from './Update';
import Formateur from './Formateur';
import Participant from './components/Participant';
import Ajouter from './Ajouter';
// import Intermediaire from './Intermediaire';
// import Debutant from './Debutant';
// import Inscri from './Inscri';
// import Inscri2 from './Inscri2';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>

        < Route path='/Ajouter' element={<Ajouter />}/>
        {/* <Route path='/inscri' element={<Inscri/>}/> */}
        {/* <Route path='/inscri2' element={<Inscri2/>}/> */}

        <Route path='/' element={<Create />}/>
        <Route path='/formateur' element={<Formateur />}/>
        <Route path='/participant' element={<Participant />}/>
        {/* <Route path='/in' element={<Intermediaire />}/> */}
        {/* <Route path='/de' element={<Debutant />}/> */}
        <Route path='/create' element={<Formateur />}/>
        <Route path='/update/:id' element={<Update />}/>


        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
