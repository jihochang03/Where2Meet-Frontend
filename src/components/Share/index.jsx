// src/components/Share/index.jsx
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import close from "../../assets/images/close.png";
import kakao from "../../assets/images/kakao_48.png";
import share from "../../assets/images/share_48.png";

export const Share = ({ onClose }) => {
  const handleCopyURL = () => {
    // TODO: change the alert message to a toast message
    alert("URL이 복사되었습니다.");
  }

  const handleKakaoShare = () => {
    // TODO: share the URL to KakaoTalk using kakao sdk

  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-[14px] shadow-lg pb-10" style={{ minWidth: 'min(450px, 90%)', maxWidth: 'min(450px, 90%)' }}>
        <img
          className="absolute w-[27px] h-[27px] top-[18px] right-[18px] cursor-pointer"
          alt="Close Icon"
          src={close}
          onClick={onClose}
        />
        <div className="flex flex-col items-center gap-[15px] mt-8 px-5">
          <div className="font-bold text-black text-3xl text-center">
            공유하기
          </div>
          <div className="text-black text-center truncate" style={{ maxWidth: '100%' }}>
            https://where2meet/result?x1=126.952713197762&y1=37.4812845080678&x2=126.952713197762&y2=37.4812845080678&x3=126.952713197762&y3=37.4812845080678
          </div>
        </div>
        <div className="flex justify-around items-center mt-8">
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-12 h-12"
              alt="KakaoTalk Icon"
              src={kakao}
            />
            <button
              className="bg-[#2c2c2c] text-white py-2 rounded w-32"
              onClick={handleKakaoShare}
            >
              카카오톡
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-12 h-12"
              alt="Share Icon"
              src={share}
            />
            <CopyToClipboard
              text="https://where2meet/hehe/com"
              onCopy={handleCopyURL}
            >
              <button className="bg-[#2c2c2c] text-white py-2 rounded w-32">
                URL 복사
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
