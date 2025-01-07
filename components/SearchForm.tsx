"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Form from "next/form";
const SearchForm = ({ query }: { query?: string }) => {
  const [searchTerm, setSearchTerm] = useState(query || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="rounded-md">
      <Form action="/" scroll={false} className="search-form">
        <div className="flex items-center justify-center mt-5 mb-10">
          <div className="bg-white rounded-lg shadow-lg flex items-center lg:w-1/3 w-3/4 relative">
            {/* Input Field */}
            <input
              type="text"
              name="query" // Ensure the query parameter matches "query"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search for ideas..."
              className="text-gray-700 text-lg w-full px-4 py-3 focus:outline-none rounded-lg"
            />

            {/* Clear (Cross) Button */}
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")} // Function to clear the input
                className="absolute right-12 text-black p-2 rounded-full hover:bg-gray-300 transition-colors duration-300 mr-3 min-w-10"
              >
                ✕
              </button>
            )}

            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <CiSearch className="text-2xl" />
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
