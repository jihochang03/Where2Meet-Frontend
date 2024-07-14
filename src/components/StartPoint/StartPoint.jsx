// src/components/StartPoint/StartPoint.jsx
import React from 'react';
import footprint from '../../assets/images/footprint.png';
import addpoint from '../../assets/images/addpoint.png';
import deletePoint from '../../assets/images/deletepoint.png';

const StartPoint = ({ point, isLast, onAddPoint, onDeletePoint, onSearchMode }) => (
  <div className="flex items-center gap-2.5 relative self-stretch w-full">
    <img
      src={footprint}
      alt="Footprint"
      className={`w-6 h-6 ${isLast ? 'opacity-0' : ''}`}
    />
    <div className={`flex-1 flex items-center h-10 p-2.5 ${isLast ? 'bg-blue-100' : 'bg-white'} rounded-[5px]`}>
      <input
        type="text"
        value={isLast ? "경로 추가" : point.place_name}
        placeholder={!isLast ? "출발 장소 입력하기" : ""}
        readOnly={!isLast}
        className={`w-full h-full bg-transparent outline-none text-[#363131] text-lg ${isLast ? '' : 'cursor-pointer'}`}
        onClick={() => { if(!isLast) onSearchMode(point.id) }}
      />
      {isLast ? <img src={addpoint} alt="Add Point" className="w-6 h-6 ml-2 cursor-pointer" onClick={onAddPoint} />
      : <img src={deletePoint} alt="Delete Point" className="w-6 h-6 ml-2 cursor-pointer" onClick={()=>{onDeletePoint(point.id)}} />
      }
    </div>
  </div>
);

export default StartPoint;
