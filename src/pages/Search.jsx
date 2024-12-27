import Genres from "@/components/Genres";
import Nav from "@/components/Nav";
import SearchResult from "@/components/SearchResult";

// ... existing imports ...
const Search = () => {
  // Add genre list
  
   return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
       {/* Main Content */}
      <div className="pt-[6rem] flex ">
        {/* Left Section: Search Results */}
        <div className="w-3/4 ">
          <SearchResult />
        </div>
         {/* Right Section: Genre Filters */}
        <div className="w-1/4 bg-slate-700 min-h-[calc(100vh-5rem)] p-4 sticky top-[5rem]">
          
          <Genres/>
        </div>
      </div>
    </div>
  );
};
 export default Search;