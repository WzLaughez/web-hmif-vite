import React from 'react'

const HeroSection = () => {
  return (
  <div className="relative min-h-screen w-full font-poppins">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="src\assets\pelepasan.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-blue-700/60 to-blue-800" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
        Himpunan Mahasiswa Informatika 
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
        Fakultas Teknik
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
        Universitas Tanjungpura
      </h1>
      {/* <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl">
        Watch anywhere. Cancel anytime.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded text-xl font-semibold transition-colors duration-300">
        Get Started
      </button> */}
    </div>
  </div>
  )
}

export default HeroSection