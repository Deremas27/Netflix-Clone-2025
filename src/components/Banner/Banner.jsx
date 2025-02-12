import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import BannerCSS from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        console.log(request.data);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);

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
            <button className={`${BannerCSS.banner__button} ${BannerCSS.play}`}>
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
    </>
  );
}

export default Banner;
