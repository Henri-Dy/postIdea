import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import CreatePost from './Pages/CreatePost';
import './App.css';
import Inscription from './Pages/Inscription';
import Connexion from './Pages/Connexion';


function App() {
  return (
    <div className="App  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path='/Inscription' element={<Inscription/>} />
        <Route path='/Connexion' element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
