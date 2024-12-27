import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const SearchBar = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
   
   
    if(searchQuery.trim()){
    navigate(`/search?q=${searchQuery}&page=1`);
    }

  };

  return (
    <form onSubmit={handleSearch} className=" gap-2 flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e)=>{
          setSearchQuery(e.target.value);
        }}
        
        placeholder="Search anime "
        className=" p-2 border rounded "
      />
      <button type="submit" className="bg-purple-400 text-white p-2 rounded">
      <FaSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchBar;
