import React from 'react'
import HeroPage from '../layouts/HeroPage';

import { Link } from 'react-router'
const Galeri = () => {
  const images = [
    { src: '/background_gaya.png', title: 'Image 1' },
    { src: '/background.png', title: 'Image 2' },
    { src: '/ketua.png', title: 'Image 3' },
    { src: '/Logo_Hijau.png', title: 'Image 3' },
    { src: '/Logo_Kabinet.png', title: 'Image 3' },
    // Add more images
  ];
  return (
    <>
    <HeroPage teks="Galeri"/>
    <div className="container mx-auto px-4 py-16 mt-16 max-w-6xl">
    <div className="flex flex-wrap justify-center gap-6">
{images.map((item) => (
     <Link 
     to='#'
     className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
   >
     <img 
       src={item.src} 
       alt={item.title} 
       className="w-full h-36 object-cover"
     />
     <div className="p-5 flex flex-col flex-grow">
       <div className="flex flex-col">

       <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{item.title}</h3>
       
       </div>
     </div>
   </Link>
))}
</div>
  </div>
  </>
  )
}

export default Galeri