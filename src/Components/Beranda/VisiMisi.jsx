import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative min-h-screen p-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-transparent via-Peach to-transparent overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-[#A5D6A7]/30 rounded-full blur-3xl animate-ping duration-3000"></div>
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-[#A5D6A7]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#B2DFDB]/30 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#A5D6A7]/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-[#A5D6A7]/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) translateY(0); }
            50% { transform: translate(-50%, -50%) translateY(-20px); }
          }
        `}</style>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-5 pb-8" data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#9C27B0]">
              <span className="bg-gradient-to-r from-ungu via-abu to-ungu bg-clip-text text-transparent">
                Visi & Misi
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] mx-auto rounded-full mb-3"></div>
            <p className="text-lg text-ungu max-w-3xl mx-auto leading-relaxed">
              Fondasi kuat yang mengarahkan setiap langkah perjalanan Kabinet Arunika Nawasena
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="group" data-aos="fade-right" data-aos-delay="200">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-[#9C27B0]/20 h-full transform group-hover:-translate-y-2 transition-all duration-500">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-[#A5D6A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#9C27B0] mb-2 group-hover:text-[#424242] transition-colors duration-300">
                      Visi
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] mx-auto rounded-full"></div>
                  </div>

                  <div className="text-center">
                    <blockquote className="text-[#424242] text-lg lg:text-xl leading-relaxed font-medium italic relative">
                      <span className="text-6xl text-[#9C27B0]/30 absolute -top-4 -left-2 font-serif">"</span>
                      Terwujudnya Badan Eksekutif Mahasiswa FK UM sebagai lembaga yang progresif, harmonis, dan adaptif, dengan semangat kebermanfaatan yang berakar pada kebutuhan dan pengembangan dengan berlandaskan ketakwaan dan kekeluargaan.
                      <span className="text-6xl text-[#9C27B0]/30 absolute -bottom-8 -right-2 font-serif">"</span>
                    </blockquote>
                  </div>

                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="w-8 h-8 border-2 border-[#9C27B0] rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <div className="w-6 h-6 bg-[#9C27B0] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Misi Card */}
            <div className="group" data-aos="fade-left" data-aos-delay="400">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-[#9C27B0]/20 h-full transform group-hover:-translate-y-2 transition-all duration-500">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-[#A5D6A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#9C27B0] mb-2 group-hover:text-[#424242] transition-colors duration-300">
                      Misi
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] mx-auto rounded-full"></div>
                  </div>

                  <div className="space-y-4">
                    {["Menciptakan lingkungan yang senantiasa beriman dan bertakwa terhadap tuhan yang maha esa dengan toleransi yang kuat dan kebersamaan",
                      "Membangun Iklim Organisasi yang Hidup dan Adaptif dengan menciptakan lingkungan yang harmonis, progresif, dan mampu berkembang dengan iklim yang dinamis",
                      "Menghadirkan Pengabdian yang Bernyawa dengan Melaksanakan program yang berdampak nyata bagi masyarakat, serta membangkitkan Kepedulian lingkungan melalui Pencerdasan aktual",
                      "Membangkitkan kesadaran kolektif dan mendorong tindakan nyata melalui penyampaian isu yang tajam, relevan, dan bermakna",
                      "Menghidupkan Potensi prestasi dengan Wadah yang Inspiratif dalam pemberian ruang bagi mahasiswa untuk mengeksplorasi minat, bakat, dan prestasi mereka hingga ke puncak"]
                      .map((misi, index) => (
                        <div key={index} className="flex items-start gap-4 group/item" data-aos="fade-up" data-aos-delay={600 + (index * 100)}>
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#9C27B0] to-[#9C27B0] rounded-full flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-[#A5D6A7] font-bold text-sm">{index + 1}</span>
                            </div>
                          </div>
                          <p className="text-[#424242] leading-relaxed group-hover/item:text-[#424242] transition-colors duration-300">
                            {misi}
                          </p>
                        </div>
                    ))}
                  </div>

                  <div className="absolute top-4 left-4 opacity-20">
                    <div className="w-8 h-8 border-2 border-[#9C27B0] rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-20">
                    <div className="w-6 h-6 bg-[#9C27B0] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default VisiMisi;