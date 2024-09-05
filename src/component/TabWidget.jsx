import React, { useState } from 'react';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="bg-gray-700  shadow-lg rounded-lg p-6">
    
      <div className="flex space-x-6 text-white font-bold border-b-2 border-gray-200 pb-3">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 focus:outline-none transition duration-300 ${
              activeTab === tab ? 'text-blue-600 font-bold' : 'text-white'
            }`}
          >
            {tab}
           
            {activeTab === tab && (
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>

     
      <div className="mt-6  text-white">
        {activeTab === 'About Me' && (
          <p className="animate-fadeIn">
           Hello! I'm Dave, your sales rep here from Salesforce. I've been workiss awesome company 3 years now. I was born and raised in Albany NY& have been living in Santa Carla for the past 10 years my w Shubham ny and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school. so my calender is usually blocked between 9-10 AM. This is a Gallery PG View anty </p> 
         
        )}
        {activeTab === 'Experiences' && (
          <p className="animate-fadeIn">
            I’ve worked with several clients helping them streamline their sales processes, and increase revenue. I specialize in salesforce automation and customer relationship management.
          </p>
        )}
        {activeTab === 'Recommended' && (
          <p className="animate-fadeIn">
            I highly recommend you explore our automation solutions and CRM integrations to boost your team's efficiency.
          </p>
        )}
      </div>
    </div>
  );
};

export default TabWidget;
