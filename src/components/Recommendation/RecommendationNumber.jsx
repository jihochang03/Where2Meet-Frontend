// src/components/Recommendation/RecommendationNumber.jsx
import React from 'react';
import colorsData from '../../data/colors';

const RecommendationNumber = ({ num, selected, setSelected }) => {
  const isSelected = selected === num;
  const colors = colorsData;

  return (
    <div
      onClick={() => setSelected(num)}
      className={`cursor-pointer w-12 h-12 flex items-center justify-center ${colors[num]} text-white font-bold text-xl transition-transform duration-200 ${
        isSelected ? 'transform scale-110' : ''
      }`}
      style={{
        transformOrigin: 'bottom left',
      }}
    >
      {num}
    </div>
  );
};

export default RecommendationNumber;
