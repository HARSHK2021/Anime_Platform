import React, { useState } from 'react'
import { allGenres } from '@/data/genres';
const Genres = () => {
    const [showAll, setShowAll] = useState(false);
    const initialVisibleCount = 18;

    const visibleGenres = showAll ? allGenres : allGenres.slice(0, initialVisibleCount);
  
  return (
    <div className="p-6 bg-[#1A1B26] rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-[#E48FFF]">Genres</h2>
    <div className="grid grid-cols-3 gap-4 transition-all duration-300 ease-in-out">
      {visibleGenres.map((genre, index) => (
        <button
          key={index}
          className={`${genre.color} hover:opacity-80 transition-opacity duration-200 text-left`}
        >
          {genre.name}
        </button>
      ))}
    </div>
    <button
      onClick={() => setShowAll(!showAll)}
      className="w-full mt-4 py-2 px-4 bg-[#24253A] text-gray-300 rounded-lg hover:bg-[#2F3149] transition-colors duration-200"
    >
      {showAll ? 'Show Less' : 'Show More'}
    </button>
  </div>
  )
}

export default Genres
