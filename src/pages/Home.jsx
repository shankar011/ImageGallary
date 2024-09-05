import React from 'react';
import TabWidget from '../component/TabWidget';
import GalleryWidget from '../component/GalleryWidget';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Empty Left Half (only visible on larger screens) */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-100"></div>
      
      {/* Right Half with Widgets */}
      <div className="w-full lg:w-1/2 p-4 space-y-4">
        {/* Tab Widget */}
        <TabWidget />
        
        {/* Gallery Widget */}
        <GalleryWidget />
      </div>
    </div>
  );
};

export default Home;
