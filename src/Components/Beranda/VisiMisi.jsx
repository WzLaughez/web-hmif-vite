import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false, // Run animation only once
    });
  }, []);
  return (
    <>
    <div data-aos = "fade-up">

    <header className="bg-white  items-center flex" >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 ">
            <h1 className="py-1 border-b-2 text-3xl font-bold tracking-tight text-gray-900 ">Video Profil</h1>
          </div>
    </header>
    <div className='shadow flex justify-center p-10 m-10  space-x-24 h-96 '>
      <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-4 ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt facere ea officiis deserunt quas doloremque nobis dignissimos quam magnam debitis perspiciatis consectetur eaque voluptas, itaque facilis necessitatibus inventore laudantium?
              </p>
            </div>
      </main>
      <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam delectus unde autem adipisci, quibusdam velit ipsa quo fuga, repudiandae possimus! Saepe, ipsam! Quis fuga ut laboriosam a doloremque eius!
            </div>
      </main>
    </div>
    </div>
    </>
  )
}

export default VisiMisi