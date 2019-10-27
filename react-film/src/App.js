import React from "react";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import "./index.css";
import "./normalize.css";
import TMDB from "./TMDB";

function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmListing db={TMDB.films} />
      </div>
      <div className="film-details">
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
