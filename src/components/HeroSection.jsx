import React from 'react';
import ImageDisplay from './ImageDisplay';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {" "}Anime Adventure
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore the latest releases, trending shows, and upcoming seasons all in one place.
          </p>
        </div>

        <div className='mt-5 '>
           <ImageDisplay />
            {/* Glowing Effects */}
          <div className="absolute inset-0 z-[-1]">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.4)`,
                  animationDelay: `${i * 0.4}s`,
                  transform: `translateZ(${(i + 1) * 30}px)`,
                }}
              />
            ))}
          </div>
        </div>

      </div>

   
       
    </section>
  );
}