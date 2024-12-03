import React, { useEffect, useRef } from "react"; // @ts-ignore
import MovieThumb from "./MovieThumb"; // @ts-ignore
const flashMovie = "/assets/imgs/flashMovie.jpg";
const venomMovie = "/assets/imgs/venomMovie.jpg";
const breakingBad = "/assets/imgs/breakingBad.jpg";
const dahmer = "/assets/imgs/dahmer.jpg";
const you = "/assets/imgs/you.jpg";
const strangerThings = "/assets/imgs/strangerThings.jpg";
const flashShow = "/assets/imgs/flashShow.jpg";
const behindHerEyes = "/assets/imgs/behindHerEyes.jpg";
const berlin = "/assets/imgs/berlin.jpg";
const bojackHorseman = "/assets/imgs/bojackHorseman.jpg";
const dexter = "/assets/imgs/dexter.jpg";
const gossipGirl = "/assets/imgs/gossipGirl.jpg";
const htgawm = "/assets/imgs/htgwm.jpg";
const joker2 = "/assets/imgs/joker2.jpg";
const ninjaTurtles = "/assets/imgs/ninjaTurtles.jpg";
const prisonBreak = "/assets/imgs/prisonBreak.jpg";
const split = "/assets/imgs/split.jpg";

import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

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
  const listRef = useRef(null);

  shuffleArray(movies)

  const ScrollRightList = () => {
    const list = listRef.current;
    if (!list) return;
    list.scrollLeft += 500;
  };

  const ScrollLeftList = () => {
    const list = listRef.current;
    if (!list) return;
    list.scrollLeft -= 500;
  };

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
      <div className="completeList">
        <div className="movieListH1">
          <h1>{title}</h1>
          <div className="hoverElement">Discover more <ArrowRight color={"#FFFFFF"} size="25"></ArrowRight></div>
        </div>

        <div className="movieList" ref={listRef}>
          {movies.concat(movies).map((movie, index) => (
              <MovieThumb key={index} src={movie.src} alt={movie.alt} />
          ))}
          <button className="ScrollLeftButton" onClick={ScrollLeftList}><ArrowLeft color={"#FFFFFF"} size="40"></ArrowLeft></button>
          <button className="ScrollRightButton" onClick={ScrollRightList}><ArrowRight color={"#FFFFFF"} size="40"></ArrowRight></button>
        </div>
      </div>
  );
}


export default MovieList;
