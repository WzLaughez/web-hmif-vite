import React, { useState } from 'react'
import HeroPage from '../layouts/HeroPage'

import pengumumanData from '../data/pengumuman.json'
import { Link } from 'react-router'
function Pengumuman() {
  
  const [pengumuman] = useState(pengumumanData.pengumuman)

  return (
    <>
      <HeroPage teks="Pengumuman"/>
      <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-6">Pengumuman</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pengumuman.map((item) => (
          <Link 
            to={`/pengumuman/${item.id}`} 
            key={item.id} 
            className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Pengumuman