import { useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

import searchIcon from "./search.svg";
const API_URL = "https://www.omdbapi.com?apikey=152bf4fe";

const movie1 = {
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

const App = () => {
  // const []
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
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
        <MovieCard movie={movie1} />
      </div>
    </div>
  );
};

export default App;
