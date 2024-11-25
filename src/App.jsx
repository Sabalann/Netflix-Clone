import './App.css'; // Import a CSS file for styling
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import MovieList from './components/MovieList.jsx';
import FeaturedFilm from './components/FeaturedFilm.jsx';

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
                <FeaturedFilm> </FeaturedFilm>
                <MovieList></MovieList>
            </div>
        </>
    );
}

export default App;