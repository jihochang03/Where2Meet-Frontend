// src/components/Recommendation/Recommendation.jsx
import React from 'react';
import RecommendationNumber from './RecommendationNumber';
import RecommendationLeft from './RecommendationLeft';
import RecommendationRight from './RecommendationRight';

const Recommendation = ({ results, gptComments, selected, setSelected }) => {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[calc(100%-100px)] bg-white bg-opacity-70 p-4 rounded-lg shadow-md h-72 pointer-events-auto">
      <div className="absolute top-0 left-0 transform -translate-y-1/2 flex">
        {[1, 2, 3].map((num) => (
          <RecommendationNumber
            key={num}
            num={num}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="flex mt-20">
        <div className="w-2/5">
          <RecommendationLeft result={results[selected-1]} />
        </div>
        <div className="w-3/5 flex flex-col justify-between">
          <RecommendationRight result={results[selected-1]} comment={gptComments[selected-1]} />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
