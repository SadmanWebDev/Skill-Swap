import React from "react";
import logo from '/logo.png'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={logo} alt="logo" className="w-15 animate-spin" />
    </div>
  );
};

export default Loading;
