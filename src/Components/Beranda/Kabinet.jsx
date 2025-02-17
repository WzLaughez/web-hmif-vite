import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import VideoProfil from './VideoProfil';
import FotoKetua from './FotoKetua';

const Kabinet = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: false, // Run animation only once
      });
    }, []);
  return (
  <div className="relative min-h-[15vh] w-full font-poppins" data-aos ="fade-down">
    {/* Background Image with Overlay */}
    {/* <div className="absolute inset-0 w-full h-full">
      <img 
        src="src\assets\pelepasan.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-Sage via-Peach/60 to-Peach" />    </div> */}

    {/* Content */}
      <VideoProfil/>
      <FotoKetua/>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[15vh] text-center px-2 sm:px-6 lg:px-8 bg-Sage ">
        <div className='border-b-4'>
                <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold font-serif mb-2 max-w-4xl ">
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
        <div className="relative rounded-lg overflow-hidden  p-8" data-aos="fade-up">
              <img 
                src="src/assets/pelepasan.png"
                alt="Kabinet Background"
                className="w-full h-[60vh] object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
                
    </div>
  </div>
  )
}

export default Kabinet