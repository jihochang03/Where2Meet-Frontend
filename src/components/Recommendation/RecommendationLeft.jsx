// src/components/Recommendation/RecommendationLeft.jsx
import React from "react";

const RecommendationLeft = ({ result }) => (
  <div className="absolute top-0 right-3 lg:left-3 lg:top-20 min-w-fit text-2xl font-bold pl-20">
    우리의 만남 장소는
    <br />
    <span className="text-4xl">{result["station_name"]}</span>
    <br />
    어때요?
  </div>
);

export default RecommendationLeft;
