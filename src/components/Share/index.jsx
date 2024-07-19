// src/components/Share/index.jsx
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import close from "../../assets/images/close.png";
import kakao from "../../assets/images/kakao_48.png";
import share from "../../assets/images/share_48.png";

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Share = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [shareText, setShareText] = useState('');

  useEffect(() => {
    setVisible(true);

    // set shareText with the actual data
    setShareText(
`우리의 만남 장소는 서울대입구역 입니다! 
~~~~ 가 좋아요
🚶‍♀️함께 가실래요?🚶‍♂️
직접 해보기 👉 https://where2meet.com/`);
  }, []);

  const handleCopyURL = () => {
    toast.info('URL 복사 완료!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });  
  }

  const handleKakaoShare = () => {
    // TODO: share the URL to KakaoTalk using kakao sdk

  }

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 500);
  }

  return (
    <div className={`fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative bg-white rounded-[14px] shadow-lg pb-10" style={{ minWidth: 'min(450px, 90%)', maxWidth: 'min(450px, 90%)' }}>
        <img
          className="absolute w-[27px] h-[27px] top-[18px] right-[18px] cursor-pointer"
          alt="Close Icon"
          src={close}
          onClick={handleClose}
        />
        <div className="flex flex-col items-center gap-[15px] mt-8 px-5">
          <div className="font-bold text-black text-2xl sm:text-3xl text-center">
            공유하기
          </div>
          <div className="text-black text-center truncate" style={{ maxWidth: '100%' }}>
            👇친구에게 공유해보아요👇
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
              className="bg-[#2c2c2c] text-white py-2 rounded w-24 sm:w-32"
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
              text={shareText}
              onCopy={handleCopyURL}
            >
              <button className="bg-[#2c2c2c] text-white py-2 rounded w-24 sm:w-32">
                결과 복사
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <ToastContainer icon={false} />
    </div>
  );
};

export default Share;
