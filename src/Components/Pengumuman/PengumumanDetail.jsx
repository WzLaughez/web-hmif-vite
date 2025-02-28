import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TitlePengumuman from './TitlePengumuman'

function PengumumanDetail() {
  const { id } = useParams(); // Get the id from the URL params

  const pengumuman = [
    {
      id: "1",
      title: "Pendaftaran Anggota Baru 2024",
      date: "15 Januari 2024",
      imageUrl: "/background_gaya.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "2",
      title: "Workshop Teknologi Terbaru",
      date: "20 Februari 2024",
      imageUrl: "/background.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "3",
      title: "Hackathon HMIF 2024",
      date: "10 Maret 2024",
      imageUrl: "/Logo_Hijau.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const selectedPengumuman = pengumuman.find(item => item.id === id);

  if (!selectedPengumuman) {
    return <p className="text-center text-gray-500 mt-12">Pengumuman tidak ditemukan.</p>;
  }

  return (
    <>
      <TitlePengumuman />
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-4xl mx-auto items-center ">
          <div className="mb-6">
            <Link 
              to="/pengumuman" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Kembali ke Daftar Pengumuman
            </Link>
          </div>
          <img 
            src={selectedPengumuman.imageUrl} 
            alt={selectedPengumuman.title} 
            className="w-max h-96 object-cover rounded-lg mb-6 items-center"
          />
          <h1 className="text-4xl font-bold mb-4">{selectedPengumuman.title}</h1>
          <p className="text-gray-500 mb-4">{selectedPengumuman.date}</p>
          <div className="prose lg:prose-xl">
            <p>{selectedPengumuman.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PengumumanDetail;
