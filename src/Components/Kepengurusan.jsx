import React, { useState } from 'react';
import { FaUser, FaUsers, FaBriefcase } from 'react-icons/fa'; // Import icons
import HeroPage from '../layouts/HeroPage';
import {  FaHandHoldingUsd, FaBalanceScale, FaFlask, FaBullhorn } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { VscCode } from "react-icons/vsc";
const Kepengurusan = () => {
  const pengurus = {
    ketua: { nama: 'Nama Ketua', foto: null }, // foto: null if no image
    sekretaris: { nama: 'Nama Sekretaris', foto: null },
    bendahara: { nama: 'Nama Bendahara', foto: null },
  };

  const divisi = {
    SDM: {
      icon: FaUsers,
      nama: 'Divisi Sumber Daya Mahasiswa',
      deskripsi: 'Divisi SDM bertujuan untuk Membina dan meningkatkan kemampuan anggota dalam memiliki kerangka berpikir dengan tujuan pengembangan dan kesinambungan organisasi untuk mempersiapkan lulusan yang berkompeten.',
      ketua: { nama: 'Ketua SDM', foto: null },
      anggota: [
        { nama: 'Anggota 1 SDM', foto: null },
        { nama: 'Anggota 2 SDM', foto: null },
        // ... more anggota
      ],
    },
    // ... other divisi (same structure as SDM)
        Usdan: {
      nama: 'Divisi Usaha Dana, Profesi dan Jasa',
      deskripsi: 'Divisi UDPJ bertujuan untuk Menjalin hubungan baik dengan mitra kerja dan mengusahakan pendanaan organisasi dengan jalan yang halal serta Mengembangkan potensi keahlian keprofesian anggota HMIF FT UNTAN dan menyediakan sumber daya yang berkompeten di bidang Informatika.',
      ketua: { nama: 'Ketua Usdan', foto: null },
      anggota: [
        { nama: 'Anggota 1 Usdan', foto: null },
        // ... more anggota
      ],
    },
    Kesrut: {
      nama: 'Divisi Kesejahteraan Rumah Tangga',
      deskripsi: 'Divisi KESRUT bertujuan untuk Melakukan pembenahan, pengembangan dan pemeliharaan sarana dan prasarana yang ada di lingkungan sekretariat HMIF FT UNTAN dan Menjadikan HMIF FT UNTAN sebagai pusat aktivitas Studi mahasiswa Jurusan Informatika Fakultas Teknik Universitas Tanjungpura yang ideal.',
      ketua: { nama: 'Ketua Kesrut', foto: null },
      anggota: [
        { nama: 'Anggota 1 Kesrut', foto: null },
        // ... more anggota
      ],
    },
    Penristek: {
      nama: 'Divisi Pendidikan Riset dan Teknologo',
      deskripsi: 'Divisi PENRISTEK bertujuan untuk Membentuk kader yang memiliki hard skill dan soft skill serta Menjadi wadah pusat studi ilmiah di bidang IT.',
      ketua: { nama: 'Ketua Penristek', foto: null },
      anggota: [
        { nama: 'Anggota 1 Penristek', foto: null },
        // ... more anggota
      ],
    },
    Kominfo: {
      nama: 'Divisi Komunikasi dan Informasi',
      deskripsi: 'Divisi KOMINFO bertujuan untuk Mensosialisasikan dan meningkatkan eksistensi HMIF FT UNTAN.',
      ketua: { nama: 'Ketua Kominfo', foto: null },
      anggota: [
        { nama: 'Anggota 1 Kominfo', foto: null },
        // ... more anggota
      ],
    },
    
  };


  const logo = {
    SDM: <FaUsers size={20} />, 
    Usdan: <FaHandHoldingUsd size={20} />, 
    Kesrut: <FaBalanceScale size={20} />, 
    Penristek: <VscCode size={20} />, 
    Kominfo: <FaBullhorn size={20} />,
    };
  const [activeDivisi, setActiveDivisi] = useState('SDM');

  return (
    <>
      <HeroPage teks="Struktur Kepengurusan"/>
      <div className="container mx-auto p-4 md:p-8">
        {/* Pengurus Inti - Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Object.values(pengurus).map((person, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div key={index} className="bg-white  rounded-lg shadow-md p-4 w-48 text-center">
      {person.foto ? (
        <img src={person.foto} alt={person.nama} className="rounded-full h-32 w-32 mx-auto mb-2 object-cover" />
      ) : (
        <FaUser className="h-32 w-32 mx-auto mb-2 text-gray-500" /> // Icon if no photo
      )}
      <h3 className="font-semibold">{person.nama}</h3>
    </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsive Navbar Divisi */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.keys(divisi).map((divisiName) => (
              <li
                key={divisiName}
                className={`group relative px-3 py-1 md:px-4 md:py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-sm md:text-base ${
                  activeDivisi === divisiName
                    ? 'bg-gray-200 text-gray-800 font-semibold shadow-inner'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800 hover:shadow-md'
                }`}
                onClick={() => setActiveDivisi(divisiName)}
              >
                <span className="flex items-center gap-2 relative">
          <span className="transition-transform duration-300 group-hover:scale-110">
            {logo[divisiName]}
          </span>
          <span className="transition-all duration-300 origin-left">
            {divisiName}
          </span>
        </span>
        
        {/* Animated underline */}
        {activeDivisi !== divisiName && (
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
        )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Responsive Detail Divisi */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeDivisi}
            className="text-center p-4 md:p-8 m-4 md:m-8  rounded-lg shadow-md "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b-2 border-customBlue2">{divisi[activeDivisi].nama}</h2>
            <p className="mb-6 max-w-3xl mx-auto text-sm md:text-base">{divisi[activeDivisi].deskripsi}</p>

            {/* Responsive Ketua Divisi */}
            <motion.div className="mb-8">
              {divisi[activeDivisi].ketua.foto ? (
                <img
                  src={divisi[activeDivisi].ketua.foto}
                  alt={divisi[activeDivisi].ketua.nama}
                  className="rounded-full h-24 md:h-40 md:w-40 mx-auto object-cover mb-2"
                />
              ) : (
                <FaBriefcase className="h-24 w-24 md:h-40 md:w-40 mx-auto mb-2 text-gray-500" />
              )}
              <h3 className="font-semibold text-sm md:text-base">{divisi[activeDivisi].ketua.nama}</h3>
            </motion.div>

            {/* Responsive Anggota Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
            >
              {divisi[activeDivisi].anggota.map((anggota, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-2 md:p-4 w-full max-w-xs mx-auto text-center"
                >
                  {anggota.foto ? (
                    <img 
                      src={anggota.foto} 
                      alt={anggota.nama} 
                      className="rounded-full h-16 w-16 md:h-24 md:w-24 mx-auto mb-2 object-cover"
                    />
                  ) : (
                    <FaUsers className="h-16 w-16 md:h-24 md:w-24 mx-auto mb-2 text-gray-500" />
                  )}
                  <h3 className="font-semibold text-xs md:text-sm">{anggota.nama}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Kepengurusan;