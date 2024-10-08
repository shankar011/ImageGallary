import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const GalleryWidget = () => {
  const [images, setImages] = useState([
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/Apple_event.png?size=690:388',
    'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/09/2018-chevrolet-camaro-zl1.jpg?crop=0.673xw:0.552xh;0.143xw,0.287xh&resize=980:*',
    'https://m.media-amazon.com/images/I/41vTPfO9yrL._SY300_SX300_QL70_FMwebp_.jpg',
  ]);

 
  const addImage = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const newImage = URL.createObjectURL(file); 
      setImages([...images, newImage]); 
    }
  };

  return (
    <div className="bg-customGray shadow-lg rounded-lg p-6">
     
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="text-xl bg-gray-600 text-white font-bold p-2 px-4 rounded">Gallery</h3>
       
        <div className="flex items-center space-x-4">
         
          <label className="text-xl bg-gray-600 text-white font-bold p-2 px-4 rounded cursor-pointer">
            +ADD IMAGE
            <input
              type="file"
              accept="image/*"
              onChange={addImage}
              className="hidden" 
            />
          </label>

         
          <button className="bg-gray-600 text-white rounded-full p-2">
            <FaArrowLeft className="text-xl" />
          </button>

        
          <button className="bg-gray-600 text-white rounded-full p-2">
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      
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
