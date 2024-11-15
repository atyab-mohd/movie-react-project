import React, { useState } from "react";

function MovieDetailDiv({ movieData }) {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <div className="flex justify-center items-center pb-3 pt-3 border-b-2 border-dotted ">
      <div>
        Movie Title:-{" "}
        <div className="rounded bg-teal-950 pb-1 pl-2 pr-2">
          {movieData?.movie}
        </div>
        {viewDetails ? (
          <div
            className="cursor-pointer rounded bg-teal-700"
            onClick={() => setViewDetails(false)}
          >
            Hide details &#8593;
          </div>
        ) : (
          <div
            className="cursor-pointer rounded bg-teal-700"
            onClick={() => setViewDetails(true)}
          >
            show details &#8595;
          </div>
        )}
        {viewDetails && (
          <div className="size-60 rounded bg-teal-500 ">
            <div className="flex justify-center items-center ">
              <span className="flex justify-center items-center">
                <img
                  src={movieData?.image}
                  title={movieData?.movie}
                  alt="movie img"
                />
              </span>
            </div>
            <span>
              <a
                className="text-blue-600"
                href={movieData?.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
                title="click to see IMDb"
              >
                IMDb Rating :- {movieData?.rating}
              </a>
            </span>
            <br />
            <span className="text-black">
              Plot Summary :- Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Debitis eos ipsa cupiditate delectus vitae amet libero
              magnam beatae mollitia asperiores repellendus reiciendis tenetur
              labore adipisci optio, est corrupti tempora voluptas?
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetailDiv;
