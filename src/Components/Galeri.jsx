import React, { useEffect, useState } from 'react'
import HeroPage from '../layouts/HeroPage';
import supabase from './admin/utils/supabaseClient'
import { Link } from 'react-router'
const Galeri = () => {
  const [galeri, setGaleri] = useState([])
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchGaleri = async () => {
        const { data, error } = await supabase
          .from('galeri')
          .select('*')
        if (error) console.error(error)
        else {
          console.log(data)
          setGaleri(data)
        setLoading(false);}
      }
  
      fetchGaleri()
    }, [])
  if (loading) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-2">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading data, please wait…</p>
    </div>
  )
}
  return (
    <>
    <HeroPage teks="Galeri"/>
    <div className="container mx-auto px-4 py-16 mt-16 max-w-6xl">
    <div className="flex flex-wrap justify-center gap-6">
{galeri.map((item) => (
     <Link 
     to='#'
     className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
   >
     <img 
       src={item.image_url} 
       alt={item.title} 
       className="w-full h-36 object-contain"
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