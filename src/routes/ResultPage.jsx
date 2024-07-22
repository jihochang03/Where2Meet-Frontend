// src/routes/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommendation from '../components/Recommendation/Recommendation';
import Share from '../components/Share';
import Button from '../components/Button';
import { ToastContainer } from 'react-toastify';

const { kakao } = window

const ResultPage = ({ results, comments, startPoints, paths }) => {
  const [selected, setSelected] = useState(1);
  const [shareMode, setShareMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(results.length === 0 || startPoints.length === 0 || comments.length === 0) {
      // no results or startPoints (maybe cache cleared?)
      navigate('/');  
    }
    // if(paths.length === 0) {
    //   // no paths (maybe cache cleared)
    //   toast.info('경로를 표시하는데 실패했어요❗', {
    //     position: "top-center",
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: false,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   }); 
    // }
    
    // render map
    const map = renderMap();
    // mark final point on the map & set bounds
    markPointsAndSetBounds(map);
    // mark path on the map
    markPathOnMap(map);
  }, []);

  useEffect(() => {
    // rerender map
    const map = renderMap();
    // mark final point on the map & set bounds
    markPointsAndSetBounds(map);
    // mark path on the map
    markPathOnMap(map);
  }, [selected]);

  const renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 3,
    };
    return new kakao.maps.Map(container, options);
  }

  const markPointsAndSetBounds = (map) => {
    startPoints.forEach(startPoint => {
      const imageSize = new kakao.maps.Size(32, 32);
      const markerImage = new kakao.maps.MarkerImage('https://www.where2meet.site/images/flag_red.png', imageSize);
      new kakao.maps.Marker({
        map: map,
        image: markerImage,
        position: new kakao.maps.LatLng(parseFloat(startPoint.lat), parseFloat(startPoint.lon)),
      });
    });

    const finalPoint = new kakao.maps.LatLng(results[selected-1].coordinates.lat, results[selected-1].coordinates.lon);
    const imageSize = new kakao.maps.Size(32, 32);
    const markerImage = new kakao.maps.MarkerImage('https://www.where2meet.site/images/flag_blue.png', imageSize);
    new kakao.maps.Marker({
      map: map,
      image: markerImage,
      position: finalPoint
    });

    const bounds = new kakao.maps.LatLngBounds();
    startPoints.forEach(startPoint => bounds.extend(new kakao.maps.LatLng(parseFloat(startPoint.lat), parseFloat(startPoint.lon))));
    bounds.extend(finalPoint);
    map.setBounds(bounds);
  }

  const markPathOnMap = (map) => {
    const color = ['#ff679a', '#00bbdc', '#ff7721', '#0077dd', '#077000']

    for(let i=0; i<startPoints.length; i++) {
      if(paths[selected-1][i] === null) {
        // if ODsay API failed => just draw a straight line
        const linePath = [
          new kakao.maps.LatLng(parseFloat(startPoints[i].lat), parseFloat(startPoints[i].lon)),
          new kakao.maps.LatLng(results[selected-1].coordinates.lat, results[selected-1].coordinates.lon),
        ];
        const polyline = new kakao.maps.Polyline({
          path: linePath,
          strokeWeight: 5,
          strokeColor: color[i],
          strokeOpacity: 0.7,
          strokeStyle: 'solid',
        });
        polyline.setMap(map);
        continue;
      }

      const result = paths[selected-1][i];

      // find path index with minimum 'totalTime'
      const minIndex = result.reduce((minIndex, path, index) => {
        return path.info.totalTime < result[minIndex].info.totalTime ? index : minIndex;
      }, 0);
      const subPath = result[minIndex]['subPath'];

      // add line paths
      var linePaths = [];
      const pathLength = subPath.length;

      for(let j=0; j<pathLength; j++) {
        if(subPath[j].trafficType === 3) { // walk
          var linePath;
          if(j === 0) {
            linePath = [
              new kakao.maps.LatLng(parseFloat(startPoints[i].lat), parseFloat(startPoints[i].lon)),
              new kakao.maps.LatLng(subPath[1].startY, subPath[1].startX),
            ];
          } else if(j === pathLength-1) {
            linePath = [
              new kakao.maps.LatLng(subPath[j-1].endY, subPath[j-1].endX),
              new kakao.maps.LatLng(results[selected-1].coordinates.lat, results[selected-1].coordinates.lon),
            ];
          } else {
            linePath = [
              new kakao.maps.LatLng(subPath[j-1].endY, subPath[j-1].endX),
              new kakao.maps.LatLng(subPath[j+1].startY, subPath[j+1].startX),
            ];
          }
          linePaths.push(linePath);
        } else { // subway or bus
          const stations = subPath[j]['passStopList']['stations'];

          for(let k=0; k<stations.length-1; k++) {
            const linePath = [
              new kakao.maps.LatLng(stations[k].y, stations[k].x),
              new kakao.maps.LatLng(stations[k+1].y, stations[k+1].x),
            ];
            linePaths.push(linePath);
          }
        }
      }

      // draw polylines on the map
      linePaths.forEach((linePath) => {
        const polyline = new kakao.maps.Polyline({
          path: linePath,
          strokeWeight: 5,
          strokeColor: color[i],
          strokeOpacity: 0.7,
          strokeStyle: 'solid',
        });
        polyline.setMap(map);
      });
    }
  }

  
  const handleBackToMain = () => {
    navigate('/'); // Navigate to the main page route ('/')
  };
  
  return (
    <div className="relative w-full h-screen">
      <ToastContainer icon={false} />
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