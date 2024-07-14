// src/routes/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import Recommendation from '../components/Recommendation/Recommendation';
import resultsData from '../data/results';
import comments from '../data/gpt_comments';

const { kakao } = window

const ResultPage = ({ results, setResults }) => {
  const [selected, setSelected] = useState(1);
  const [gptComments, setGptComments] = useState([]);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
    };
    new kakao.maps.Map(container, options);

    if(results.length === 0) {
      // TODO: url param에서 가져온 정보로 results 세팅
      // URL에 담아야 할 것들: startpoints들의 x,y 좌표 / 결과 역 이름 3개 / factor들

      // TODO: url param에 유효한 정보가 없는 경우
      // alert 창 뜨면서, 메인 페이지로 redirect

      // 일단 임시로 dummy data 가져옴
      setResults(resultsData);
    }
  }, []);

  useEffect(() => {
    if (results.length === 0) return;

    // TODO: get GPT comments from server

    // 일단 임시로 dummy data 가져옴
    setGptComments(comments);
  }, [results]);


  return (
    results.length === 0 ? (
      <div className="relative w-full h-screen">
        <div id="map" className="absolute inset-0 w-full h-full z-0"></div>
      </div>
    ) : (
      <div className="relative w-full h-screen">
        <div id="map" className="absolute inset-0 w-full h-full z-0"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Recommendation results={results} gptComments={gptComments} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    )
  );
};

export default ResultPage;
