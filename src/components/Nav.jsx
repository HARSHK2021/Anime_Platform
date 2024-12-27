import { Tv } from 'lucide-react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button } from './ui/button';

const Nav = () => {
  return (
    <nav className=" fixed w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black/90 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex items-center gap-20 p-5">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Tv className="text-indigo-400 w-8 h-8" />
          <h1 className="text-white text-3xl font-bold tracking-wide">Otaku Realm</h1>
        </div>

        {/* Search Section */}
        <div className="flex items-center bg-gray-800/80 gap-3 p-2 rounded-full shadow-md">
          <input
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 py-2 w-64"
            type="text"
            placeholder="Search anime..."
            aria-label="Search anime"
          />
          <FaSearch className="text-white text-lg cursor-pointer hover:text-indigo-400 transition duration-200" />
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-4 py-2 shadow-sm transition duration-200">
            Filter
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
