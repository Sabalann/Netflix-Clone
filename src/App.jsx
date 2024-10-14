import React, { useState } from 'react';
import DarkModeButton from './components/DarkModeButton';
import './App.css'; // Import a CSS file for styling
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import FeaturedFilm from './components/FeaturedFilm';

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="hero dark-mode">
        <FeaturedFilm></FeaturedFilm>
        <MovieList title={"Your Favorites"}></MovieList>
        <MovieList title={"Popular Now"}></MovieList>
        <MovieList title={"Top Rated"}></MovieList>
        <MovieList title={"Upcoming"}></MovieList>
        <MovieList title={"Now Playing"}></MovieList>
      </div>
    </>

    
  );
}

export default App;