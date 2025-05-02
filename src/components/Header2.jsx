import Spline from '@splinetool/react-spline';
import React, { useState, useRef } from 'react';
import { ReactTyped } from "react-typed";

const Header2 = () => {
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

        <div class="grid grid-cols-2 gap-4">
              <div>

                   {/* Location Badge */}
         <div className="flex items-center mb-6 w-max rounded-full border border-blue-400/50 bg-black bg-opacity-30 px-4 py-2 hover:bg-opacity-50 transition-all shadow-md shadow-blue-900/20">
  <span className="text-blue-300 mr-2">📍</span>
  <span className="text-blue-300">Toronto, Ontario</span>
</div>
          

              <h1 className="text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
      Hey! I'm <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">Selvahini Kamalarajan.</span>
    </h1>
    <ReactTyped
      className="pb-10 block-inline text-3xl w-max font-bold bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
      strings={["Developer.", "Lifelong Learner.", "Innovator."]}
      typeSpeed={90}
      backSpeed={80}
      loop
      showCursor={true}
      cursorChar="_"
    />  
     <button 
                onClick={triggerWormhole}
                className="flex items-center space-x-2 w-max rounded-full border border-blue-400 bg-black bg-opacity-30 px-6 py-3 text-white hover:bg-opacity-50 transition">
                <span>▶</span>
                <span>Contact Me</span>
              </button>
    </div>
            
                
             
            
    
              <div>
             
              {/* Spline Model */}
             <div className="w-full h-screen overflow-hidden relative z-0">
            
                  <Spline scene="https://prod.spline.design/8VPOppxlU4Qyv9up/scene.splinecode" />
                  </div>

                  
           </div>
          

              
              </div>
   
  );
};
export default Header2;

