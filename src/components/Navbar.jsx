import React, {useState} from 'react'
import { ReactTyped } from "react-typed";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };

    return (
      <section id="home">
        {/* Enhanced navigation with glass effect and hover-only underlines */}
        <nav className="w-full px-8 py-4 bg-[rgba(16,6,54,0.45)] text-white backdrop-blur-md border-b border-indigo-500/20 shadow-lg fixed top-0 left-0 z-20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-900 bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-800">
             Selvahini
             </h1>

            <ul className='hidden md:flex items-center space-x-2'>
              <li className='p-4'>
                <a 
                  href="#about" 
                  className="relative px-2 py-1 font-medium tracking-wider transition-all duration-300 ease-in-out text-gray-100 hover:text-pink-200 group"
                >
                  ABOUT
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li className='p-4'>
                <a 
                  href="#features" 
                  className="relative px-2 py-1 font-medium tracking-wider transition-all duration-300 ease-in-out text-gray-100 hover:text-pink-200 group"
                >
                  PROJECTS
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li className='p-4'>
                <a 
                  href="#impact" 
                  className="relative px-2 py-1 font-medium tracking-wider transition-all duration-300 ease-in-out text-gray-100 hover:text-pink-200 group"
                >
                  EXPERIENCE
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li className='p-4'>
                <a 
                  href="#newsletter" 
                  className="relative px-2 py-1 font-medium tracking-wider transition-all duration-300 ease-in-out text-gray-100 hover:text-pink-200 group"
                >
                  CONTACT
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} className="text-pink-300 transition-all hover:text-white"/> : <AiOutlineMenu size={20} className="text-pink-300 transition-all hover:text-white"/>}
          </div>
          
          {/* Mobile menu with improved styling */}
          <div 
            className={
              !nav 
                ? 'fixed left-0 top-0 w-[60%] h-full bg-[rgba(16,6,54,0.95)] backdrop-blur-lg border-r border-indigo-500/30 ease-in-out duration-500 z-40 shadow-2xl'
                : 'fixed left-[-100%]'
            }
          >
            <h1 className='w-full text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-900 bg-clip-text text-transparent m-4'>Selvahini.</h1>
            <ul className='uppercase space-y-2 w-full'>
              <li className="p-4 border-b border-indigo-500/30 text-white w-full hover:bg-indigo-900/30 transition-all"> 
                <a href="#about">ABOUT</a>
              </li>
              <li className="p-4 border-b border-indigo-500/30 text-white w-full hover:bg-indigo-900/30 transition-all">
                <a href="#features">PROJECTS</a>
              </li>
              <li className="p-4 border-b border-indigo-500/30 text-white w-full hover:bg-indigo-900/30 transition-all">  
                <a href="#impact">IMPACT</a>
              </li>
              <li className="p-4 border-b border-indigo-500/30 text-white w-full hover:bg-indigo-900/30 transition-all">
                <a href="#newsletter">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
};

export default Navbar;