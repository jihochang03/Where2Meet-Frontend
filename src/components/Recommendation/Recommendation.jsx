// src/components/Recommendation/Recommendation.jsx
import React from 'react';
import RecommendationNumber from './RecommendationNumber';
import RecommendationLeft from './RecommendationLeft';
import RecommendationRight from './RecommendationRight';

const Recommendation = ({ results, gptComments, selected, setSelected, onShare }) => {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] bg-white bg-opacity-70 p-4 rounded-lg shadow-md h-72 pointer-events-auto">
      <div className="absolute top-6 left-0 transform -translate-y-1/2 flex">
        {[1, 2, 3].map((num) => (
          <RecommendationNumber
            key={num}
            num={num}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 h-full">
        <div className="lg:w-2/5 w-full lg:h-full h-auto">
          <RecommendationLeft result={results[selected-1]} />
        </div>
        <div className="lg:w-3/5 w-full flex flex-col justify-between lg:h-full h-auto mt-5 lg:mt-0">
          <RecommendationRight result={results[selected-1]} comment={gptComments[selected-1]} onShare={onShare} />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
