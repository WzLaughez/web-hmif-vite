import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const linkClasses = ({ isActive }) => [
    'relative',
    'px-2',
    'py-1',
    'transition-all',
    'duration-300',
    'before:absolute',
    'before:bottom-0',
    'before:left-0',
    'before:h-1',
    'before:w-full',
    'before:origin-center',
    'before:scale-x-0',
    'before:rounded-full',
    'before:bg-Peach',
    'before:transition-transform',
    'before:duration-300',
    'before:ease-out',
    'hover:before:scale-x-100',
    'after:absolute',
    'after:bottom-0',
    'after:left-0',
    'after:h-full',
    'after:w-full',
    'after:origin-bottom',
    'after:scale-y-0',
    'after:bg-Peach/20',
    'after:transition-transform',
    'after:duration-300',
    'after:ease-out',
    isActive ? 'text-white border-b-2 border-Peach' : (scrolled ? 'text-white' : 'text-white')
  ].join(' ')

  return (
    <header className={`fixed top-0 left-0 right-0 w-full font-sans z-50 transition-all duration-300 
      ${scrolled ? 'bg-ungu shadow-lg' : 'bg-transparent'}`}>
      <nav aria-label="Global" className="container mx-auto flex items-center justify-between p-4 lg:px-8 max-w-7xl">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <div className='flex items-center space-x-4'>
              <img
                alt="HMIF Logo"
                src="/Logo_Hijau.png"
                className="h-10 w-auto"
              />
              <div>

              <h1 className={`font-semibold ${scrolled ? 'text-white' : 'text-white'}`}>
                Badan Eksekutif Mahasiswa
              </h1>
              <h1 className={`${scrolled ? 'text-white' : 'text-white'}`}>
                Fakultas Kedokteran Universitas Negeri Malang
              </h1>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/galeri" className={linkClasses}>
            Galeri
          </NavLink>
          <NavLink to="/plan" className={linkClasses}>
            Plan
          </NavLink>
          <NavLink to="/pengumuman" className={linkClasses}>
            Pengumuman
          </NavLink>
        </div>
        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-Peach px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <img
                  alt="HMIF Logo"
                  src="/Logo_Hijau.png"
                  className="h-8 w-auto"
                />
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </NavLink>
                  <NavLink to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
            About
          </NavLink>
                  <NavLink
                    to="/galeri"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Galeri
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/pengumuman"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Pengumuman
                  </NavLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  )
}