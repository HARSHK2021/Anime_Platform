import React, { useState, useRef } from 'react';

const AnimePlayer = ({ animeData, episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [autoLoop, setAutoLoop] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const changeEpisode = (episode) => {
    setCurrentEpisode(episode);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to start
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      className="anime-player-container flex mt-20"
      style={{ marginTop: '5rem' }}
    >
      {/* Sidebar Episode List */}
      <div
        className="episode-list bg-gray-800 p-4 text-white"
        style={{ width: '20%', height: '90vh', overflowY: 'scroll' }}
      >
        <h3 className="font-bold mb-4">List of episodes:</h3>
        <div className="grid grid-cols-4 gap-2">
          {episodes.map((episode) => (
            <button
              key={episode}
              onClick={() => changeEpisode(episode)}
              className={`p-3 rounded ${
                currentEpisode === episode
                  ? 'bg-pink-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {episode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Player Section */}
      <div className="player-section flex-grow bg-black text-white p-4">
        <div className="player-wrapper mb-4">
          <video
            ref={videoRef}
            className="w-full h-[60vh] bg-gray-900"
            loop={autoLoop}
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src={`https://example.com/video/${currentEpisode}`} // Replace with actual video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="controls flex justify-between mt-4">
            <button
              onClick={togglePlayPause}
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={() =>
                changeEpisode(
                  Math.min(currentEpisode + 1, episodes.length)
                )
              }
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
            >
              Next
            </button>
            <button
              onClick={() => setAutoLoop(!autoLoop)}
              className={`px-4 py-2 rounded ${
                autoLoop
                  ? 'bg-green-400 text-white'
                  : 'bg-gray-400 text-black'
              }`}
            >
              Auto Loop: {autoLoop ? 'On' : 'Off'}
            </button>
            <button
              onClick={toggleMute}
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button
              onClick={toggleFullScreen}
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
            >
              Fullscreen
            </button>
          </div>
        </div>
      </div>

      {/* Anime Details */}
      <div
        className="anime-details bg-gray-800 p-4 text-white"
        style={{ width: '25%' }}
      >
        <img
          src={animeData.image}
          alt={animeData.title}
          className="rounded mb-4 w-full"
        />
        <h3 className="text-xl font-bold">{animeData.title}</h3>
        <p className="text-gray-400">{animeData.description}</p>
        <p className="mt-4">
          <span className="font-bold">Rating:</span> {animeData.rating}
        </p>
        <p>
          <span className="font-bold">Episodes:</span>{' '}
          {animeData.totalEpisodes}
        </p>
      </div>
    </div>
  );
};