import React from 'react';
import SearchOutput from './SearchOutput';

const SearchOutputGroup = ({ results, onNormalMode }) => (
  <div className="h-full flex-grow overflow-auto bg-white rounded-lg p-2">
    {results.map((result, index) => (
      <SearchOutput key={index} result={result} onNormalMode={onNormalMode} />
    ))}
  </div>
);

export default SearchOutputGroup;
