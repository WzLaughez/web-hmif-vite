import React from 'react';

const GaleriHomeGrid = ({ images }) => {
    return (
        <div className="flex  gap-4 p-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default GaleriHomeGrid;