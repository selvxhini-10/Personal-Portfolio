import React, { useState, useRef } from 'react';
import Blackhole from '../assets/videos/blackhole2.mp4';
import { SparklesIcon } from "@heroicons/react/24/solid";


export const Header = () => {
  const [wormholeActive, setWormholeActive] = useState(false);
  const videoRef = useRef(null);
  
  const triggerWormhole = () => {
    setWormholeActive(true);
    
    // After animation completes, you could navigate or open contact form
    setTimeout(() => {
      setWormholeActive(false);
      // Add navigation or modal opening code here
      // e.g., history.push('/contact') or setContactModalOpen(true)
      scrollToSection('about'); 
    }, 3000); // Adjust timing based on your animation duration

  };
  
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">


<video
    ref={videoRef}
    src={Blackhole}
    className={`absolute mt-24 top-0 left-0 w-full h-full object-cover z-[1] transition-all duration-1000 ${
      wormholeActive ? 'mt-48 scale-150 brightness-150' : ''
    }`}
    autoPlay
    muted
    loop
    playsInline
  />
        
        {/* Wormhole Overlay */}
  <div className={`absolute inset-0 bg-black opacity-0 
          ${wormholeActive ? 'animate-wormhole' : ''}`}>
         
        </div>
        
        {/* Content Overlay */}
        <div className={`relative z-10 px-8 transition-opacity duration-1000 
    ${wormholeActive ? 'opacity-0' : 'opacity-100'}`}>
    
          {/* Main Content */}

          <div className="m-auto pb-28 h-full w-full flex flex-col gap-5 justify-center items-center text-center pt-40 sm:pt-80 px-4 sm:px-4">

          <div className="py-4 opacity-90 px-4 border border-[#b49bff] rounded-full flex items-center gap-2 bg-white/5 backdrop-blur-md shadow-[0_0_15px_#b49bff]">
  <SparklesIcon className="text-[#b49bff] h-5 w-5" />
  <h1 className="text-sm font-semibold text-[#d498fb]">
    Computer Engineering @ UWaterloo
  </h1>
</div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2c1c59]">
       <span className="bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Hello, I'm Selvahini</span>
       <br/><span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Kamalarajan</span>
       </h1>
     
      <p className="mt-4 text-[17px] font-bold text-[#d498fb] max-w-xl">
      Delivering Human-Centered Solutions and User-Friendly Experiences.
      </p>
      </div>
      <div className="group flex flex-col items-center cursor-pointer">
      <div className="absolute sm:right-[0%]  right-[5%] inset-x-0 bottom-0 z-20 flex justify-center pb-6 sm:pb-10">
  <div className="group flex flex-col items-center cursor-pointer">
    <span className="sm:mb-6 mb-8 sm:mr-2 ml-4 sm:ml-0 text-sm text-white animate-bounce group-hover:text-[#b49bff]">Click</span>
    <div
      className="scroll-down w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1 transition duration-300 hover:shadow-[0_0_15px_#b49bff] hover:text-[#b49bff]"
      onClick={() => triggerWormhole()}
    />
  </div>
</div>

 
</div>
</div>
      
      </section>
      
  );
};

export default Header;