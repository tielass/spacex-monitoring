import React from 'react';
import '../styles/filters.css'

function Filters({ selectedFilter, onFilterChange }) {
  return (
    <div className='filters-container'>
      <button
        onClick={() => onFilterChange('All')}
        className={`filter-button ${selectedFilter === 'All' ? 'active' : ''}`}
      >
        ALL
      </button>
      <button
        onClick={() => onFilterChange('Successful Launches')}
        className={`filter-button ${selectedFilter === 'Successful Launches' ? 'active' : ''}`}
      >
        SUCCESSFULL LAUNCHES
      </button>
      <button
        onClick={() => onFilterChange('Future Launches')}
        className={`filter-button ${selectedFilter === 'Future Launches' ? 'active' : ''}`}
      >
        FUTURE LAUNCHES
      </button>
      <button
        onClick={() => onFilterChange('Active Rocket')}
        className={`filter-button ${selectedFilter === 'Active Rocket' ? 'active' : ''}`}
      >
        ACTIVE ROCKET
      </button>
    </div>
  );
}

export default Filters;
