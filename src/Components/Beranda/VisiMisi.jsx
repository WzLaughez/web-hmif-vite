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
        <div className="max-w-7xl mx-auto">
          
        <div className="rounded-lg  mb-6 h-full flex justify-center">
          <div className="prose w-full max-w-6xl "> 
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          {/* <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-pe pb-2 border-b-2 border-customBlue2">
            Tentang HMIF
          </h1> */}
        </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nesciunt! Obcaecati reprehenderit facere similique nesciunt quisquam incidunt sunt magni tenetur eaque ullam dicta accusantium saepe eius ad veritatis vel maxime maiores, magnam doloremque at corrupti assumenda quae. Nemo est illo quidem error dicta tenetur hic, aperiam nobis iure. Nulla, aliquam?
            </p>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* First Box */}
            <div className=" shadow-lg rounded-lg p-6 h-full" data-aos="flip-right">
              <div className="prose max-w-none">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-customBlue2">
            Visi 
          </h1>
        </div>
            
                <p className="">
                Mewujudkan Himpunan Mahasiswa Informatika UNTAN sebagai organisasi yang memiliki pribadi-pribadi yang unggul dan profesional.
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
                    Menjadikan HMIF sebagai sarana untuk meningkatkan kualitas pribadi dengan jiwa tanggung jawab dalam menjalankan amanah.
                  </li>
                  <li className="mb-2">
                    Menciptakan HMIF FT UNTAN sebagai wadah untuk menampung dan menyalurkan aspirasi seluruh anggotanya.
                  </li>
                  <li className="mb-2">
                    Meningkatkan rasa kebersamaan dan kekeluargaan di antara seluruh mahasiswa Informatika UNTAN.
                  </li>
                  <li className="mb-2">
                    Berperan aktif dalam mengembangkan dan memajukan teknologi informasi di tingkat global.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* <div className=" rounded-lg shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] p-6 mt-6 h-full flex justify-center">
            <div className="prose w-full max-w-5xl"> 
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-customBlue2">
            Visi
          </h1>
        </div>
        <div className="prose max-w-none">
        Mewujudkan Himpunan Mahasiswa Informatika UNTAN sebagai organisasi yang memiliki pribadi-pribadi yang unggul dan profesional.
        </div>
            </div>
          </div>
          <div className=" rounded-lg shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] p-6 mt-6 h-full flex justify-center">
            <div className="prose w-full max-w-5xl"> 
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-2 border-b-2 border-customBlue2">
            Misi
          </h1>
        </div>
        <div className="prose max-w-none">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Menjadikan HMIF sebagai sarana untuk meningkatkan kualitas pribadi dengan jiwa tanggung jawab dalam menjalankan amanah.</li>
            <li>Menciptakan HMIF FT UNTAN sebagai wadah untuk menampung dan menyalurkan aspirasi seluruh anggotanya.</li>
            <li>Meningkatkan rasa kebersamaan dan kekeluargaan di antara seluruh mahasiswa Informatika UNTAN.</li>
            <li>Berperan aktif dalam mengembangkan dan memajukan teknologi informasi di tingkat global.</li>
          </ol>
        </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default VisiMisi;