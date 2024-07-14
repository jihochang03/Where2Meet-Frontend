// src/components/Recommendation/RecommendationLeft.jsx
import React from 'react';

const RecommendationLeft = ({ result }) => (
  <div className="text-2xl font-bold pl-20">
    우리의 만남 장소는<br />
    <span className="text-4xl">{result['station_name']}</span><br />
    어때요?
  </div>
);

export default RecommendationLeft;
