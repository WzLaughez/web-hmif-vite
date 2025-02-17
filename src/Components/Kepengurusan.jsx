import React, { useState } from 'react';
import { FaUser, FaUsers, FaBriefcase } from 'react-icons/fa'; // Import icons
import HeroPage from '../layouts/HeroPage';
import {  FaHandHoldingUsd, FaBalanceScale, FaFlask, FaBullhorn } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { VscCode } from "react-icons/vsc";
const Kepengurusan = () => {
  const pengurus = {
    sekretaris: { nama: 'Nama Sekretaris', foto: null },
    ketua: { nama: 'Nama Ketua', foto: null }, // foto: null if no image
    bendahara: { nama: 'Nama Bendahara', foto: null },
  };
  const menteri = {
    MENKO_DAGRI: { nama: 'Menteri Koordinator Dalam Negeri', foto: null }, // foto: null if no image
    MENKO_LUGRI: { nama: 'Menteri Koordinator Luar Negeri dan Kerja Sama', foto: null },
  };

  const divisi = {
    ADINOVA: {
        icon: FaUsers,
        nama: 'Kementerian Pengelolaan Adaptasi dan Inovasi Organisasi',
        deskripsi: 'Pendorong transformasi dalam tubuh BEM, memastikan bahwa setiap perubahan yang terjadi mampu diadaptasi dengan baik, serta mendorong terobosan inovatif yang memperkuat struktur dan efektivitas organisasi. ADINOVA bertanggung jawab untuk merancang masa depan BEM yang lebih fleksibel dan responsif terhadap dinamika zaman.',
        ketua: { nama: 'Ketua ADINOVA', foto: null },
        anggota: [
          { nama: 'Anggota 1 SDM', foto: null },
          { nama: 'Anggota 2 SDM', foto: null },
          { nama: 'Anggota 2 SDM', foto: null },
          { nama: 'Anggota 2 SDM', foto: null },
          // ... more anggota
        ],
      },
    // ... other divisi (same structure as SDM)
    RIDIKPRO: {
      nama: 'Kementerian Riset dan Pendidikan Profesi',
      deskripsi: 'Pionir dalam memperluas cakrawala intelektual mahasiswa. Menyelenggarakan program riset berkualitas tinggi serta pendidikan profesi yang mendalam, RIDIKPRO berfokus pada pengembangan kompetensi akademik dan profesional mahasiswa, memberikan mereka bekal ilmu yang aplikatif dan relevan untuk menghadapi dunia medis. ',
      ketua: { nama: 'Ketua RIDIKPRO', foto: null },
      anggota: [
        { nama: 'Anggota 1 RIDIKPRO', foto: null },
        { nama: 'Anggota 1 RIDIKPRO', foto: null },
        { nama: 'Anggota 1 RIDIKPRO', foto: null },
        { nama: 'Anggota 1 RIDIKPRO', foto: null },
        // ... more anggota
      ],
    },
    INOVIA: {
      nama: 'Kementerian Inovasi dan Kreativitas',
      deskripsi: 'Menjadi wadah bagi setiap ide cemerlang dan gagasan kreatif dari mahasiswa. Melalui program-program inspiratif, kementerian ini mendorong mahasiswa untuk berani berpikir out of the box, menciptakan karya-karya inovatif yang mengubah perspektif dan mencetak perubahan positif dalam bidang kreatifitas.',
      ketua: { nama: 'Ketua INOVIA', foto: null },
      anggota: [
        { nama: 'Anggota 1 INOVIA', foto: null },
        { nama: 'Anggota 1 INOVIA', foto: null },
        { nama: 'Anggota 1 INOVIA', foto: null },
        { nama: 'Anggota 1 INOVIA', foto: null },
        // ... more anggota
      ],
    },
    AKSARA: {
      nama: 'Kementerian Advokasi dan Kajian Strategis untuk Aksi Nyata',
      deskripsi: 'Suara dari perubahan. Berfokus pada advokasi kebijakan yang memperjuangkan kepentingan mahasiswa, serta melakukan kajian strategis yang relevan untuk mengidentifikasi dan merealisasikan solusi atas isu-isu penting, menggerakkan aksi nyata yang berdampak luas, baik di dalam kampus maupun masyarakat.',
      ketua: { nama: 'Ketua AKSARA', foto: null },
      anggota: [
        { nama: 'Anggota 1 AKSARA', foto: null },
        { nama: 'Anggota 1 AKSARA', foto: null },
        { nama: 'Anggota 1 AKSARA', foto: null },
        { nama: 'Anggota 1 AKSARA', foto: null },
        // ... more anggota
      ],
    },
    PENGMAS: {
      nama: 'Kementerian Pengabdian Sosial dan Masyarakat',
      deskripsi: 'Pengmas berperan sebagai garda terdepan dalam mengaplikasikan ilmu dan keterampilan mahasiswa untuk kesejahteraan sosial. Melalui program pengabdian yang berfokus pada pemberdayaan masyarakat, kementerian ini berupaya menciptakan dampak sosial yang nyata, memberikan kontribusi positif bagi lingkungan sekitar, dan membangun sinergi dengan komunitas.',
      ketua: { nama: 'Ketua Pengmas', foto: null },
      anggota: [
        { nama: 'Anggota 1 Pengmas', foto: null },
        { nama: 'Anggota 1 Pengmas', foto: null },
        { nama: 'Anggota 1 Pengmas', foto: null },
        { nama: 'Anggota 1 Pengmas', foto: null },
        // ... more anggota
      ],
    },
    INFOKOM: {
      nama: 'Kementerian Informasi, Komunikasi dan Media',
      deskripsi: 'Sebagai pusat komunikasi yang dinamis, INFOKOM bertugas memastikan setiap pesan dari BEM tersampaikan dengan jelas dan efektif. Mereka mengelola seluruh saluran informasi, baik internal maupun eksternal, termasuk media sosial, website, dan berbagai platform digital, untuk menciptakan hubungan yang kuat antara BEM, mahasiswa, dan masyarakat ',
      ketua: { nama: 'Ketua Kominfo', foto: null },
      anggota: [
        { nama: 'Anggota 1 Kominfo', foto: null },
        { nama: 'Anggota 1 Kominfo', foto: null },
        { nama: 'Anggota 1 Kominfo', foto: null },
        { nama: 'Anggota 1 Kominfo', foto: null },
        // ... more anggota
      ],
    },
    KRENOVA: {
      nama: 'Kementerian Ekonomi Kreatif, Inovatif dan Kerjasama',
      deskripsi: 'KRENOVA hadir sebagai katalisator bagi ekosistem ekonomi kreatif di kampus. Dengan menggandeng berbagai pihak eksternal, kementerian ini mengembangkan potensi mahasiswa dalam dunia kreatif dan inovatif, membuka peluang kerjasama yang menguntungkan, dan membangun jejaring yang mendukung terciptanya solusi kreatif untuk tantangan masa depan.',
      ketua: { nama: 'Ketua KRENOVA', foto: null },
      anggota: [
        { nama: 'Anggota 1 KRENOVA', foto: null },
        { nama: 'Anggota 1 KRENOVA', foto: null },
        { nama: 'Anggota 1 KRENOVA', foto: null },
        { nama: 'Anggota 1 KRENOVA', foto: null },
        // ... more anggota
      ],
    },
    
  };


  const logo = {
    ADINOVA: <FaUsers size={20} />, 
    KRENOVA: <FaHandHoldingUsd size={20} />, 
    INOVIA: <FaBalanceScale size={20} />, 
    RIDIKPRO: <VscCode size={20} />, 
    INFOKOM: <FaBullhorn size={20} />,
    };
  const [activeDivisi, setActiveDivisi] = useState('ADINOVA');

  return (
    <>
      <HeroPage teks="Kepengurusan Kementrian"/>
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
        <nav className="mb-4">
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
            className="text-center p-2 md:p-8 m-4 md:m-4 rounded-lg shadow-md "
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