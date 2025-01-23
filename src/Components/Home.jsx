import React from 'react'
import VideoProfil from './Beranda/VideoProfil'
import NavBar from '../layouts/Navbar'
import VisiMisi from './Beranda/VisiMisi'
import HeroSection from './Beranda/HeroSection'
import GaleriHome from './Beranda/GaleriHome'
import Footer from '../layouts/Footer'
import ArticleSection from './Beranda/Pengumuman'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <VisiMisi/>
    <VideoProfil/>
    <GaleriHome/>
    <ArticleSection/>
    <Footer/>
    
    </>
  )
}

export default Home