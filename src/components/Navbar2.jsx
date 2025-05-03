import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Navbar2 = () => {
    const [nav, setNav] = useState(true);
   
    const handleNav = () => {
        setNav(!nav)
    };
    
    return (
      <section id="home">
        {/* Main navigation */}
        <nav className="flex items-center mx-auto h-24 px-5 sm:px-20 fixed top-0 left-0 w-full backdrop-blur-md text-white shadow-md z-20">
            {/* Logo (Left) */}
            <div className="flex-1">
                <h1 className='text-x1 sm:text-2xl font-bold text-white'>Selvahini <span className="sm:break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Kamalarajan</span></h1>
            </div>
            
            {/* Center Navigation Links */}
            <div className="hidden md:flex justify-center flex-1">
                <div className="flex space-x-8 items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                    <a href="#home" className="text-white transition duration-300 hover:text-[#b49bff]">Home</a>
                    <a href="#about" className="text-white transition duration-300 hover:text-[#b49bff]">About</a>
                    <a href="#skills" className="text-white transition duration-300 hover:text-[#b49bff]">Skills</a>
                    <a href="#projects" className="text-white transition duration-300 hover:text-[#b49bff]">Work</a>
                </div>
            </div>
            
            {/* Right Section: Social Icons & Contact Button */}
            <div className="flex-1 flex justify-end items-center space-x-4">
                {/* Social Icons */}
                <div className="hidden md:flex space-x-4 mr-4 ">
                <a href="mailto:s5kamala@uwaterloo.ca?subject=Hello&body=Let's%20connect!" className="text-white hover:text-[#b49bff]">
                    <FaEnvelope size={20} /></a>

                    <a href="https://github.com/selvxhini-10" className="text-white transition duration-300 hover:text-[#b49bff] ">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/selvahini-kamalarajan/" className="text-white transition duration-300 hover:text-[#b49bff]">
                        <FaLinkedin size={20} /></a>
                </div>
                
                {/* Sign In Button */}
                <div className="hidden md:block">
  <a href="#contact" className="py-2 px-6 font-semibold rounded-full border border-purple-300 text-transparent bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]">
    Contact
  </a>
</div>
</div>
                {/* Mobile Menu Button */}
<div onClick={handleNav} 
  className='fixed top-6 right-6 z-50 cursor-pointer md:hidden'
>
  {!nav ? <AiOutlineClose size={24} className="text-white" /> : <AiOutlineMenu size={24} className="text-white" />}
</div>

          
            
            {/* Mobile Navigation */}
            <div 
                className={
                    !nav
                    ? 'fixed left-0 top-0 w-full min-h-screen bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 ease-in-out duration-500 z-40 flex flex-col items-center justify-center'
                    : 'fixed left-[-100%]'
                }>
                <h1 className="text-xl sm:text-3xl font-bold text-white text-center px-0 mx-0">Selvahini Kamalarajan</h1>

                <ul className='w-full flex flex-col items-center justify-center space-y-4'>
                    <li className="p-4 flex flex-col items-center bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white w-full">
                    <a href="#home" className="text-white transition duration-300 hover:text-[#b49bff]">Home</a>
                    </li>
                    <li className="p-4 bg-gradient-to-r flex flex-col items-center  from-purple-600 via-purple-500 to-indigo-500 text-white w-full">
                    <a href="#about" className="text-white transition duration-300 hover:text-[#b49bff]">About</a>
                    </li>
                    <li className="p-4 bg-gradient-to-r flex flex-col items-center  from-purple-600 via-purple-500 to-indigo-500 text-white w-full">
                    <a href="#skills" className="text-white transition duration-300 hover:text-[#b49bff]">Skills</a>
                    </li>
                    <li className="p-4 bg-gradient-to-r flex flex-col items-center  from-purple-600 via-purple-500 to-indigo-500 text-white w-full">
                    <a href="#projects" className="text-white transition duration-300 hover:text-[#b49bff]">Work</a>
                    </li>
                    <li className="p-4 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white w-full flex space-x-4 items-center justify-center">
                    <a href="mailto:s5kamala@uwaterloo.ca?subject=Hello&body=Let's%20connect!" className="text-white hover:text-[#b49bff]">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="https://github.com/selvxhini-10" className="text-white transition duration-300 hover:text-[#b49bff] ">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/selvahini-kamalarajan/" className="text-white transition duration-300 hover:text-[#b49bff]">
                            <FaLinkedin size={20} />
                        </a>
                    </li>
                    <li className="p-4 flex items-center justify-center text-white w-full">
                    <a href="#contact" className="py-2 px-6 font-semibold rounded-full border border-purple-300 text-transparent text-white bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]">
                        Contact
                        </a>
                    </li>
                    
                </ul>
            </div>
        </nav>
      </section>
    );
};

export default Navbar2;