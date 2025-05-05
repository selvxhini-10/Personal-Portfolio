import React, { useState, useRef } from 'react';

import { ReactTyped } from "react-typed";
import Video from '../assets/videos/hero.mp4'
import Video2 from '../assets/videos/header.mp4'
import Background from '../assets/videos/bg-video.mp4'
import Blackhole from '../assets/videos/blackhole.mp4';
import { Analytics } from "@vercel/analytics/react"


const Banner = () => {
  const [wormholeActive, setWormholeActive] = useState(false);
    const videoRef = useRef(null);
    
    const triggerWormhole = () => {
      setWormholeActive(true);
      
      // After animation completes, you could navigate or open contact form
      setTimeout(() => {
        setWormholeActive(false);
        // Add navigation or modal opening code here
        // e.g., history.push('/contact') or setContactModalOpen(true)
      }, 3000); // Adjust timing based on your animation duration
    };
  
    return (
      <section id="home">
         <video 
                  ref={videoRef}
                  src={Blackhole} 
                  className={`width-[100%] mt-[-23.5%] transition-all duration-1000 ${wormholeActive ? 'scale-150 brightness-150' : ''}`} 
                  type="video/mp4"
                  autoPlay
                  muted
                  loop
                  playsInline>
                </video>
                <Analytics />
                
        <div className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  {/* Overlay for better contrast */}

{/* Text Content */}
<div className="relative z-10 text-center">
        <div className='text-white'>
        <div className="absolute top-0 left-0 w-full h-full"></div>

               
              
            </div>
            </div>
            <div onClick={triggerWormhole} class="scroll-down"></div>
         </div>
           </section>
    );


};
export default Banner;