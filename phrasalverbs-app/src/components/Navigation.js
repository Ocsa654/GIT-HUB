import React from 'react';

function Navigation({ activeSection, onSectionChange }) {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-6 border border-gray-100">
      <div className="flex">
        <button
          className={`flex-1 py-4 px-6 text-center font-medium ${
            activeSection === 'phrasal-verbs'
              ? 'bg-blue-600 text-white rounded-tl-xl'
              : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => onSectionChange('phrasal-verbs')}
        >
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Phrasal Verbs
          </div>
        </button>
        <button
          className={`flex-1 py-4 px-6 text-center font-medium ${
            activeSection === 'roots-list'
              ? 'bg-blue-600 text-white rounded-tr-xl'
              : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => onSectionChange('roots-list')}
        >
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Roots List
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
