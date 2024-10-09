import React, { useEffect, useRef } from "react"; // @ts-ignore
import MovieThumb from "./MovieThumb"; // @ts-ignore
import flashMovie from "/src/assets/imgs/flashMovie.jpg"; // @ts-ignore
import venomMovie from "/src/assets/imgs/venomMovie.jpg"; // @ts-ignore
import breakingBad from "/src/assets/imgs/breakingBad.jpg"; // @ts-ignore
import dahmer from "/src/assets/imgs/dahmer.jpg"; // @ts-ignore
import you from "/src/assets/imgs/you.jpg"; // @ts-ignore
import strangerThings from "/src/assets/imgs/strangerThings.jpg"; // @ts-ignore
import flashShow from "/src/assets/imgs/flashShow.jpg"; // @ts-ignore
import behindHerEyes from "/src/assets/imgs/behindHerEyes.jpg"; // @ts-ignore
import berlin from "/src/assets/imgs/berlin.jpg"; // @ts-ignore
import bojackHorseman from "/src/assets/imgs/bojackHorseman.jpg"; // @ts-ignore
import dexter from "/src/assets/imgs/dexter.jpg"; // @ts-ignore
import gossipGirl from "/src/assets/imgs/gossipGirl.jpg"; // @ts-ignore
import htgawm from "/src/assets/imgs/htgwm.jpg"; // @ts-ignore
import joker2 from "/src/assets/imgs/joker2.jpg"; // @ts-ignore
import ninjaTurtles from "/src/assets/imgs/ninjaTurtles.jpg"; // @ts-ignore
import prisonBreak from "/src/assets/imgs/prisonBreak.jpg"; // @ts-ignore
import split from "/src/assets/imgs/split.jpg"; // @ts-ignore

const movies = [
  { src: flashMovie, alt: "Flash Movie" },
  { src: venomMovie, alt: "Venom" },
  { src: breakingBad, alt: "Breaking Bad" },
  { src: you, alt: "You" },
  { src: dahmer, alt: "Dahmer" },
  { src: strangerThings, alt: "Stranger Things" },
  { src: flashShow, alt: "Flash Show" },
  { src: behindHerEyes, alt: "Behind Her Eyes" },
  { src: berlin, alt: "Berlin" },
  { src: bojackHorseman, alt: "Bojack Horseman" },
  { src: dexter, alt: "Dexter" },
  { src: gossipGirl , alt: "GossipGirl" },
  { src: htgawm, alt: "How to Get Away With Murder"},
  { src: joker2, alt: "Joker 2"},
  { src: ninjaTurtles, alt: "Ninja Turtles"},
  { src: prisonBreak, alt: "Prison Break"},
  { src: split, alt: "Split"},
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function MovieList({title}) {
  const listRef = useRef<HTMLDivElement>(null);

  shuffleArray(movies)

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
        <h1>{title}</h1>
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
