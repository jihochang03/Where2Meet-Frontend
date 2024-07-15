// src/components/Recommendation/RecommendationRight.jsx
import React from 'react';
import table from '../../assets/images/table.png';
import kakao from '../../assets/images/kakao.png';
import naver from '../../assets/images/naver.png';

const RecommendationRight = ({ result, comment, onShare }) => (
  <div>
    <div className="text-3xl font-bold mb-5">GPT 요약</div>
    <div className="mb-5 text-xl">
      {comment}
    </div>
    <div className="flex gap-2">
      <a href="https://naver.com">
        <img
          src={table}
          alt="Table"
          className="w-8 h-8"
        />
      </a>
      <a href="https://naver.com">
        <img
          src={kakao}
          alt="Kakao"
          className="w-8 h-8"
        />
      </a>
      <a href="https://naver.com">
        <img
          src={naver}
          alt="Naver"
          className="w-8 h-8"
        />
      </a>
      <button className="bg-blue-500 text-white px-2 py-1 rounded">
        <a href={`https://map.kakao.com/link/to/${result['station_name']},${result['coordinates']['y']},${result['coordinates']['x']}`}>
          길찾기
        </a>
      </button>
      <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={onShare}>
        공유하기
      </button>
    </div>
  </div>
);

export default RecommendationRight;
