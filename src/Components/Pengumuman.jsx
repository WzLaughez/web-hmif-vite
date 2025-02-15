import React, { useState } from 'react'
import HeroPage from '../layouts/HeroPage'

import pengumumanData from '../data/pengumuman.json'
import { Link } from 'react-router'
function Pengumuman() {
  
  const [pengumuman] = useState(pengumumanData.pengumuman)

  return (
    <>
      <HeroPage teks="Pengumuman"/>
      <div className="container mx-auto px-4 py-16 mt-16 max-w-6xl">
      <div className="flex flex-wrap justify-center gap-6">
  {pengumuman.map((item) => (
    <Link 
      to={`/pengumuman/${item.id}`} 
      key={item.id} 
      className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-36 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-gray-500 text-sm mb-2">{item.date}</div>
        <div className="flex flex-col">

        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{item.title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {`${item.content.substring(0, 100)}...`}
        </p>
        </div>
      </div>
    </Link>
  ))}
</div>
    </div>
    </>
  )
}

export default Pengumuman