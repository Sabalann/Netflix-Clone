import React, { useEffect, useRef } from "react"; // @ts-ignore
import MovieThumb from "./MovieThumb"; // @ts-ignore
import flashMovie from "/src/assets/imgs/flashMovie.jpg"; // @ts-ignore
import venomMovie from "/src/assets/imgs/venomMovie.jpg"; // @ts-ignore
import breakingBad from "/src/assets/imgs/breakingBad.jpg"; // @ts-ignore
import dahmer from "/src/assets/imgs/dahmer.jpg"; // @ts-ignore
import you from "/src/assets/imgs/you.jpg"; // @ts-ignore
import strangerThings from "/src/assets/imgs/strangerThings.jpg"; // @ts-ignore
import flashShow from "/src/assets/imgs/flashShow.jpg";

const movies = [
  { src: flashMovie, alt: "Flash Movie" },
  { src: venomMovie, alt: "Venom" },
  { src: breakingBad, alt: "Breaking Bad" },
  { src: you, alt: "You" },
  { src: dahmer, alt: "Dahmer" },
  { src: strangerThings, alt: "Stranger Things" },
  { src: flashShow, alt: "Flash Show" },
];

function MovieList() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleScroll = () => {
      if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
        list.scrollLeft = 0;
      }
    };

    list.addEventListener("scroll", handleScroll);
    return () => list.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="movieListH1">
        <h1>Your Favorites</h1>
      </div>

      <div className="movieList" ref={listRef}>
        {movies.concat(movies).map((movie, index) => (
          <MovieThumb key={index} src={movie.src} alt={movie.alt} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
