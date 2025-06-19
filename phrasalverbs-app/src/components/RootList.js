import React from 'react';
import Pagination from './Pagination';

function RootList({ roots, selectedRoot, onRootSelect, rootsData, currentPage, onPageChange }) {
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRoots = roots.slice(startIndex, endIndex);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-800">
          {roots.length} {roots.length === 1 ? 'result' : 'results'}
        </h2>
        {roots.length > 0 && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            Showing {startIndex + 1}-{Math.min(endIndex, roots.length)} of {roots.length}
          </span>
        )}
      </div>
      
      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {roots.length > 0 ? (
          currentRoots.map(root => {
            const rootData = rootsData[root] || {};
            const meanings = rootData.meanings || [];
            const exampleCount = rootData.examples?.length || 0;
            
            return (
              <button
                key={root}
                onClick={() => onRootSelect(root)}
                className={`w-full text-left px-5 py-4 hover:bg-blue-50 transition duration-150 ${
                  selectedRoot === root ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-blue-700 text-lg">{root}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {exampleCount} {exampleCount === 1 ? 'example' : 'examples'}
                  </span>
                </div>
                
                {meanings.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1.5 line-clamp-2">
                    {meanings.join(', ')}
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
            <p>No roots found</p>
          </div>
        )}
      </div>
      
      {roots.length > itemsPerPage && (
        <div className="p-4 border-t border-gray-100">
          <Pagination 
            currentPage={currentPage}
            totalItems={roots.length}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export default RootList;
