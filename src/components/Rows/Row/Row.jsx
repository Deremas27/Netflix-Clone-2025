/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import RowStyle from "./Row.module.css";
import axios from "../../../utils/axios";
// import { width } from '@mui/system';
import movieTrailer from "movie-trailer"
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);

        setMovies(request.data.results);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");

          setTrailerUrl(videoId);
        })
        .catch((error) => console.log("Error finding trailer:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className={RowStyle.row}>
        <h1>{title}</h1>
        <div className={RowStyle.row__posters}>
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`${RowStyle.row__poster} ${
                isLargeRow && RowStyle.row__posterLarge
              }`}
            />
          ))}
        </div>
        <div style={{ padding: "1rem" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;
