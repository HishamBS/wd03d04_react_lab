import React from "react";
import FilmRow from "./FilmRow";
const FilmListing = props => {
  let allFilms = props.db.map((film, index) => (
    <FilmRow
      filmTitle={film.title}
      filmId={film.id}
      filmDate={new Date().getFullYear(film.release_date)}
      filmPoster={film.poster_path}
    />
  ));
  let handleFilterClick = filter => {
    console.log(`setting filter to ${filter}`);
  };
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className="film-list-filter"
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{props.db.length}</span>
        </div>
        <div
          className="film-list-filter"
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

      {allFilms}
    </div>
  );
};

export default FilmListing;
