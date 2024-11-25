import React from "react";
import featuredFilm from "/src/assets/vids/netflixtrailer.mp4"; // @ts-ignore


function FeaturedFilm() {
  return (
    <div className="FeaturedFilm">
        <div className="video-wrapper">
            <video autoPlay={true} muted controls>
              <source src={featuredFilm}></source>
            </video>
        </div>
    </div>
  );
}

export default FeaturedFilm;