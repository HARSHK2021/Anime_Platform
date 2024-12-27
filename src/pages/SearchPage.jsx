
import JikanCard from "@/components/JikanCard";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Extract query parameter 'q' and 'page' from the URL
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";
  const currentPage = parseInt(queryParams.get("page") || "1");

  const [animeResults, setAnimeResults] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}&page=${currentPage}&sfw=false`
        );
        const data = await response.json();
        setAnimeResults(data.data || []);
        setPagination(data.pagination || {});
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.last_visible_page) {
      navigate(`/search?q=${query}&page=${page}`);
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-purple-300 mb-4">
        Search Results
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : animeResults.length > 0 ? (
        <>
          {/* Anime Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animeResults.map((anime) => (
              <JikanCard key={anime.mal_id} anime={anime} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="bg-purple-300 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from(
              { length: pagination.last_visible_page },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  page === currentPage
                    ? "bg-purple-600 text-white"
                    : "bg-purple-300 text-white hover:bg-purple-400"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!pagination.has_next_page}
              className="bg-purple-300 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No results found for &quot;{query}&quot;</p>
      )}
    </section>
  );
};

export default SearchPage;
