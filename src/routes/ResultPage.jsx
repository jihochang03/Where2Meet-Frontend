// src/routes/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommendation from '../components/Recommendation/Recommendation';
import Share from '../components/Share';
import resultsData from '../data/results';
import comments from '../data/gpt_comments';
import Button from '../components/Button';

const { kakao } = window

const ResultPage = ({ results, setResults, startPoints }) => {
  const [selected, setSelected] = useState(1);
  const [gptComments, setGptComments] = useState([]);
  const [shareMode, setShareMode] = useState(false);
  const navigate = useNavigate();
  var map; // kakaomap

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
    };
    map =new kakao.maps.Map(container, options);

    // if(results.length === 0 || startPoints.length === 0) {
    //   navigate('/');  
    // }
    // 일단 서버 연결하기 전이므로 Dummy Data 가져옴
    setResults(resultsData);
    setGptComments(comments);

    showMarker();
  }, []);

  useEffect(() => {
    showMarker();
  }, [selected]);

  const showMarker = () => {
    var points = [];
    for(let i=0; i<startPoints.length; i++) {
      points.push(new kakao.maps.LatLng(parseFloat(startPoints[i].lat), parseFloat(startPoints[i].lon)));
    }

    var bounds = new kakao.maps.LatLngBounds();

    for(let i=0; i<points.length; i++) {
      var imageSize = new kakao.maps.Size(24,35);
      var markerImage = new kakao.maps.MarkerImage('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', imageSize);
      var marker = new kakao.maps.Marker({
        map: map,
        image: markerImage,
        position: points[i]
      });

      bounds.extend(points[i]);
    }

    map.setBounds(bounds);
  }

  const handleBackToMain = () => {
    navigate('/'); // Navigate to the main page route ('/')
  };
  
  return (
    <div className="relative w-full h-screen">
      <div id="map" className="absolute w-full h-full z-0"></div>
      {results.length > 0 && (
        <Recommendation results={results} gptComments={gptComments} selected={selected} setSelected={setSelected} onShare={() => setShareMode(true)} />
      )}
      {shareMode && (
        <Share onClose={() => setShareMode(false)} gptComment={gptComments[selected-1]} result={results[selected-1]} />
      )}
      <div className="absolute left-5 z-10">
        <Button text="다시하기" onClick={handleBackToMain} />
      </div>
    </div>
  );
};

export default ResultPage;
