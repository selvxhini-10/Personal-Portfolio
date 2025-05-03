import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ComputersCanvas from './Computers';
import bgImage from '../assets/images/bg2.png';
import { MapPinIcon } from "@heroicons/react/24/solid";
import { FaCode } from "react-icons/fa";



const About = () => {
  return (
    <section
      id="about"
      className="w-full text-white flex flex-col items-center">

        <div className='relative container gap-12 max-w-6xl w-full'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
    
    {/* LEFT COLUMN */}
    <div className='space-y-6'>

    <h2 className="text-4xl pt-10 md:text-5xl font-bold text-white mb-2">About <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Me</span></h2>

      <h3 className='text-2xl font-semibold'>Aspiring Computer Engineer</h3>

      <div className="inline-flex space-x-4">
      <div className=" transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb] inline-flex items-center gap-2 border border-[#b49bff] bg-opacity-90 rounded-full px-3 py-1">
  <MapPinIcon className="text-[#b49bff] h-4 w-4" />
  <span className="text-sm font-semibold text-[#d498fb] whitespace-nowrap">
    Toronto, Ontario
  </span>
</div>

<div className="transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb] inline-flex items-center gap-2 border border-[#b49bff] bg-opacity-90 rounded-full px-3 py-1">
  <MapPinIcon className="text-[#b49bff] h-4 w-4" />
  <span className="text-sm font-semibold text-[#d498fb] whitespace-nowrap">
  Candidate for BASc in Computer Engineering
  </span>
</div>
</div>

      <p>
      My first prototype was an automated pothole detection system designed to help Toronto address its costly pothole crisis. I pitched the device to the Toronto City Council's Infrastructure and Environment Committee, hoping to contribute to a proactive solution. This experience sparked my passion for building, designing and leveraging technology to address societal needs.
      </p>
      <p className='text-muted-foreground'>
      Now, as a first-year Computer Engineering student at the University of Waterloo, I am committed to applying my creativity and problem-solving skills to create the greatest impacts in climate sustainability, robotics and automation. With 4+ years of front-end programming experience, I am refining my skills in web, game, AI and machine learning development. I bring a detail-oriented mindset and a strong track record of collaborating in cross-functional teams to deliver impactful, client-focused solutions.
      </p>
      

      <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
  {/* Get In Touch - solid cosmic button */}
  <a
    href="#contact"
    className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full border border-purple-400 hover:shadow-[0_0_25px_#cbaaff] transition duration-300"
  >
    Get In Touch
  </a>

  {/* Download CV - outlined cosmic button */}
  <a
    href=""
    className="bg-transparent text-white font-semibold py-2 px-6 rounded-full border border-purple-400 hover:bg-gradient-to-r hover:from-[#3d2b7d] hover:to-[#5f2da8] hover:shadow-[0_0_25px_#b49bff] transition duration-300"
  >
    Download CV
  </a>
</div>

    </div>

  
    <div className='grid grid-cols-1 gap-6'>
   
   {/*Card 1*/}
        <div className=' bg-[#1a1330] border border-[#8c52ff]/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] gradient-border card-hover p-6'>
          <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-[0_0_15px_#b49bff]'>
  <FaCode className='h-6 w-6 text-white' />
</div>

            <div>
              <h4 className='font-semibold text-lg'>Web Development</h4>
              <p className='text-sm text-muted-foreground'>Creating responsive and user-friendly web applications with modern frameworks.</p>
            </div>
          </div>
        </div>
        {/*Card 2*/}

        <div className=' bg-[#1a1330] border border-[#8c52ff]/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-[0_0_15px_#b49bff]'>
  <FaCode className='h-6 w-6 text-white' />
</div>

            <div>
              <h4 className='font-semibold text-lg'>Embedded Systems</h4>
              <p className='text-sm text-muted-foreground'>Building scalable embedded solutions using sensors and microcontrollers.</p>
            </div>
          </div>
        </div>

        {/*Card 3*/}

        <div className=' bg-[#1a1330] border border-[#8c52ff]/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-[0_0_15px_#b49bff]'>
  <FaCode className='h-6 w-6 text-white' />
</div>

            <div>
              <h4 className='font-semibold text-lg'>Project Management</h4>
              <p className='text-sm text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>
            </div>
          </div>
        </div>

          {/*Card 4*/}

          <div className=' bg-[#1a1330] border border-[#8c52ff]/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] gradient-border p-6 card-hover'>
          <div className='flex items-start gap-4'>
          <div className='p-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-[0_0_15px_#b49bff]'>
  <FaCode className='h-6 w-6 text-white' />
</div>

            <div>
              <h4 className='font-semibold text-lg'>AI and ML Development</h4>
              <p className='text-sm text-muted-foreground'>Leveraging artificial intelligence to make data-driven decisions.</p>
            </div>
          </div>
        </div>
    
   
    </div>
    

  </div>

  {/* 3D Model */}
 {/* <div className="w-full h-[500px]">*/}
      {/*    <ComputersCanvas />*/}
       {/* </div>*/}
  
</div>

    </section>
  );
};

export default About;
