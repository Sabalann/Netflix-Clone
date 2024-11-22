import React from "react";

function FeaturedFilm() {
  const vidPath = "/src/assets/vids/NetflixTrailer.mp4"
  return (
    <div className="FeaturedFilm">
        <div className="video-wrapper">
            <video autoPlay={true} muted controls>
              <source src={vidPath}></source>
            </video>
        </div>
    </div>
  );
}

export default FeaturedFilm;