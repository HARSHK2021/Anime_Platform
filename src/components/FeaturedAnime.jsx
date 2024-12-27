import { useEffect, useState } from 'react';
import { AnimeCard } from './AnimeCard';
import { getTopAnime } from '../service/api.js';
import Marquee from '../components/ui/marquee';

export function FeaturedAnime() {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Check if data exists in localStorage
      const cachedData = localStorage.getItem('topAnime');
      if (cachedData) {
        setTopAnime(JSON.parse(cachedData));
      } else {
        try {
          const response = await getTopAnime();
          setTopAnime(response.data);
          // Cache the data for future use
          localStorage.setItem('topAnime', JSON.stringify(response.data));
        } catch (error) {
          console.error('Failed to fetch top anime:', error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="w-full">
        <h2 className="px-5 text-3xl font-bold text-white">Trending Anime:</h2>
        <div className="flex items-center justify-between gap-4 p-6">
          <Marquee pauseOnHover className="[--duration:30s]">
            {topAnime.map((anime, index) => (
              <AnimeCard key={index} anime={anime} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
