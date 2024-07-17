// src/components/Keyword/KeywordGroup.jsx
import React from 'react';
import Keyword from './Keyword';

const KeywordGroup = ({ keywords, selectedKeywords, onSelectKeyword }) => (
  <div className="w-full flex justify-center mt-5">
    <div className="flex flex-col items-center w-[80%] gap-[17px] px-0 py-[13px] bg-system-colors-overlays-default rounded-[10px]">
      <div className="relative self-stretch mt-[-1.00px] font-bold text-black text-lg text-center">
        만남을 나타내는 키워드를 선택하세요!
      </div>
      <div className="flex flex-wrap w-full items-start justify-center gap-[15px_7px] rounded-[5px]">
        {keywords.map((keyword, index) => (
          <Keyword key={index} keyword={keyword} isSelected={selectedKeywords[index]} onSelectKeyword={()=>onSelectKeyword(index)} />
        ))}
      </div>
    </div>    
  </div>
);

export default KeywordGroup;
