"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({
  query,
  onSearch,
}: {
  query?: string;
  onSearch: (query: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState(query || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass the search term back to the parent component
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="searchbar flex items-center justify-center mt-5 mb-10">
          <input
            type="text"
            name="search"
            value={searchTerm} // Change from `defaultValue` to `value`
            onChange={handleChange} // Handle input change
            placeholder="Search ideas"
            className="border-2 border-black rounded-l-full py-4 text-black text-lg lg:w-1/4 w-1/2 px-10 font-bold"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r-full py-4 px-5"
          >
            <CiSearch className="text-3xl mx-3 " />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
