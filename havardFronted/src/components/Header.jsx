import React, { useState } from "react";
import havard from "../assets/havard.svg";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => setIsHidden(!isHidden);

  return (
    <header className="bg-slate-400 text-black">
      <div className="flex justify-between w-full p-4 md:p-5 items-center">
     
        <div>
          <img src={havard} alt="logo" className="w-24 sm:w-32 md:w-48 cursor-pointer" />
        </div>

      
        <div className="hidden md:block">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
            Learn about our lawsuits to protect our students and researchers
          </span>
        </div>

        
        <div className="flex space-x-3 sm:space-x-6">
     
          <span className="flex items-center bg-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </span>

        
          <span
            onClick={toggleMenu}
            className="flex items-center bg-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            Menu
          </span>
        </div>
      </div>

      {!isHidden && (
        <div className="bg-slate-300 p-4 flex flex-col space-y-2 md:hidden">
          <span className="text-sm sm:text-base cursor-pointer hover:text-blue-600">
            Learn about our lawsuits to protect our students and researchers
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
