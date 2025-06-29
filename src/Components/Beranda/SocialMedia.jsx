import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Youtube, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const SocialFooter = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  const socialLinks = [
    { 
      icon: Youtube, 
      link: "#", 
      color: "bg-gradient-to-br from-red-500 to-red-600",
      hoverColor: "hover:from-red-400 hover:to-red-500",
      name: "YouTube"
    },
    { 
      icon: Instagram, 
      link: "#", 
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
      hoverColor: "hover:from-purple-400 hover:via-pink-400 hover:to-orange-300",
      name: "Instagram"
    },
    { 
      icon: Facebook, 
      link: "#", 
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      name: "Facebook"
    },
    { 
      icon: Linkedin, 
      link: "#", 
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-400 hover:to-blue-500",
      name: "LinkedIn"
    },
    { 
      icon: Mail, 
      link: "mailto:bemfkum@gmail.com", 
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      name: "Email"
    },
  ];

  return (
    <div data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-Sage to-Sage">
        
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Title with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-Peach via-purple-300 to-Peach text-transparent bg-clip-text leading-tight">
            Connect With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg">
            Follow BEM FK Universitas Negeri Malang official social media
          </p>
        </div>

        {/* Social Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {socialLinks.map(({ icon: Icon, link, color, hoverColor, name }, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-white ${color} ${hoverColor} 
                  shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2
                  before:absolute before:inset-0 before:rounded-2xl before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity`}
              >
                <Icon className="w-7 h-7 relative z-10" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
              </a>
              <span className="text-gray-300 text-sm mt-3 group-hover:text-white transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative wave */}
        <div className="flex justify-center">
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SocialFooter />
    </>
  );
};

export default SocialMedia;