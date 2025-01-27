import React from 'react'

const FotoKetua = () => {
  return (
    <div className="flex justify-between items-center space-x-6 p-6 ">
      <div className="w-1/3 text-right  p-4 rounded-lg ">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Pak Prabowo</h2>
        <p className="text-gray-600 mb-2">@</p>
        <h3 className="text-lg font-semibold text-green-700 mb-3">Ketua BEM UPNVJ</h3>
        <p className="text-sm text-gray-800 leading-relaxed">
          Selamat datang di Website Badan Eksekutif Mahasiswa UPN "Veteran" Jakarta Kabinet Sandya Karsa.
        </p>
      </div>
      <img 
        src="/Foto-removebg-preview.png" 
        alt="Centered image" 
        className="w-1/3 h-auto object-cover shadow-lg"
      />
      <div className="w-1/3 text-left  p-4 rounded-lg ">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Mas Gibran</h2>
      <p className="text-gray-600 mb-2">@fufufafa</p>
      <h3 className="text-lg font-semibold text-green-700 mb-3">Wakil Ketua BEM UPNVJ</h3>
      <p className="text-sm text-gray-800 leading-relaxed">
        Selamat datang di Website Badan Eksekutif Mahasiswa UPN "Veteran" Jakarta Kabinet Sandya Karsa.
      </p>
    </div>
    </div>
  )
}

export default FotoKetua