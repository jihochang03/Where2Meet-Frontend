import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import '../../App.css';

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Splash screen visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="splash-screen fixed inset-0 flex justify-center items-center bg-white z-50">
         <div className="flex-grow relative flex justify-center items-center">
    <h1
      className="z-10 font-['Gugi'] text-[44px] mt-14 md:block
font-normal text-transparent bg-clip-text bg-gradient-to-r from-logo-blue to-logo-black txt drop-shadow-md"
    >
      <span>우</span>
      <span>리 </span>
      <span>어</span>
      <span>디</span>
      <span>서 </span>
      <span>만</span>
      <span>나</span>
    </h1>
    <img
      src={logo} alt="Logo" className="absolute inset-0 w-80 h-auto m-auto"
    />
  </div>
      </div>
    )
  );
};

export default SplashScreen;