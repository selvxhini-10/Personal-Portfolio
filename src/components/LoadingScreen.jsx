import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBackground from '../assets/videos/galaxy.mp4';

const LoadingScreen = () => {
  const [text, setText] = useState("");
  const fullText = "<Loading />";
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          navigate("/home"); 
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="fixed bg-black inset-0 z-50 text-gray-100 flex flex-col items-center justify-center">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={LoadingBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
