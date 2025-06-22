import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GaleriHomeGrid from './GaleriHomeGrid';
import { FaArrowRight  } from "react-icons/fa";
import supabase from '../admin/utils/supabaseClient'
import { Link } from 'react-router-dom';
const GaleriHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  const [galeri, setGaleri] = useState([])
    useEffect(() => {
      const fetchGaleri = async () => {
        const { data, error } = await supabase
          .from('galeri')
          .select('*')
        if (error) console.error(error)
        else {
          console.log(data)
          setGaleri(data)}
      }
  
      fetchGaleri()
    }, [])
  
  return (
    <div data-aos="fade-up" className="relative w-full">
      {/* Header */}
      <header className=" w-full">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center text-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Kumpulan dokumentasi kegiatan yang diselenggarakan oleh Badan Eksekutif Mahasiswa Fakultas Kedokteran
          </p>
        </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <GaleriHomeGrid images={galeri} />
        </div>
      </div>
      <div className="text-center mb-12" >
          <button className="bg-Peach  px-8 py-3 rounded-lg hover:bg-Peach/80 transition-colors duration-200 font-medium">
          <Link to="/galeri">
          <div className="flex items-center space-x-2">
            <span>View All Gallery</span>
            <FaArrowRight className="" />
          </div>
          </Link>
          </button>
          
        </div>
    </div>
  );
};

export default GaleriHome;