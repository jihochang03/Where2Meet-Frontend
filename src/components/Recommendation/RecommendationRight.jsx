// src/components/Recommendation/RecommendationRight.jsx
import React from "react";
import table from "../../assets/images/table.png";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";

const RecommendationRight = ({ result, comment, onShare }) => (
  <div className="w-full lg:w-3/5 flex flex-col justify-between lg:items-start items-center h-full p-2 lg:p-5">
    <div className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-5">
      🤖 GPT 요약
    </div>
    <div className="lg:hidden mb-5 text-lg text-center lg:text-xl lg:text-left flex-grow">
      {comment['chatgpt_response_mobile']} 
    </div>
    <div className="hidden lg:block mb-5 text-lg text-center lg:text-xl lg:text-left flex-grow">
      {comment['chatgpt_response_pc']} 
    </div>
    <div className="flex gap-3 mt-auto">
      <a
        href={`https://app.catchtable.co.kr/ct/search/total?query=${result["station_name"]}`}
      >
        <img src={table} alt="Table" className="w-8 h-8" />
      </a>
      <a href={`https://map.kakao.com/link/search/${result["station_name"]}`}>
        <img src={kakao} alt="Kakao" className="w-8 h-8" />
      </a>
      <a
        href={`https://map.naver.com/p/search/${result["station_name"]}?c=15.00,0,0,0,dh`}
      >
        <img src={naver} alt="Naver" className="w-8 h-8" />
      </a>
      <button className="bg-blue-500 text-white h-8 min-w-fit px-2 py-1 rounded">
        <a
          href={`https://map.kakao.com/link/to/${result["station_name"]},${result["coordinates"]["lon"]},${result["coordinates"]["lat"]}`}
        >
          길찾기
        </a>
      </button>
      <button
        className="bg-green-500 text-white h-8 min-w-fit px-2 py-1 rounded"
        onClick={onShare}
      >
        공유하기
      </button>
    </div>
  </div>
);

export default RecommendationRight;
