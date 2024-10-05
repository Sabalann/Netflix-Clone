import React, { useState } from 'react';
import DarkModeButton from './components/DarkModeButton';
import './App.css'; // Import a CSS file for styling
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="hero dark-mode">
        <MovieList></MovieList>
      </div>
    </>

    
  );
}

export default App;