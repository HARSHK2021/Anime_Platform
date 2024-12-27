import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export function WatchPage() {
  const { mal_id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const [animeResponse, episodesResponse] = await Promise.all([
          fetch(`https://api.jikan.moe/v4/anime/${mal_id}`),
          fetch(`https://api.jikan.moe/v4/anime/${mal_id}/episodes`)
        ]);
        
        const animeData = await animeResponse.json();
        console.log(animeData)
        const episodesData = await episodesResponse.json();
        
        setAnimeDetails(animeData.data);
        setEpisodes(episodesData.data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };
    fetchAnimeDetails();
  }, [mal_id]);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl aspect-video mx-auto mb-8">
          <iframe
            className="w-full h-full"
            src={animeDetails?.trailer?.embed_url || "https://youtu.be/PU54b7-B9xQ?si=QZ4D0_kPk3nhs-55"}
            title="Anime trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-white text-2xl font-bold mb-4">Episodes</h2>
          {episodes.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {episodes.map((episode) => (
                <div
                  key={episode.mal_id}
                  className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-white font-medium">Episode {episode.episode}</p>
                    <span className="text-gray-400 text-xs">{episode.mal_id}</span>
                  </div>
                  <p className="text-gray-400 text-sm truncate">{episode.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-lg">No episodes found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
