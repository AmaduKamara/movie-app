import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

import searchIcon from "./search.svg";
const API_URL = "https://www.omdbapi.com?apikey=152bf4fe";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="Avengers"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onChange={() => {}} />
      </div>

      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
