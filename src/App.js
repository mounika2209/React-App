import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//d9e06e37

const API_URL = "http://www.omdbapi.com?apikey=d9e06e37";

const movie1 = {
  Title: "The Killer Nun",
  Year: "1979",
  imdbID: "tt0078343",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYWE1ZTkzZjMtNGQ4MS00MzhiLWFhMTUtZjM2ODc4MmM1MTEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
