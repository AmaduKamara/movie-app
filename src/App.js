import { useEffect } from "react";
const API_URL = "https://www.omdbapi.com?apikey=152bf4fe";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>
    </div>
  );
};

export default App;
