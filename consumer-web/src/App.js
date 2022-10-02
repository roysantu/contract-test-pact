import React, { useState } from "react";
// import logo from './logo.svg';
import logo from "./funny-dev-logo.png";
import "./App.css";
import ItemList from "./components/list/itemList";

// const movieList = [{"title": "title1"}];

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // function fetchMoviesHandler() {
  //   setIsLoading(true);
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => response.json())
  //     .then((jsonResponse) =>
  //       jsonResponse.results.map((movieData) => {
  //         return {
  //           title: movieData.title,
  //         };
  //       })
  //     )
  //     .then((formattedData) => {
  //       setMovies(formattedData);
  //       setIsLoading(false);
  //       console.log("formattedData>>>>>>>", formattedData)
  //     });
  // }
  // {
  //   credentials: "include",
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     Accept: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //   },
  // }
  // Fetching localhost:3000
  function fetchMoviesHandler() {
    setIsLoading(true);
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((jsonResponse) =>
        jsonResponse.map((movieData) => {
          return {
            title: movieData.movieTitle,
          };
        })
      )
      .then((formattedData) => {
        setMovies(formattedData);
        setIsLoading(false);
        console.log("formattedData>>>>>>>", formattedData);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="Canvas Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => fetchMoviesHandler()}>Get Movies</button>
        {!isLoading && movies.length > 0 && (
          <ItemList movies={movies}></ItemList>
        )}
        {!isLoading && movies.length === 0 && <p> No data !!!</p>}
        {isLoading && <p>Loading</p>}
      </header>
    </div>
  );
}

export default App;
