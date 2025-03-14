import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
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
          background: `linear-gradient(to top, #BFDAA4 ,#FFFBF0)`
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
                <MapPin className="h-5 w-5" style={{ color: '#F49069' }} />
                <span className="text-sm">
                  Jalan Semarang 5, Malang 65145
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" style={{ color: '#F49069' }} />
                <a href="mailto:bemfkum@gmail.com" 
                   className="text-sm transition-colors hover:text-Peach">
                  bemfkum@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" style={{ color: '#F49069' }} />
                <a href="tel:+6281234567890" 
                   className="text-sm transition-colors hover:text-Peach">
                  +6281216016334
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-Peach">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-Peach">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bemfkum/?utm_source=ig_web_button_share_sheet" className="transition-colors hover:text-Peach">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-Peach">
                <Linkedin className="h-5 w-5" />
              </a>
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
  );
};

export default Footer;