// src/components/StartPoint/StartPointGroup.jsx
import React from 'react';
import StartPoint from './StartPoint';

const StartPointGroup = ({ points, onAddPoint, onDeletePoint, onSearchMode }) => (
  <div className="flex flex-col w-full items-center gap-[21px]">
    {points.map((point, index) => (
      <StartPoint key={index} point={point} isLast={false} onDeletePoint={onDeletePoint} onSearchMode={onSearchMode} />
    ))}
    <StartPoint isLast={true} onAddPoint={onAddPoint} />
  </div>
);

export default StartPointGroup;
