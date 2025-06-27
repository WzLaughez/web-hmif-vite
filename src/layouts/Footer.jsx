import React from 'react';
import { MapPin, Mail, Phone,Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
const SocialFooter = () => {
  return (
    <footer className=" py-12 text-center text-white">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text">
        Official BEM FK Unud Social Media
      </h2>

      {/* Icons */}
      <div className="flex justify-center gap-8 flex-wrap">
        {[
          { icon: Youtube, link: "#", color: "bg-[#FF0000]" },
          { icon: Instagram, link: "#", color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600" },
          { icon: FaTiktok, link: "#", color: "bg-gradient-to-tr from-cyan-400 to-pink-500" },
          { icon: Linkedin, link: "#", color: "bg-[#0A66C2]" },
          { icon: Mail, link: "mailto:your@email.com", color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-blue-600" },
        ].map(({ icon: Icon, link, color }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${color} shadow-[0_0_15px_4px_rgba(255,255,255,0.05)] transition transform hover:scale-110`}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </footer>
  );
};

// export default SocialFooter;
const Footer = () => {
  return (
    <>
    <SocialFooter />
    <footer className="relative text-black p-2">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 w-full h-full -z-10 ">
        {/* <img 
          src="/hmn4.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover rotate-180"
        /> */}
        {/* Dark gradient overlay with custom colors */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to top,rgb(30, 33, 116) ,#1d1e3f)`
        }} />
      </div>

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section: Logo and Contact Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-6 flex">
              <img
              alt=""
              src="/Logo_Hijau.png"
              className="h-20 w-auto"
              />
              <img
              alt=""
              src="/Logo_Kabinet.png"
              className="h-20 w-auto"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" style={{ color: '#f3f0da' }} />
                <span className="text-sm text-white">
                  Jalan Semarang 5, Malang 65145
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" style={{ color: '#f3f0da' }} />
                <a href="mailto:bemfkum@gmail.com" 
                   className="text-sm text-white transition-colors hover:text-Peach">
                  bemfkum@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" style={{ color: '#f3f0da' }} />
                <a href="tel:+6281234567890" 
                   className="text-sm text-white transition-colors hover:text-Peach">
                  +6281216016334
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3314237484456!2d112.61600015438307!3d-7.964660092060207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882805430b33d%3A0x44de0ac16a5bdaf7!2sFakultas%20Kedokteran%20Universitas%20Negeri%20Malang!5e0!3m2!1sid!2sid!4v1740730297564!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-opacity-20" style={{ borderColor: '#F49069' }}>
          <p className="text-center text-sm" style={{ color: '#000000' }}>
            © {new Date().getFullYear()} Copyright BEM FK 2025
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;