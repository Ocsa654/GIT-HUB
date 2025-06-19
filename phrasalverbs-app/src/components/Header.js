import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="English Hub Logo" className="h-12 w-12 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">English Hub</h1>
          </div>
          <p className="text-sm md:text-base mt-2 md:mt-0 bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full">
            A comprehensive dictionary of English phrasal verbs and word roots
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
