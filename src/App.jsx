import './App.css'; // Import a CSS file for styling
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import FeaturedFilm from './components/FeaturedFilm';

function App() {
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

export default App;