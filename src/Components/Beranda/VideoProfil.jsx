import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const VideoProfil = () => {
  const videoId = "utZQ10UBXe8";
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false, // Run animation only once
    });
  }, []);
  const YouTubeEmbed = ({ videoId }) => (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
  return (
    <>

    <div className=' font-poppins' data-aos="fade-up" >

    <div className="" >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden" >
            <YouTubeEmbed videoId={videoId} />
            <div className="p-6">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt facere ea officiis 
   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoProfil