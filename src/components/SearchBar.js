import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
      <input
        type="text"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..."
        value={query}
        onChange={handleInputChange}
      />
  );
};

export default SearchBar;