import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const HeroSection = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: false, // Run animation only once
      });
    }, []);
  return (
  <div className="relative min-h-[12vh] w-full font-poppins" data-aos ="fade-down">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="\background.JPG"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-50" />

    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] text-center px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-sans text-white max-w-4xl">
      <Typewriter
          words={[
            'BADAN EKSEKUTIF MAHASISWA',
          ]}// Enable looping of the words
          cursor={false} // Show a blinking cursor
          cursorStyle="_"
          typeSpeed={70} // Speed for typing
        />
      </h1>
      <h1 className="text-2xl sm:text-2xl md:text-2xl font-sans text-white mb-4 max-w-4xl">
      <Typewriter
          words={[
            'FAKULTAS KEDOKTERAN UNIVERSITAS NEGERI MALANG',
          ]}// Enable looping of the words
          cursor={false} // Show a blinking cursor
          cursorStyle="_"
          typeSpeed={70} // Speed for typing
        />
      </h1>
    </div>
  </div>
  )
}

export default HeroSection