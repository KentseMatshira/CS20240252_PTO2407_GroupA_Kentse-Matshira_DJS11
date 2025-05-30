import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from "./Pages/Navbar";
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ShowPage } from './pages/ShowPage';
import ShowDetails from './components/ShowDetails';
import AudioPlayer from './components/AudioPlayer';
import { useAudioPlayer } from './contexts/AudioPlayerContext';

function App() {
  const { audioDetails, stopAudio } = useAudioPlayer();
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <AudioPlayer
        audioSrc={audioDetails.audioSrc}
        title={audioDetails.title}
        isVisible={audioDetails.isVisible}
        onClose={stopAudio}
      />
      </Router>
  );
}
export default App;
