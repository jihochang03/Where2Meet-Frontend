import React from 'react';
import SearchOutput from './SearchOutput';

const SearchOutputGroup = ({ results, onClose }) => (
  <div className="h-full flex-grow overflow-auto bg-white rounded-lg p-2">
    {results.map((result, index) => (
      <SearchOutput key={index} result={result} onClose={onClose} />
    ))}
  </div>
);

export default SearchOutputGroup;
