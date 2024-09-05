import React from 'react';
import TabWidget from '../component/TabWidget';
import GalleryWidget from '../component/GalleryWidget';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
     
      <div className="hidden lg:block lg:w-1/2 bg-gray-800 m-5 rounded-lg"></div>
      
     
      <div className="w-full lg:w-1/2 p-4 space-y-4">
       
        <TabWidget />
        
        
        <GalleryWidget />
      </div>
    </div>
  );
};

export default Home;
