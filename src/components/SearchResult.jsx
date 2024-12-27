import React, { useState, useEffect } from 'react';
import JikanCard from './JikanCard';
import { useLocation } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SearchResult = () => {
  const location = useLocation();

  // Extract query parameter 'q' from the URL
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  const cache = new Map(); // In-memory cache

  const [animeData, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch anime data whenever query or current page changes
  useEffect(() => {
    if (query) {
      setAnimeData([]); // Clear previous results while fetching
      fetchAnime(currentPage);
    }
  }, [query, currentPage]);

  const fetchAnime = async (page) => {
    const cacheKey = `${query}-${page}`;

    // Check the cache
    if (cache.has(cacheKey)) {
      console.log(`Cache hit for key: ${cacheKey}`);
      setAnimeData(cache.get(cacheKey));
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&limit=25`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data with status: ${response.status}`);
      }

      const data = await response.json();

      // Store data in cache
      cache.set(cacheKey, data.data);

      setAnimeData(data.data);
      setTotalPages(data.pagination.last_visible_page);
    } catch (err) {
      const errorMessage =
        err.response && err.response.status === 429
          ? 'Rate limit exceeded. Please try again later.'
          : 'Failed to fetch anime data. Please try again later.';
      setError(errorMessage);
      console.error('Error fetching anime:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {animeData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {animeData.map((anime, index) => (
                  <JikanCard key={index} anime={anime} />
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 pb-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1 || isLoading}
                  className="px-4 py-2 bg-pink-400 font-bold text-lg text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
                >
                  <FaArrowLeft />
                </button>

                <span className="mx-4 text-white font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages || isLoading}
                  className="px-4 py-2 bg-pink-400 font-bold text-lg text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
                >
                  <FaArrowRight />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 p-4">
              {query ? 'No results found' : 'Start searching to see results'}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
