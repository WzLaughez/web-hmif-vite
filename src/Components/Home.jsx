import React from 'react'
import VideoProfil from './Beranda/VideoProfil'
import NavBar from '../layouts/Navbar'
import VisiMisi from './Beranda/VisiMisi'
import HeroSection from './Beranda/HeroSection'
import GaleriHome from './Beranda/GaleriHome'
import Footer from '../layouts/Footer'
import ArticleSection from './Beranda/Pengumuman'
const images = [
  { src: '/LogoHMIF-removebg-preview.png', title: 'Image 1' },
  { src: '/LogoHMIF-removebg-preview.png', title: 'Image 2' },
  // Add more images
];
const Home = () => {
  return (
    <>
    <HeroSection/>
    <VisiMisi/>
    <VideoProfil/>
    <ArticleSection/>
    <GaleriHome images={images}/>
    <Footer/>
    
    </>
  )
}

export default Home