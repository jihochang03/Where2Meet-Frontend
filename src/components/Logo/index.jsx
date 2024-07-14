// src/components/Button.jsx
import React from 'react';
import logo from '../../assets/images/logo.png';


const Logo = () => (
  <div className="flex-grow relative flex justify-center items-center">
    <img src={logo} alt="Logo" className="absolute inset-0 w-3/5 h-auto m-auto" />
  </div>
);

export default Logo;
