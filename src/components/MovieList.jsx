import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch 2023 movies using the first API
        const movieSearchUrl = 'https://online-movie-database.p.rapidapi.com/v2/search?searchTerm=2023&type=NAME&first=20&country=US&language=en-US';
        const movieSearchOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'ceb750c3e1msh496ca8e4b140608p11e243jsnaa3e0797160b',
            'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
          }
        };

        const movieSearchResponse = await fetch(movieSearchUrl, movieSearchOptions);
        const movieSearchResult = await movieSearchResponse.json();

        // Check if the edges array exists and has data
        if (!movieSearchResult.data || !movieSearchResult.data.mainSearch || !movieSearchResult.data.mainSearch.edges) {
          setError('No movies found for 2023.');
          return;
        }

        const movieData = movieSearchResult.data.mainSearch.edges.slice(0, 10); // Get the top 10 movies

        // For each movie, fetch the poster using the IMDb ID with the second API
        const movieDetails = await Promise.all(movieData.map(async (movie) => {
          const imdbId = movie.node.entity.id; // Extract IMDb ID (e.g., tt15073568)

          const posterUrl = await fetchPosterUrl(imdbId);
          return { ...movie.node.entity, posterUrl };
        }));

        setMovies(movieDetails);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      }
    };

    // Fetch poster using the second API
    const fetchPosterUrl = async (imdbId) => {
      try {
        const posterUrl = `https://mdblist.p.rapidapi.com/?i=${imdbId}`;
        const posterOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'ceb750c3e1msh496ca8e4b140608p11e243jsnaa3e0797160b',
            'x-rapidapi-host': 'mdblist.p.rapidapi.com',
          }
        };

        const posterResponse = await fetch(posterUrl, posterOptions);
        const posterData = await posterResponse.json();

        return posterData.poster || null; // Extract the poster URL
      } catch (error) {
        console.error('Error fetching poster:', error);
        return null;
      }
    };

    fetchMovies();
  }, []);

  return (
      <div>
        <h1>Top Movies of 2023</h1>
        {error && <p>{error}</p>}
        <ul>
          {movies.map((movie) => (
              <li key={movie.id}>
                <div>
                  {movie.posterUrl ? (
                      <img
                          src={movie.posterUrl}
                          alt={movie.titleText.text}
                          style={{ width: '100px', height: '150px' }}
                      />
                  ) : (
                      <p>No Poster Available</p>
                  )}
                </div>
                <div>
                  <h3>{movie.titleText.text}</h3>
                  <p>{movie.primaryImage ? movie.primaryImage.url : 'No description available.'}</p>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default MovieList;
