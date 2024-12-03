import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieList from '../components/MovieList';
import FeaturedFilm from '../components/FeaturedFilm';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                <NavBar isScrolled={isScrolled} />
            </div>
            <div className="hero dark-mode">
                <FeaturedFilm />
                <MovieList title={"Your Favorites"} />
                <MovieList title={"Popular Now"} />
                <MovieList title={"Top Rated"} />
                <MovieList title={"Upcoming"} />
                <MovieList title={"Now Playing"} />
            </div>
        </>
    );
}
