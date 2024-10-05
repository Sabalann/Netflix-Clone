import React, { useState } from 'react';
import DarkModeButton from './components/DarkModeButton';
import './App.css'; // Import a CSS file for styling
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="hero dark-mode">
      </div>
    </>

    
  );
}

export default App;