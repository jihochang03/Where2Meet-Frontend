import React from "react";
import cats from "../../assets/images/cats.png";
import catfoot1 from "../../assets/images/catfoot1.png";
import catfoot2 from "../../assets/images/catfoot2.png";

const LoadingScreen = () => {
  const renderFootprints = (count) => {
    return (
      <div className="flex mt-2 gap-7">
        {Array.from({ length: count }).map((_, index) => {
          const delay = index * 200;
          return (
            <img
              key={index}
              src={index % 2 === 0 ? catfoot1 : catfoot2}
              className={`animate-fadePaw`}
              style={{ animationDelay: `${delay}ms` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
      <p className="text-xl md:text-2xl">장소 찾는 중...</p>
      <img src={cats} className="w-2/3 md:w-1/3 animate-moveCart" />
      <div className="block md:hidden">
        {renderFootprints(6)}
      </div>
      <div className="hidden md:block">
        {renderFootprints(10)}
      </div>
    </div>
  );
};

export default LoadingScreen;
