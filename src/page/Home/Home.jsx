import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RowList from "../../components/Rows/RowList/RowList"
import BannerPlay from '../../components/Banner/BannerPlay';

function Home() {
  return (
    <>
    <Header/>
    <BannerPlay/>
    <RowList/>
    <Footer />
    </>
  )
}

export default Home