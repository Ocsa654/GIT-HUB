import React from 'react';

function SearchBar({ searchTerm, onSearch, onLetterFilter, currentLetter }) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-6 border border-gray-100">
      <div className="mb-5">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Phrasal Verbs
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Type to search..."
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <p className="block text-sm font-medium text-gray-700 mb-3">
          Filter by letter
        </p>
        <div className="flex flex-wrap gap-1.5">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => onLetterFilter(letter)}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${
                currentLetter === letter 
                  ? 'bg-blue-600 text-white font-bold shadow-md transform scale-110' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
