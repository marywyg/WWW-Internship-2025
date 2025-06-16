// components/artists_search/SearchBar.tsx
import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query); // Przekazuje zapytanie do onSearch
    }
  };

  return (
    <div className="p-8 bg-pink-50">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
        Artist search
      </h1>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-md shadow-md w-1/2 flex">
          <form onSubmit={handleSubmit} className="flex w-full">
            <input
              type="text"
              placeholder="Search for artists..."
              value={query}
              onChange={handleInputChange}
              className="bg-white text-pink-500 border border-gray-300 px-4 py-2 rounded-l-md w-full"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
