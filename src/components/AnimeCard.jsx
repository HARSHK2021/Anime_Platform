import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';


export function AnimeCard({ anime }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-72 h-96 group perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative h-full rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img src={anime.images.webp.large_image_url} alt={anime.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">{anime.title_english || anime.title}</h3>
              <div className="flex items-center gap-2 text-white/80">
                <span>⭐ {anime.rating}</span>
                <span>•</span>
                <span>{anime.episodes} Episodes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-900 rounded-xl p-6">
          <div className="flex flex-col h-full text-white">
            <h3 className="text-xl font-bold mb-4">{anime.title}</h3>
            <p className="text-white/80 flex-grow">
              Experience the adventure in this thrilling anime series...
            </p>
            <div className="flex gap-4 mt-4">
              <Link 
                to={`/watch/${anime.mal_id}`}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
              >
                <Play size={18} />
                Watch Now
              </Link>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg">
                <Info size={18} />
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}