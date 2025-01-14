import React from 'react'
import VideoProfil from './Beranda/VideoProfil'
import NavBar from '../layouts/Navbar'
import VisiMisi from './Beranda/VisiMisi'
import HeroSection from './Beranda/HeroSection'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <VisiMisi/>
    <VideoProfil/>
    </>
  )
}

export default Home