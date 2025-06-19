import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import VerbList from './components/VerbList';
import VerbDetail from './components/VerbDetail';
import RootSearchBar from './components/RootSearchBar';
import RootList from './components/RootList';
import RootDetail from './components/RootDetail';
import './App.css';

function App() {
  // Shared state
  const [activeSection, setActiveSection] = useState('phrasal-verbs');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Phrasal verbs state
  const [phrasalVerbs, setPhrasalVerbs] = useState({});
  const [filteredVerbs, setFilteredVerbs] = useState([]);
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [verbSearchTerm, setVerbSearchTerm] = useState('');
  const [currentVerbLetter, setCurrentVerbLetter] = useState('a');
  const [verbCurrentPage, setVerbCurrentPage] = useState(1);
  
  // Roots list state
  const [rootsList, setRootsList] = useState({});
  const [filteredRoots, setFilteredRoots] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState(null);
  const [rootSearchTerm, setRootSearchTerm] = useState('');
  const [currentRootLetter, setCurrentRootLetter] = useState('a');
  const [rootCurrentPage, setRootCurrentPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load phrasal verbs data
        const phrasalVerbsResponse = await fetch(process.env.PUBLIC_URL + '/data/phrasal.verbs.build.json');
        const phrasalVerbsData = await phrasalVerbsResponse.json();
        setPhrasalVerbs(phrasalVerbsData);
        
        // Initialize with verbs starting with 'a'
        const initialVerbs = Object.keys(phrasalVerbsData)
          .filter(verb => verb.startsWith('a'));
        setFilteredVerbs(initialVerbs);
        
        // Load roots list data
        const rootsListResponse = await fetch(process.env.PUBLIC_URL + '/data/english.roots.list.build.json');
        const rootsListData = await rootsListResponse.json();
        setRootsList(rootsListData);
        
        // Initialize with roots starting with 'a'
        const initialRoots = Object.keys(rootsListData)
          .filter(root => root.startsWith('a'));
        setFilteredRoots(initialRoots);
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data');
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Reset selections when switching sections
    if (section === 'phrasal-verbs') {
      setSelectedRoot(null);
    } else {
      setSelectedVerb(null);
    }
  };

  // Phrasal verbs handlers
  const handleVerbSearch = (term) => {
    setVerbSearchTerm(term);
    setVerbCurrentPage(1); // Reset to first page on new search
    
    if (term) {
      const results = Object.keys(phrasalVerbs)
        .filter(verb => verb.toLowerCase().includes(term.toLowerCase()));
      setFilteredVerbs(results);
    } else {
      // If search is cleared, show verbs for the current letter
      const verbs = Object.keys(phrasalVerbs)
        .filter(verb => verb.startsWith(currentVerbLetter));
      setFilteredVerbs(verbs);
    }
  };

  const handleVerbLetterFilter = (letter) => {
    setCurrentVerbLetter(letter);
    setVerbSearchTerm('');
    setVerbCurrentPage(1); // Reset to first page on new filter
    
    const verbs = Object.keys(phrasalVerbs)
      .filter(verb => verb.startsWith(letter));
    setFilteredVerbs(verbs);
  };

  const handleVerbSelect = (verb) => {
    setSelectedVerb(verb);
  };
  
  const handleVerbPageChange = (page) => {
    setVerbCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  // Roots list handlers
  const handleRootSearch = (term) => {
    setRootSearchTerm(term);
    setRootCurrentPage(1); // Reset to first page on new search
    
    if (term) {
      const results = Object.keys(rootsList)
        .filter(root => root.toLowerCase().includes(term.toLowerCase()));
      setFilteredRoots(results);
    } else {
      const roots = Object.keys(rootsList)
        .filter(root => root.startsWith(currentRootLetter));
      setFilteredRoots(roots);
    }
  };
  
  const handleRootLetterFilter = (letter) => {
    setCurrentRootLetter(letter);
    setRootSearchTerm('');
    setRootCurrentPage(1); // Reset to first page on new filter
    
    const roots = Object.keys(rootsList)
      .filter(root => root.startsWith(letter));
    setFilteredRoots(roots);
  };
  
  const handleRootSelect = (root) => {
    setSelectedRoot(root);
  };
  
  const handleRootPageChange = (page) => {
    setRootCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading data...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-md max-w-md">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl text-red-700">{error}</p>
        </div>
        <p className="mt-2 text-red-600">Please check your internet connection and try again.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Navigation 
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        
        {activeSection === 'phrasal-verbs' ? (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <SearchBar 
                searchTerm={verbSearchTerm}
                onSearch={handleVerbSearch}
                onLetterFilter={handleVerbLetterFilter}
                currentLetter={currentVerbLetter}
              />
              <VerbList 
                verbs={filteredVerbs} 
                selectedVerb={selectedVerb} 
                onVerbSelect={handleVerbSelect} 
                phrasalVerbs={phrasalVerbs}
                currentPage={verbCurrentPage}
                onPageChange={handleVerbPageChange}
              />
            </div>
            <div className="w-full md:w-2/3">
              {selectedVerb ? (
                <VerbDetail verb={selectedVerb} verbData={phrasalVerbs[selectedVerb]} />
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-gray-500 text-lg">Select a phrasal verb to see details</p>
                  <p className="text-gray-400 mt-2 max-w-md mx-auto">Browse through the list of phrasal verbs on the left or use the search functionality to find specific verbs.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <RootSearchBar 
                searchTerm={rootSearchTerm}
                onSearch={handleRootSearch}
                onLetterFilter={handleRootLetterFilter}
                currentLetter={currentRootLetter}
              />
              <RootList 
                roots={filteredRoots} 
                selectedRoot={selectedRoot} 
                onRootSelect={handleRootSelect}
                rootsData={rootsList}
                currentPage={rootCurrentPage}
                onPageChange={handleRootPageChange}
              />
            </div>
            <div className="w-full md:w-2/3">
              {selectedRoot ? (
                <RootDetail root={selectedRoot} rootData={rootsList[selectedRoot]} />
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Select a root to see details</p>
                  <p className="text-gray-400 mt-2 max-w-md mx-auto">Browse through the list of English word roots on the left or use the search functionality to find specific roots.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <footer className="bg-gray-100 mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>A comprehensive dictionary of English phrasal verbs and word roots</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} English Hub</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
