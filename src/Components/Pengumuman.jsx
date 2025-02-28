import React, { useState } from 'react'
import HeroPage from '../layouts/HeroPage'

import { Link } from 'react-router'
function Pengumuman() {
  
  const pengumuman = [
    {
      id: "1",
      title: "Pendaftaran Anggota Baru 2024",
      date: "15 Januari 2024",
      imageUrl: "/background_gaya.png",
      content: "Himpunan Mahasiswa Informatika (HMIF) UNTAN membuka pendaftaran anggota baru untuk periode 2024-2025. Terbuka untuk mahasiswa aktif Teknik Informatika yang berminat mengembangkan kemampuan dan berorganisasi."
    },
    {
      id: "2",
      title: "Workshop Teknologi Terbaru",
      date: "20 Februari 2024",
      imageUrl: "/background.png",
      content: "Ikuti workshop teknologi terbaru yang diselenggarakan oleh HMIF UNTAN untuk mengembangkan wawasan dan keterampilan dalam bidang teknologi."
    },
    {
      id: "3",
      title: "Hackathon HMIF 2024",
      date: "10 Maret 2024",
      imageUrl: "/Logo_Hijau.png",
      content: "Bergabunglah dalam Hackathon HMIF 2024 dan tunjukkan kreativitas serta kemampuan coding kamu dalam membangun solusi inovatif."
    }
  ];
  
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