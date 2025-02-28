import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="relative w-full">
      {/* Header */}
      
      
      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10 ">
        <div className="max-w-6xl mx-auto text-gray-600">
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* First Box */}
            <div className=" shadow-lg rounded-lg p-6 h-full" data-aos="flip-right">
              <div className="prose max-w-none">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-customBlue2">
            Visi 
          </h1>
        </div>
            
                <p className="">Terwujudnya Badan Eksekutif Mahasiswa FK UM sebagai lembaga yang progresif, harmonis,
dan adaptif, dengan semangat kebermanfaatan yang berakar pada kebutuhan dan pengembangan
dengan berlandaskan ketakwaan dan kekeluargaan.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div className="shadow-lg rounded-lg p-6 h-full" data-aos="flip-left" >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-customBlue2">
            Misi
          </h1>
          </div>
              <div className="prose max-w-none">
                <ol className="list-decimal pl-6">
                  <li className="mb-2">
                  Menciptakan lingkungan yang senantiasa beriman dan bertakwa terhadap tuhan yang
                  maha esa dengan toleransi yang kuat dan kebersamaan
                  </li>
                  <li className="mb-2">
                  Membangun Iklim Organisasi yang Hidup dan Adaptif dengan menciptakan lingkungan
                  yang harmonis, progresif, dan mampu berkembang dengan iklim yang dinamis.
                  </li>
                  <li className="mb-2">
                  Menghadirkan Pengabdian yang Bernyawa dengan Melaksanakan program yang
                  berdampak nyata bagi masyarakat, serta membangkitkan Kepedulian lingkungan
                  melalui Pencerdasan aktual.
                  </li>
                  <li className="mb-2">
                  Membangkitkan kesadaran kolektif dan mendorong tindakan nyata melalui penyampaian
                  isu yang tajam, relevan, dan bermakna
                  </li>
                  <li className="mb-2">
                  Menghidupkan Potensi prestasi dengan Wadah yang Inspiratif dalam pemberian ruang
                  bagi mahasiswa untuk mengeksplorasi minat, bakat, dan prestasi mereka hingga ke
                  puncak
                  </li>
                  <li className="mb-2">
                  Membangkitkan kesadaran kolektif dan mendorong tindakan nyata melalui penyampaian
                  isu yang tajam, relevan, dan bermakna
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;