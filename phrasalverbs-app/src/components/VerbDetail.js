import React from 'react';

function VerbDetail({ verb, verbData }) {
  if (!verbData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-500">No data available for this verb</p>
      </div>
    );
  }

  const { 
    derivatives, 
    descriptions, 
    examples, 
    frequency, 
    synonyms, 
    translations 
  } = verbData;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-blue-800">{verb}</h2>
          {frequency && (
            <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm">
              <span className="text-xs text-gray-600 mr-2">Frequency:</span>
              <div className="flex">
                {[...Array(frequency)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-1"></div>
                ))}
                {[...Array(5 - (frequency || 0))].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 bg-gray-200 rounded-full mr-1"></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {descriptions && descriptions.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Meanings
            </h3>
            <ul className="space-y-2 pl-5">
              {descriptions.map((desc, index) => (
                <li key={index} className="text-gray-700 relative pl-2 before:content-['•'] before:absolute before:left-0 before:text-blue-400">{desc}</li>
              ))}
            </ul>
          </div>
        )}
        
        {derivatives && derivatives.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Forms
            </h3>
            <div className="flex flex-wrap gap-2">
              {derivatives.map((form, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {form}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {examples && examples.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              Examples
            </h3>
            <ul className="space-y-3">
              {examples.map((example, index) => (
                <li key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-200 text-gray-700 italic">"{example}"</li>
              ))}
            </ul>
          </div>
        )}
        
        {synonyms && synonyms.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
              </svg>
              Synonyms
            </h3>
            <div className="flex flex-wrap gap-2">
              {synonyms.map((synonym, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm"
                >
                  {synonym}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {translations && Object.keys(translations).length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              Translations
            </h3>
            <div className="space-y-4">
              {Object.entries(translations).map(([level, trans]) => (
                <div key={level} className="bg-gray-50 rounded-lg p-3">
                  {Object.entries(trans).map(([word, variants]) => (
                    <div key={word} className="mb-2 last:mb-0">
                      <div className="font-medium text-blue-900">{word}</div>
                      {variants.length > 0 && (
                        <div className="mt-1 text-sm text-gray-600">
                          {variants.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerbDetail;
