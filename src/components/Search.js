import React, { useState } from 'react';
import '../styles/search.css';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery('')
  };

  return (
    <div className='search-bar-container'>
      <input
        className='search-bar'
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
      className='search-button'
      onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
