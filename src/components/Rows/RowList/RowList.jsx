/* eslint-disable no-unused-vars */
import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Kids Videos" fetchUrl={requests.fetchKidsVideos} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Drama Videos"
        isLargeRow={true}
        fetchUrl={requests.fetchDramaMovies}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList;
