import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import BannerCSS from "./Banner.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function BannerPlay() {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );

      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);

  const clickPlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {

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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div
        className={BannerCSS.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={BannerCSS["banner__contents"]}>
          <h1 className={BannerCSS["banner__title"]}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={BannerCSS["banner__butons"]}>
            <button
              onClick={() => clickPlay(movie)}
              className={`${BannerCSS.banner__button} ${BannerCSS.play}`}
            >
              Play
            </button>
            <button
              className={`${BannerCSS["banner__button"]} ${BannerCSS.list}`}
            >
              My List
            </button>
          </div>
          <h1 className={BannerCSS["banner__description"]}>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className={BannerCSS["banner__fadeBottom"]} />
        {/* <div className="banner__fadeBottom"></div> */}
      </div>
      <div style={{ padding: "2.5rem", marginTop: "2rem"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default BannerPlay;
