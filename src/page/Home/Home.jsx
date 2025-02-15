import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Banner from '../../components/Banner/Banner';
import RowList from "../../components/Rows/RowList/RowList"
import BannerPlay from '../../components/Banner/BannerPlay';

function Home() {
  return (
    <>
    <Header/>
    <BannerPlay/>
    {/* <Banner/> */}
    <RowList/>
    <Footer />
    </>
  )
}

export default Home