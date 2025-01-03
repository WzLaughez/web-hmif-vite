import React from 'react'
const Footer = () => {
  return (
    <>
<footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About Section */}
      <div>
        <h5 className="text-lg font-semibold mb-4">Tentang</h5>
        <p className="text-gray-300">
          Pemangkat adalah sebuah kecamatan di Kabupaten Sambas, Kalimantan Barat, Indonesia.
        </p>
      </div>

      {/* Explore Section */}
      <div>
        <h5 className="text-lg font-semibold mb-4">Jelajahi</h5>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-300 hover:text-white transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="/profile-desa" className="text-gray-300 hover:text-white transition">
              Profil Desa
            </a>
          </li>
          <li>
            <a href="/layanan-publik" className="text-gray-300 hover:text-white transition">
              Layanan Publik
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h5 className="text-lg font-semibold mb-4">Hubungi Kami</h5>
        <p className="text-gray-300">
          <span className="block">
            📞 0812-3456-7890
          </span>
          <span className="block">
            ✉️ pemangkat@example.com
          </span>
          <span className="block">
            📍 Sambas, Kalimantan Barat
          </span>
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-12.33 9.8v-6.9H7.08v-2.9h2.58V9.94c0-2.55 1.51-3.95 3.82-3.95 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.9h-2.32v6.9A10.05 10.05 0 0022 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56c-.89.39-1.85.66-2.86.77a4.94 4.94 0 002.17-2.72c-.94.55-1.99.95-3.1 1.17a4.92 4.92 0 00-8.38 4.49c-4.09-.2-7.72-2.16-10.15-5.13a4.93 4.93 0 001.52 6.57c-.83-.03-1.61-.25-2.29-.63v.06a4.93 4.93 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.43A9.86 9.86 0 010 20.26a13.94 13.94 0 007.55 2.21c9.06 0 14.01-7.51 14.01-14.01 0-.21-.01-.42-.02-.63A10.04 10.04 0 0024 4.56z" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16C6.44 2.16 2.16 6.44 2.16 12S6.44 21.84 12 21.84 21.84 17.56 21.84 12 17.56 2.16 12 2.16zm0 19.2c-5.26 0-9.6-4.34-9.6-9.6s4.34-9.6 9.6-9.6 9.6 4.34 9.6 9.6-4.34 9.6-9.6 9.6zm1.92-13.92h-1.2c-2.4 0-3.6 1.2-3.6 3.6v1.2h-1.92V12h1.92v6.72h2.88V12h1.92l.48-2.88h-2.4v-1.2c0-.96.48-1.2 1.2-1.2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
      <p className="text-gray-400">&copy; 2024 Kecamatan Pemangkat. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer