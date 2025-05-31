import React, { useState } from 'react';
import Form from './Form';

const ConnectionBar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(prev => !prev);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-20 px-3">
        <div className="flex justify-between items-center bg-opacity-50 p-1 text-white">
          <div className="relative inline-block" onClick={toggleForm}>
            <div className="absolute inset-0 bg-blue-400 rounded-md" style={{ animation: "slide 1s linear infinite" }}></div>
            <div className="relative z-10 flex items-center text-white px-3 py-1 font-medium bg-[#2563EB] gap-2 rounded-md text-lg cursor-pointer">
              <h1>Book A Demo</h1>
              <i className="ri-play-fill"></i>
            </div>
          </div>

          <style>{`
            @keyframes slide {
              0%, 100% { transform: translateX(-10px); }
              50% { transform: translateX(10px); }
            }
          `}</style>

          <div className="flex gap-4 pr-2">
            <div className="flex items-center gap-2">
              <i className="font-extrabold ri-phone-fill"></i>
              <span className="text-md">+91 8081638914</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-mail-line"></i>
              <span className="text-md">contactus@a2developers.org</span>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
      </div>

      {isFormOpen && (
        <div className="fixed top-0 right-0 p-4 h-screen w-[400px] bg-white z-30 shadow-lg overflow-y-auto transition-transform duration-300">
          <Form />
          <button onClick={toggleForm} className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-black">
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ConnectionBar;
