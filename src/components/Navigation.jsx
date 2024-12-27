import React from 'react';
import { Tv, Bell, Menu } from 'lucide-react';
import SearchBar  from './SearchBar';


export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Tv className="text-indigo-400" />
            <span  className="text-white font-bold text-xl">Otaku Realm</span>
          </div>

          {/* Center Search Bar */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Navigation Links and Actions */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Movies</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Most Popular</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Top Airing</a>
            </div>
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="md:hidden p-2 text-white/80 hover:text-white transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}