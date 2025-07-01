import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroPage = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div className="relative min-h-[11vh] w-full font-serif" data-aos="">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-ungu " />
      </div>

      {/* Content */}
      
    </div>
  )
}

export default HeroPage