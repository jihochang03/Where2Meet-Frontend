// src/components/Recommendation/RecommendationLeft.jsx
import React from "react";

const RecommendationLeft = ({ result }) => (
  <div className="w-full lg:w-2/5 flex lg:flex-col justify-center lg:items-start items-center text-lg lg:text-2xl font-bold lg:pl-20">
    <span className="px-2">우리</span>
    <span className="text-2xl lg:text-4xl mt-2 mb-2 min-w-fit sm:max-w-none">{result["station_name"]}</span>
    <span className="px-1">에서 만나🫂</span>
  </div>
);

export default RecommendationLeft;
