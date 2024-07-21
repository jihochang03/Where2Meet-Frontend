// src/routes/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommendation from '../components/Recommendation/Recommendation';
import Share from '../components/Share';
import Button from '../components/Button';

const { kakao } = window

const ResultPage = ({ results, comments, startPoints }) => {
  const [selected, setSelected] = useState(1);
  const [shareMode, setShareMode] = useState(false);
  const [map, setMap] = useState(null);
  const [prevMarker, setPrevMarker] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
    };
    const mapInstance = new kakao.maps.Map(container, options);
    setMap(mapInstance);

    if(results.length === 0 || startPoints.length === 0) {
      // no results or startPoints (maybe cache cleared?)
      navigate('/');  
    }
    
    // mark start points on the map
    startPoints.forEach(startPoint => {
      console.log("startPoint: ", startPoint);
      const imageSize = new kakao.maps.Size(32, 32);
      const markerImage = new kakao.maps.MarkerImage('https://www.where2meet.site/images/flag_red.png', imageSize);
      new kakao.maps.Marker({
        map: mapInstance,
        image: markerImage,
        position: new kakao.maps.LatLng(parseFloat(startPoint.lat), parseFloat(startPoint.lon)),
      });
    });

    // mark final point on the map & set bounds
    markFinalPointAndSetBounds(mapInstance);
  }, []);

  useEffect(() => {
    if(map === null) return;
    // if previous marker exists, remove it
    if(prevMarker !== null) prevMarker.setMap(null);

    // mark final point on the map & set bounds
    markFinalPointAndSetBounds(map);
  }, [selected]);


  const markFinalPointAndSetBounds = (map) => {
    console.log("selected: ", results[selected-1]);
    const finalPoint = new kakao.maps.LatLng(results[selected-1].coordinates.lat, results[selected-1].coordinates.lon);
    const imageSize = new kakao.maps.Size(32, 32);
    const markerImage = new kakao.maps.MarkerImage('https://www.where2meet.site/images/flag_blue.png', imageSize);
    const marker = new kakao.maps.Marker({
      map: map,
      image: markerImage,
      position: finalPoint
    });
    setPrevMarker(marker);

    const bounds = new kakao.maps.LatLngBounds();
    startPoints.forEach(startPoint => bounds.extend(new kakao.maps.LatLng(parseFloat(startPoint.lat), parseFloat(startPoint.lon))));
    bounds.extend(finalPoint);
    map.setBounds(bounds);
  }

  
  const handleBackToMain = () => {
    navigate('/'); // Navigate to the main page route ('/')
  };
  
  return (
    <div className="relative w-full h-screen">
      <div id="map" className="absolute w-full h-full z-0"></div>
      {results.length > 0 && (
        <Recommendation results={results} comments={comments} selected={selected} setSelected={setSelected} onShare={() => setShareMode(true)} />
      )}
      {shareMode && (
        <Share onClose={() => setShareMode(false)} comments={comments[selected-1]} result={results[selected-1]} />
      )}
      <div className="absolute left-5 z-10">
        <Button text="다시하기" onClick={handleBackToMain} />
      </div>
    </div>
  );
};

export default ResultPage;
