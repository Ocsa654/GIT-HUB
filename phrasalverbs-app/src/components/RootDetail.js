import React from 'react';

function RootDetail({ root, rootData }) {
  if (!rootData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-500">No data available for this root</p>
      </div>
    );
  }

  const { meanings, examples } = rootData;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-blue-800">{root}</h2>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {meanings && meanings.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Meanings
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {meanings.map((meaning, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {meaning}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {examples && examples.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Example Words
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {examples.map((example, index) => {
                // Check if example has a level indicator (e.g., " - 8", " - hs")
                const parts = example.split(' - ');
                const word = parts[0].trim();
                const level = parts.length > 1 ? parts[1].trim() : null;
                
                return (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-2 border-blue-300">
                    <span className="font-medium text-gray-800">{word}</span>
                    {level && (
                      <span className="ml-2 text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600">
                        Level: {level}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RootDetail;
