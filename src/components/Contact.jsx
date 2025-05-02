import React from 'react';
import Blackhole from '../assets/videos/blackhole.mp4';

const Contact = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background video */}
      <video
        src={Blackhole}
        className="absolute pb-5 scale-125 rotate-180 top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content on top of the video */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-[white/10] backdrop-blur-md text-white shadow-md flex items-center px-20 z-20">
    {/* Logo (Left) */}
    <div className="flex-1">
      <h1 className="text-2xl font-bold">SK Portfolio</h1>
    </div>

    {/* Nav (Center) */}
    <div className="hidden md:flex flex-1 justify-center">
      <div className="flex space-x-8 items-center border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full">
        <a href="#home"      className="text-white hover:text-[#b49bff]">Home</a>
        <a href="#about"     className="text-white hover:text-[#b49bff]">About</a>
        <a href="#skills"    className="text-white hover:text-[#b49bff]">Skills</a>
        <a href="#work"      className="text-white hover:text-[#b49bff]">Work</a>
      </div>
    </div>
  </div>
    </section>
  );
};

export default Contact;
