import React from 'react'
import { useParams, Link } from 'react-router-dom'
import HeroPage from '../../layouts/HeroPage'
import TitlePengumuman from './TitlePengumuman'

function PengumumanDetail() {
  const { id } = useParams()
  const pengumuman = [
    {
      id: "1",
      title: "Pendaftaran Anggota Baru 2024",
      date: "15 Januari 2024",
      imageUrl: "/hmn4.jpg",
      content: "Himpunan Mahasiswa Informatika (HMIF) UNTAN membuka pendaftaran anggota baru untuk periode 2024-2025. Terbuka untuk mahasiswa aktif Teknik Informatika yang berminat mengembangkan kemampuan dan berorganisasi."
    },
    {
      id: "2",
      title: "Workshop Teknologi Terbaru",
      date: "20 Februari 2024",
      imageUrl: "/hmn4.jpg",
      content: "Ikuti workshop teknologi terbaru yang diselenggarakan oleh HMIF UNTAN untuk mengembangkan wawasan dan keterampilan dalam bidang teknologi."
    },
    {
      id: "3",
      title: "Hackathon HMIF 2024",
      date: "10 Maret 2024",
      imageUrl: "/hmn4.jpg",
      content: "Bergabunglah dalam Hackathon HMIF 2024 dan tunjukkan kreativitas serta kemampuan coding kamu dalam membangun solusi inovatif."
    }
  ];
  // const pengumuman = pengumumanData.pengumuman.find(item => item.id === id)
  
  // if (!pengumuman) {
  //   return (
  //     <div className="container mx-auto mt-20 text-center">
  //       <h1 className="text-3xl mb-4">Pengumuman Tidak Ditemukan</h1>
  //       <Link to="/pengumuman" className="text-blue-500 hover:underline">
  //         Kembali ke Daftar Pengumuman
  //       </Link>
  //     </div>
  //   )
  // }

  return (
  <>
    <TitlePengumuman/>
    <div className="container mx-auto px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            to="/pengumuman" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Kembali ke Daftar Pengumuman
          </Link>
        </div>
        <img 
          src={pengumuman.imageUrl} 
          alt={pengumuman.title} 
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{pengumuman.title}</h1>
        <p className="text-gray-500 mb-4">{pengumuman.date}</p>
        <div className="prose lg:prose-xl">
          <p>{pengumuman.content}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default PengumumanDetail