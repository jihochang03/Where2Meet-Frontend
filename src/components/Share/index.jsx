// src/components/Share/index.jsx
import React from "react";
import close from "../../assets/images/close.png";
import kakao from "../../assets/images/kakao_48.png";
import share from "../../assets/images/share_48.png";

export const Share = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white w-[450px] rounded-[14px] shadow-lg pb-10">
        <img
          className="absolute w-[27px] h-[27px] top-[18px] right-[18px] cursor-pointer"
          alt="Close Icon"
          src={close}
          onClick={onClose}
        />
        <div className="flex flex-col items-center gap-[15px] mt-8">
          <div className="font-bold text-black text-3xl text-center">
            공유하기
          </div>
          <div className="text-black text-center">
            https://where2meet/hehe/com
          </div>
        </div>
        <div className="flex justify-around items-center mt-8">
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-12 h-12"
              alt="KakaoTalk Icon"
              src={kakao}
            />
            <button className="bg-[#2c2c2c] text-white px-4 py-2 rounded">
              카카오톡
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-12 h-12"
              alt="Share Icon"
              src={share}
            />
            <button className="bg-[#2c2c2c] text-white px-4 py-2 rounded">
              URL 복사
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
