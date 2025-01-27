import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GaleriHomeGrid from './GaleriHomeGrid';
import { FaArrowRight  } from "react-icons/fa";
const GaleriHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  const images = [
    { src: '/LogoHMIF-removebg-preview.png', title: 'Image 1' },
    { src: '/LogoHMIF-removebg-preview.png', title: 'Image 2' },
    { src: '/LogoHMIF-removebg-preview.png', title: 'Image 3' },
    { src: '/LogoHMIF-removebg-preview.png', title: 'Image 3' },
    { src: '/LogoHMIF-removebg-preview.png', title: 'Image 3' },
    // Add more images
  ];
  
  return (
    <div data-aos="fade-up" className="relative w-full">
      {/* Header */}
      <header className=" w-full">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center text-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Kumpulan dokumentasi kegiatan yang diselenggarakan oleh Himpunan Mahasiswa Informatika UNTAN
          </p>
        </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <GaleriHomeGrid images={images} />
        </div>
      </div>
      <div className="text-center mb-12" >
          <button className="bg-Peach  px-8 py-3 rounded-lg hover:bg-Peach/80 transition-colors duration-200 font-medium">
          <div className="flex items-center space-x-2">
            <span>View All Gallery</span>
            <FaArrowRight className="" />
          </div>
          </button>
          
        </div>
    </div>
  );
};

export default GaleriHome;