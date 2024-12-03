import React, { useState } from "react";


function MovieThumb({src, alt}) {
  return (
    <div className="movieThumb">
      <img src={src} alt={alt} />
    </div>
  );
}


export default MovieThumb;