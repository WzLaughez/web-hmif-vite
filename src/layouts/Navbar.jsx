import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = ({ isActive }) => `
    relative px-3 py-2 text-sm font-medium transition-all
    before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0
    before:origin-left before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100 ${isActive ? 'text-Peach border-b-2 border-Peach' : 'text-gray-700 hover:text-Peach'}
  `;

  const dropdownMenus = {
    'Tentang IAI Jatim': [
      {
        title: 'Organisasi IAI',
        items: [
          'Pengurus IAI Jatim',
          'Badan IAI Jatim',
          'Majelis IAI Jatim'
        ]
      },
      {
        title: 'Sejarah',
        items: [
          'Sejarah IAI Jatim',
          'Daftar Ketua IAI Jatim'
        ]
      },
      {
        title: 'Peraturan IAI',
        items: [
          'AD-ART IAI Jatim',
          'Kode Etik',
          'Pedoman Hubungan'
        ]
      }
    ],
    'Anggota IAI': [
      {
        title: 'Informasi Keanggotaan',
        items: [
          'Dasar Keanggotaan',
          'Ketua Anggota',
          'Divisi Keanggotaan'
        ]
      }
    ]
  };

  
  const DesktopDropdownMenu = ({ title, menuItems }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveDropdown(title)}
    >
      <div 
        
        className={`flex items-center cursor-pointer hover:text-Peach ${activeDropdown === title ? 'text-Peach' : ''}`}
        onClick={() => setActiveDropdown(activeDropdown === title ? null : title)}
      >
        {title}
        <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === title ? 'rotate-180' : ''}`} />
      </div>
      {activeDropdown === title && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          onMouseLeave={() => {
            setActiveDropdown(null);
            setActiveNestedDropdown(null);
          }}
        >
          {menuItems.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="relative mb-4 last:mb-0"
              onMouseEnter={() => setActiveNestedDropdown(section.title)}
            >
              <div className="flex items-center justify-between font-semibold text-gray-900 mb-2">
                {section.title}
                <ChevronRightIcon className="h-4 w-4" />
              </div>
              {activeNestedDropdown === section.title && (
                <div className="absolute top-0 left-full ml-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  {section.items.map((item, itemIndex) => (
                    <NavLink
                      key={itemIndex}
                      to={`/${title.toLowerCase().replace(/ /g, '-')}/${section.title.toLowerCase().replace(/ /g, '-')}/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block py-1 text-gray-700 hover:text-Peach hover:bg-gray-100 rounded px-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto items-center justify-between p-4 lg:px-14">
        {/* Logo */}
        <div className=' justify-between'>
        <div className='flex justify-between p-4'>

        <NavLink to="/" className="flex items-center space-x-4">
          <img src="/LogoHMIF-removebg-preview.png" alt="IAI JATIM Logo" className="h-8 w-auto" />
          <h1 className={`font-semibold ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>IAI JATIM</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div>
        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
        </div>
        <div>

        <div className="hidden lg:flex justify-between  items-center text-center">
            {['Beranda', 'Berita dan Kegiatan'].map((item, index) => (
              <NavLink key={index} to={`/${item.toLowerCase().replace(/ /g, '-')}`} className={linkClasses}>
                {item}
              </NavLink>
            ))}
            
            {/* Dropdown Menus */}
            {Object.keys(dropdownMenus).map((title, index) => (
              <DesktopDropdownMenu 
                className={linkClasses}
                key={index} 
                title={title} 
                menuItems={dropdownMenus[title]} 
              />
            ))}

            {['Profesi Arsitek', 'Layanan Arsitek', 'Media IAI Jatim', 'Sayembara dan Penghargaan', 'Kemitraan', 'Kontak'].map((item, index) => (
              <NavLink key={index} to={`/${item.toLowerCase().replace(/ /g, '-')}`} className={linkClasses}>
                {item}
              </NavLink>
            ))}
          </div>
        </div>
        </div>


        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-screen max-w-sm bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src="/LogoHMIF-removebg-preview.png" alt="IAI JATIM Logo" className="h-8 w-auto" />
              </NavLink>
              <button className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {['Beranda', 'Galeri', 'About', 'Pengumuman'].map((item, index) => (
                <NavLink key={index} to={`/${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  {item}
                </NavLink>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
