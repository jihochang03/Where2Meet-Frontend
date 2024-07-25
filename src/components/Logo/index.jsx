// src/components/Button.jsx
import React from "react";
import logo from "../../assets/images/logo.png";
import '../../App.css';

const Logo = () => (
  <div className="flex-grow relative flex justify-center items-center">
    <h1
      className="hidden z-10 font-['Gugi'] xl:text-[80px] xl:mt-28 lg:text-7xl lg:mt-24 md:text-5xl md:mt-16 md:block
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
      src={logo} alt="Logo" className="absolute inset-0 w-3/5 h-auto m-auto"
    />
  </div>
);

export default Logo;
