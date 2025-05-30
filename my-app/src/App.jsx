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
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </>
  );
};


export default App;
