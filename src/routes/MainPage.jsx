import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartPointGroup from "../components/StartPoint/StartPointGroup";
import KeywordGroup from "../components/Keyword/KeywordGroup";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Search from "../components/Search/Search";
import LoadingScreen from "../components/Loading/Loading";
import keywordsData from "../data/keywords";
import results from "../data/results";
import comments from "../data/gpt_comments";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = ({ setResults, setComments, setStartPoints }) => {
  // set True when StartPoint is clicked
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // startPoints for MainPage (not stored in the localStorage)
  const [points, setPoints] = useState([
    { id: 1, place_name: '', road_address_name: '', lon: '', lat: '' },
    { id: 2, place_name: '', road_address_name: '', lon: '', lat: '' },
  ])
  // StartPoint id to be searched
  const [searchTarget, setSearchTarget] = useState(0);
  // store StartPoint data
  const [pointNum, setPointNum] = useState(2);
  // keyword 
  const [keywords, setKeywords] = useState(keywordsData);
  const [selectedKeywords, setSelectedKeywords] = useState([false, false, false, false, false, false]);

  
  const navigate = useNavigate();
  const handleFindMeetingPlace = () => {
    // check if every startPoints have valid lon, lat values
    for (const point of points) {
      if (!point.place_name || !point.road_address_name || !point.lon || !point.lat) {
        toast.error("출발지를 모두 입력해주세요❗", {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        return;
      }
    }

    setIsLoading(true); // 로딩 시작

    setTimeout(() => {
      setIsLoading(false); // 로딩 종료
      // send startPoints, selectedKeywords to the server
      // results is a dummy data now, so it should be replaced with the actual data from the server
      // comments should be replaced with the actual data from the server
      // set global states (results, comments, startPoints) for the ResultPage
      setResults(results);
      setComments(comments);
      setStartPoints(points);
      // save global states to the localStorage in case of page refresh
      localStorage.setItem("startPoints", JSON.stringify(points));
      localStorage.setItem("results", JSON.stringify(results));
      localStorage.setItem("comments", JSON.stringify(comments));

    navigate('/result');
  }, 4000);
};

  const handleAddStartPoint = () => {
    if(points.length >= 5) {
      toast.error('최대 5개의 출발지 추가 가능❗', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });        
      return;
    }
    setPoints([
      ...points,
      {
        id: pointNum + 1,
        place_name: '',
        road_address_name: '',
        lon: '',
        lat: '',
      }
    ]);
    setPointNum(pointNum + 1);
  }
  const handleDeleteStartPoint = (id) => {
    if (points.length <= 2) {
      toast.error('최소 2개의 출발지 필요❗', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });  
      return;
    }
    setPoints(points.filter(point => point.id !== id));
  }


  const handleSelectKeyword = (index) => {
    const newSelectedKeywords = selectedKeywords.map((selected, i) => {
      if(i === index) {
        return !selected;
      }
      return selected;
    });
    setSelectedKeywords(newSelectedKeywords);
  }


  const handleSearchMode = (id) => {
    setSearchTarget(id);
    setIsSearchMode(true);
  };
  const handleNormalMode = (selected) => {
    if(selected !== null) {
      const newPoints = points.map(point => {
        if(point.id === searchTarget) {
          return {
            ...point,
            place_name: selected.place_name,
            road_address_name: selected.road_address_name,
            lon: selected.x,
            lat: selected.y,
          };
        }
        return point;
      });
      setPoints(newPoints);
    }

    setSearchTarget(0);
    setIsSearchMode(false);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full h-screen">
      <ToastContainer icon={false} />
      {isSearchMode ? (
        <div className="absolute w-full h-full top-0 left-0 rounded-md shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(193,219,229)_0%,rgb(197,210,229)_100%)] flex justify-center items-center p-4 md:p-8">
          <Search onNormalMode={handleNormalMode} />
        </div>
      ) : (
        <div className="bg-white w-full md:min-w-[min(600px,30%)] md:w-[353px] h-full relative">
          <div className="absolute w-full h-full top-0 left-0 rounded-md shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(193,219,229)_0%,rgb(197,210,229)_100%)] flex flex-col gap-4 p-8">
            <StartPointGroup points={points} onAddPoint={handleAddStartPoint} onDeletePoint={handleDeleteStartPoint} onSearchMode={handleSearchMode} />
            <KeywordGroup keywords={keywords} selectedKeywords={selectedKeywords} onSelectKeyword={handleSelectKeyword} />
            <Button text="만남 장소 찾기" onClick={handleFindMeetingPlace} />
          </div>
        </div>
      )}
      {!isSearchMode && <Logo />}
      {isLoading && <LoadingScreen />}
    </div>
  );
};

export default MainPage;
