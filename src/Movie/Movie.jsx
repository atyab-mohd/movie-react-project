import React, { useEffect, useState } from "react";
import MovieDetailDiv from "./MovieDetailDiv";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  let searchMovieList;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        if (response?.status === 200) {
          const data = await response.json();
          setMovieList(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  searchMovieList = movieList.filter((movie) => {
    return movie?.movie.toLowerCase().includes(searchVal.toLowerCase());
  });

  return (
    <div>
      <div>
        <div className="text-4xl">Movies</div>
        <div className="text-right">
          <input
            className="text-black p-2"
            type="search"
            placeholder="Search for movies here.."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
        {searchMovieList &&
          searchMovieList?.length > 0 &&
          searchMovieList.map((movie) => {
            return (
              <span key={movie?.id}>
                <MovieDetailDiv movieData={movie} />
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default Movie;
