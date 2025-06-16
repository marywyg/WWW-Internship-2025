import React, { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const lastSearchedQuery = useRef<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (!query.trim()) return;

    const delayDebounceFn = setTimeout(() => {
      if (query !== lastSearchedQuery.current) {
        onSearch(query);
        lastSearchedQuery.current = query;
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
