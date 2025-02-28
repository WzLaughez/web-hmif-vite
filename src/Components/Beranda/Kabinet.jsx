import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import VideoProfil from './VideoProfil';
import FotoKetua from './FotoKetua';
import { Link } from 'react-router';

const Kabinet = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: false, // Run animation only once
      });
    }, []);
    
  const [hoverKabinet, setHoverKabinet] = useState(false);
  const [hoverGaya, setHoverGaya] = useState(false);
  return (
  <div className="relative min-h-[15vh] w-full font-poppins mt-5" data-aos ="fade-down">
    {/* Content */}
      <VideoProfil/>
      <FotoKetua/>
    <div className=" flex flex-col items-center justify-center text-center px-2 sm:px-6 lg:px-8 bg-Sage ">
        <div className='border-b-4 flex flex-col items-center justify-center'>
          <img
          
          src="/Logo_Kabinet.png"
          alt="Kabinet Background"
          className="w-32 h-auto"
          />
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold font-serif mb-2 max-w-4xl mt-4">
          <Typewriter
              words={[
                  'KABINET ARUNIKA NAWASENA ',
                  ]} // Enable looping of the words
                  cursor={false} // Show a blinking cursor
                  cursorStyle="_"
                  typeSpeed={70} // Speed for typing
                  />
          </h1>
        </div>
        <div className="relative rounded-lg overflow-hidden flex p-8" data-aos="fade-up">
          <Link to="#" className="w-full">
            <img 
              src="/background_gaya.png"
              alt="Kabinet Background"
              className="w-full h-[40vh] md:h-[60vh] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8 px-4 md:px-8" data-aos="fade-up">
      <Link to="/about" className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-center p-4">
          <img 
            src="/Logo_Hijau.png" 
            alt="Kabinet Info" 
            className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h3 className="text-xl font-semibold text-center sm:text-left">Filosofi Logo</h3>
            <p className="text-gray-600 mt-2 text-center sm:text-left">Learn more about our Kabinet organization</p>
          </div>
        </div>
      </Link>
      
      <Link to="/about" className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mt-4 md:mt-0">
        <div className="flex flex-col sm:flex-row items-center p-4">
          <img 
            src="/background_gaya.png" 
            alt="Gaya Info" 
            className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h3 className="text-xl font-semibold text-center sm:text-left">Kementrian</h3>
            <p className="text-gray-600 mt-2 text-center sm:text-left">Explore our team and learn more about our organization</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
  </div>
  )
}

export default Kabinet