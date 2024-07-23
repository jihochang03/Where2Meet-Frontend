// src/components/Recommendation/Recommendation.jsx
import React from 'react';
import RecommendationNumber from './RecommendationNumber';
import RecommendationLeft from './RecommendationLeft';
import RecommendationRight from './RecommendationRight';

const Recommendation = ({ results, comments, selected, setSelected, onShare }) => {
  return (
    <div className="fixed bottom-2 sm:bottom-6 lg:bottom-12 inset-x-0 mx-auto w-[calc(100%-1rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] bg-white bg-opacity-70 p-4 rounded-lg shadow-md pointer-events-auto">
      <div className="absolute -top-6 left-0 transform -translate-y-1/2 flex">
        {results.map((result, idx) => (
          <RecommendationNumber
            key={idx+1}
            num={idx+1}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <RecommendationLeft result={results[selected-1]} />
        <RecommendationRight result={results[selected-1]} comment={comments[selected-1]} onShare={onShare} />
      </div>
    </div>
  );
};

export default Recommendation;
