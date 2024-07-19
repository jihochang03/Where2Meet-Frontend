// src/components/Recommendation/RecommendationLeft.jsx
import React from "react";

const RecommendationLeft = ({ result }) => (
  <div className="w-full lg:w-2/5 flex lg:flex-col justify-center lg:items-start items-center text-lg lg:text-2xl font-bold lg:pl-20">
    <span class="pr-2">우리의 만남 장소는</span>
    <span className="text-2xl lg:text-4xl mt-2 mb-2">{result["station_name"]}</span>
    <span class="pl-2">어때요? </span>
  </div>
);

export default RecommendationLeft;
