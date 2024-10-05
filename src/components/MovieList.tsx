import React from "react";
import flashMovie from "/src/assets/imgs/flashMovie.jpg";
import venomMovie from "/src/assets/imgs/venomMovie.jpg";
import breakingBad from "/src/assets/imgs/breakingBad.jpg";
import dahmer from "/src/assets/imgs/dahmer.jpg";
import you from "/src/assets/imgs/you.jpg";
import strangerThings from "/src/assets/imgs/strangerThings.jpg";
import flashShow from "/src/assets/imgs/flashShow.jpg";


function MovieList() {
  return (
    <div className="movieList">
      <h1>Your Favorites</h1>
      <div className="movieList__container">
      <img src={flashMovie} alt="Flash Movie" /> </div>
      
      <img src={venomMovie} alt="Venom Movie" />
      <img src={breakingBad} alt="" />
      <img src={you} alt="" />
      <img src={dahmer} alt="" />
      <img src={strangerThings} alt="" />
      <img src={flashShow} alt="" />
    </div>
  );
}

export default MovieList;
