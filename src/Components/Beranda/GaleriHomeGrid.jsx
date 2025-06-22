import React from 'react';

const GaleriHomeGrid = ({ images }) => {
  return (
    <div className="grid gap-4 p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <img 
            src={image.image_url} 
            alt={image.title} 
            className="w-full aspect-square object-cover bg-gray-200 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-white text-center text-lg font-semibold p-2">
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleriHomeGrid;
