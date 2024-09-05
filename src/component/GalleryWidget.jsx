import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const GalleryWidget = () => {
  const [images, setImages] = useState([
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/Apple_event.png?size=690:388',
    'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/09/2018-chevrolet-camaro-zl1.jpg?crop=0.673xw:0.552xh;0.143xw,0.287xh&resize=980:*',
    'https://m.media-amazon.com/images/I/41vTPfO9yrL._SY300_SX300_QL70_FMwebp_.jpg',
  ]);

  // Function to add images from device
  const addImage = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      const newImage = URL.createObjectURL(file); // Create a temporary URL for the image
      setImages([...images, newImage]); // Add new image to the gallery
    }
  };

  return (
    <div className="bg-gray-700 shadow-lg rounded-lg p-6">
     
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="text-xl bg-gray-600 text-white font-bold p-2 px-4 rounded">Gallery</h3>
       
        <div className="flex items-center space-x-4">
         
          <label className="text-xl bg-gray-600 text-white font-bold p-2 px-4 rounded cursor-pointer">
            +ADD IMAGE
            <input
              type="file"
              accept="image/*"
              onChange={addImage}
              className="hidden" // Hide the default file input
            />
          </label>

          {/* Left arrow button */}
          <button className="bg-gray-600 text-white rounded-full p-2">
            <FaArrowLeft className="text-xl" />
          </button>

          {/* Right arrow button */}
          <button className="bg-gray-600 text-white rounded-full p-2">
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="mt-4 flex-wrap grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="h-20 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
