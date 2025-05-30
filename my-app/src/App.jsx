import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./Pages/Navbar";
import { HomePage } from './pages/HomePage';
import { ShowPage } from './pages/ShowPage';
import { FavoritesPage } from './pages/FavoritesPage';
import ShowDetails from './components/ShowDetails';
 
function App() {
  return (
    <>
    <div className='bg-gray-100 min-h-screen'>
      <Router>
        <Navbar />
        <div className='pt-16 max-w-6xl mx-auto px-4'></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        </div>
      </Router>
    </>
        </div>
  );
};


export default App;
