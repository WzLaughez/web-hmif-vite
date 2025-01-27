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
  <div className="relative min-h-[19vh] w-full font-poppins" data-aos ="fade-down">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="src\assets\pelepasan.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-SweetDaisy via-Sage/60 to-Sage" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-black mb-4 max-w-4xl">
      <Typewriter
          words={[
            'Selamat Datang di Website',
          ]} // Enable looping of the words
          cursor={false} // Show a blinking cursor
          cursorStyle="_"
          typeSpeed={70} // Speed for typing
        />
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-serif text-black mb-4 max-w-4xl">
      <Typewriter
          words={[
            'BEM FAKULTAS KEDOKTERAN UM',
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