import React, { useState, useEffect } from 'react';
import { FaUser, FaUsers, FaBriefcase } from 'react-icons/fa'; // Import icons
import {  FaHandHoldingUsd, FaBalanceScale, FaFlask, FaBullhorn } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import supabase from '../admin/utils/supabaseClient';
const Kepengurusan = () => {
  const [pengurus, setPengurus] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchPengurus = async () => {
      const { data, error } = await supabase.from('pengurus_utama').select('*').order('jabatan', { ascending: true });
      if (error) {
        console.error(error);
      } else {
        setPengurus(data); // data = [{jabatan, nama, foto_url}, ...]
      }
      setLoading(false);
    };
    fetchPengurus();
  }, []);
  const [menteri, setMenteri] = useState([]);
  useEffect(() => {
    const fetchMenteri = async () => {
      const { data, error } = await supabase.from('menteri').select('*');
      if (error) {
        console.error(error);
      } else {
        setMenteri(data); 
      }
    };
    fetchMenteri();
  }, []);
  
  const [divisiData, setDivisiData] = useState([]);
  useEffect(() => {
    const fetchDivisi = async () => {
      const { data, error } = await supabase
        .from('divisi')
        .select(`*, anggota_divisi(*)`); // ambil relasi anggota_divisi sekaligus

      if (error) {
        console.error(error);
      } else {
        setDivisiData(data); // simpan ke state
      }
    };
    fetchDivisi();
  }, []);


  const logo = {
    ADINOVA: <FaUsers size={20} />, 
    KRENOVA: <FaHandHoldingUsd size={20} />, 
    INOVIA: <FaBalanceScale size={20} />, 
    AKSARA: <FaBalanceScale size={20} />, 
    PENGMAS: <FaBalanceScale size={20} />, 
    RIDIKPRO: <VscCode size={20} />, 
    INFOKOM: <FaBullhorn size={20} />,
    };
  const [activeDivisi, setActiveDivisi] = useState('ADINOVA');
  const currentDivisi = divisiData.find((d) => d.kode_divisi === activeDivisi);
  
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
      <div className="container mx-auto md:p-8 max-w-6xl">
        {/* Pengurus Inti - Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 mt-4"
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
      {person.foto_url ? (
        <img src={person.foto_url} alt={person.nama} className="mx-auto mb-2 w-32 h-32 md:w-40 md:h-40 object-contain"/>
      ) : (
        <FaUser className="h-32 w-32 mx-auto mb-2 text-gray-500" /> // Icon if no photo
      )}
      <h3 className="font-bold">{person.jabatan}</h3>
      <p>{person.nama}</p>
    </div>
    
        </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Object.values(menteri).map((person, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div key={index} className="bg-white  rounded-lg shadow-md p-4 w-48 text-center">
      {person.foto_url ? (
        <img src={person.foto_url} alt={person.nama} className="mx-auto mb-2 w-32 h-32 md:w-40 md:h-40 object-contain"/>
      ) : (
        <FaUser className="h-32 w-32 mx-auto mb-2 text-gray-500" /> // Icon if no photo
      )}
      <h3 className="font-bold">{person.jabatan}</h3>
      <p>{person.nama}</p>
    </div>
    
        </motion.div>
          ))}
        </motion.div>

        {/* Responsive Navbar Divisi */}
        {/* Responsive Navbar Divisi */}
<nav className="mb-4">
  <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
    {divisiData.map((divisi) => (
      <li
        key={divisi.kode_divisi}
        className={`group relative px-3 py-1 md:px-4 md:py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-sm md:text-base ${
          activeDivisi === divisi.kode_divisi
            ? 'bg-gray-200 text-gray-800 font-semibold shadow-inner'
            : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800 hover:shadow-md'
        }`}
        onClick={() => setActiveDivisi(divisi.kode_divisi)}
      >
        <span className="flex items-center gap-2 relative">
          <span className="transition-transform duration-300 group-hover:scale-110">
            {logo[divisi.kode_divisi] /* tampilkan icon sesuai mapping */}
          </span>
          <span className="transition-all duration-300 origin-left">
            {divisi.kode_divisi}
          </span>
        </span>

        {/* Animated underline */}
        {activeDivisi !== divisi.kode_divisi && (
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
        )}
      </li>
    ))}
  </ul>
</nav>


        {/* Responsive Detail Divisi */}
        <AnimatePresence mode='wait'>
  {currentDivisi && (
    <motion.div
      key={currentDivisi.id}
      className="text-center p-2 md:p-8 m-4 md:m-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b-2 border-customBlue2">
        {currentDivisi.nama}
      </h2>
      <p className="mb-6 max-w-3xl mx-auto text-sm md:text-base">
        {currentDivisi.deskripsi}
      </p>

      {/* Ketua Divisi */}
      <motion.div className="mb-8">
        {currentDivisi.ketua_foto_url ? (
          <img
            src={currentDivisi.ketua_foto_url}
            alt={currentDivisi.ketua_nama}
            className="mx-auto mb-2 w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        ) : (
          <FaBriefcase className="h-24 w-24 md:h-40 md:w-40 mx-auto mb-2 text-gray-500" />
        )}
        <h3 className="font-semibold text-sm md:text-base">
          {currentDivisi.ketua_nama}
        </h3>
      </motion.div>

      {/* Anggota Divisi */}
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {currentDivisi.anggota_divisi.map((anggota) => (
          <motion.div
            key={anggota.id}
            className="bg-white rounded-lg shadow-md p-2 md:p-4 w-full max-w-xs mx-auto text-center"
          >
            {anggota.foto_url ? (
              <img
                src={anggota.foto_url}
                alt={anggota.nama}
                className="mx-auto mb-2 w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            ) : (
              <FaUsers className="h-16 w-16 md:h-24 md:w-24 mx-auto mb-2 text-gray-500" />
            )}
            <h3 className="font-semibold text-xs md:text-sm">
              {anggota.nama}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </>
  );
};

export default Kepengurusan;