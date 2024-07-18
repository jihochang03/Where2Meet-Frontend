import React from 'react';
import goback from '../../assets/images/goback.png';
import search from '../../assets/images/search.png';

const SearchInput = ({ value, onChange, onNormalMode, onSearch }) => (
  <div className="relative flex items-center w-full p-2 bg-white rounded-lg shadow-md">
    <img
      src={goback}
      alt="Go Back"
      className="w-6 h-6 cursor-pointer"
      onClick={() => onNormalMode(null)}
    />
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      className="flex-grow px-4 py-2 text-lg bg-transparent border-none outline-none"
      style={{ minWidth: 0 }}
      placeholder="검색어를 입력하세요"
    />
    <img
      src={search}
      alt="Search"
      className="w-6 h-6 cursor-pointer"
      onClick={onSearch}
    />
  </div>
);

export default SearchInput;
