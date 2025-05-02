import React from 'react'
import Background from '../assets/videos/galaxy.mp4';

const VideoBackground = () => {
    return (
      <div>
      <video
  className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
  autoPlay
  muted
  loop
  playsInline
>
  <source src={Background} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      
      
      </div>
    );
  };
  
  export default VideoBackground;
  
