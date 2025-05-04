import React from 'react';
import Blackhole from '../assets/videos/blackhole3.mp4';
import { FaRegCopyright } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="#contact" className="relative w-full h-[80vh] overflow-visible pt-24">
  {/* Background video starting at the top of the section */}
  <video
    src={Blackhole}
    className="absolute pb-80 bottom-0 left-0 w-full h-auto object-contain z-[-1]"
    autoPlay
    muted
    loop
    playsInline
  />
     
      <div className="absolute bottom-0 left-0 w-full h-80 bg-white/5 backdrop-blur-md text-white shadow-md z-20 flex flex-col items-center justify-center px-4 text-center space-y-6">

{/* Title */}
<h1 className="text-4xl font-bold">
  Keep In <span className="bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-clip-text text-transparent animate-gradient-x">Touch!</span>
</h1>

{/* Email and Copy Button */}
<div className="flex items-center gap-3 bg-white/5 border border-purple-400/30 rounded-full px-4 py-2 w-fit backdrop-blur-lg shadow-inner">
  <input
    type="text"
    id="email"
    value="s5kamala@uwaterloo.ca"
    disabled
    readOnly
    className="bg-transparent text-white font-medium text-sm focus:outline-none w-64"
  />
  <button
    onClick={() => {
      navigator.clipboard.writeText("s5kamala@uwaterloo.ca");
      const copyText = document.getElementById("copy-message");
      if (copyText) {
        copyText.classList.remove("hidden");
        setTimeout(() => copyText.classList.add("hidden"), 1500);
      }
    }}
    className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white px-4 py-1.5 rounded-full border-purple-400 hover:shadow-[0_0_25px_#cbaaff] transition duration-300"
  >
    Copy
  </button>
  <span id="copy-message" className="hidden text-xs text-green-300 ml-2">Copied!</span>
</div>

{/* Footer */}
<div className="text-sm text-white/80 flex items-center gap-1">
  <FaRegCopyright />
  <span>Coded with 🫶🏽 by Selvahini Kamalarajan.</span>
</div>
</div>

    </section>
  );
};

export default Contact;
