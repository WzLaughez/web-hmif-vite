import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GaleriHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="relative w-full">
      {/* Header */}
      <header className="bg-white w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2">
            Galeri
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* First Box */}
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt facere ea officiis deserunt quas doloremque nobis dignissimos quam magnam debitis perspiciatis consectetur eaque voluptas, itaque facilis necessitatibus inventore laudantium?
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam delectus unde autem adipisci, quibusdam velit ipsa quo fuga, repudiandae possimus! Saepe, ipsam! Quis fuga ut laboriosam a doloremque eius!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriHome;