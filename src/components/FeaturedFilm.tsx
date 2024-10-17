import React from "react";

function FeaturedFilm() {
  const vidPath = "/src/assets/vids/Uprising _ Official Trailer _ Netflix.mp4"
  return (
    <div className="FeaturedFilm">
        <video autoPlay={true} muted controls>
          <source src={vidPath}></source>
        </video>
    </div>
  );
}

export default FeaturedFilm;