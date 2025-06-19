import React from 'react';
import Pagination from './Pagination';

function VerbList({ verbs, selectedVerb, onVerbSelect, phrasalVerbs, currentPage, onPageChange }) {
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVerbs = verbs.slice(startIndex, endIndex);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-800">
          {verbs.length} {verbs.length === 1 ? 'result' : 'results'}
        </h2>
        {verbs.length > 0 && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            Showing {startIndex + 1}-{Math.min(endIndex, verbs.length)} of {verbs.length}
          </span>
        )}
      </div>
      
      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {verbs.length > 0 ? (
          currentVerbs.map(verb => {
            const verbData = phrasalVerbs[verb] || {};
            const description = verbData.descriptions?.[0] || 'No description available';
            
            return (
              <button
                key={verb}
                onClick={() => onVerbSelect(verb)}
                className={`w-full text-left px-5 py-4 hover:bg-blue-50 transition duration-150 ${
                  selectedVerb === verb ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-blue-700 text-lg">{verb}</h3>
                  {verbData.frequency && (
                    <div className="flex">
                      {[...Array(verbData.frequency)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
                      ))}
                      {[...Array(5 - (verbData.frequency || 0))].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-200 rounded-full ml-1"></div>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1.5 line-clamp-2">{description}</p>
                
                {verbData.examples && verbData.examples.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2 italic truncate">
                    "{verbData.examples[0]}"
                  </p>
                )}
              </button>
            );
          })
        ) : (
          <div className="p-8 text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No phrasal verbs found</p>
          </div>
        )}
      </div>
      
      {verbs.length > itemsPerPage && (
        <div className="p-4 border-t border-gray-100">
          <Pagination 
            currentPage={currentPage}
            totalItems={verbs.length}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export default VerbList;
