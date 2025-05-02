import React from 'react';
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Pic1 from '../assets/images/1.png';
import Pic2 from '../assets/images/2.png';
import Pic3 from '../assets/images/3.png';
import Pic4 from '../assets/images/4.png';

const Blog = () => {
  return (
    <section
      className="text-white relative container mx-auto max-w-6xl w-full "
    >
        <div className='container mx-auto max-w-6xl w-full'>
        <p className='font-semibold text-muted-foreground mx-auto'>MY THOUGHTS & IDEAS</p>

            <h2 className='md:text-5xl font-bold text-white mb-2'> Beyond <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#4f2ba3] to-[#3a0ca3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Coding</span></h2>

            <p className='pt-4 text-muted-foreground mb-4'>I have a deep passion for learning, particularly in fields that challenge and inspire me—including philosophy, cognitive science, astrophysics, and psychology. I’m also committed to peer-to-peer mentorship, servant leadership and promoting STEM education. Through these experiences, I have learned the importance of democratizing STEM for underprivileged youth in my community. Check out some of my milestones below! 
                </p>
                
                <p className='text-muted-foreground mb-4'>A fun fact about me: I published my first short story with Polar Expressions Publishing when I was seven years old! In my free time, I enjoy playing my keyboard, practicing calligraphy and reading dystopian fiction; my favourites being the <i>Hunger Games</i>, <i>Maze Runner</i>, and <i>Scythe </i>series. </p>
                <h2 className='md:text-3xl text-[#d498fb] font-bold mb-2'>Check Out My Insights</h2> 
                <p className='text-muted-foreground mb-4'>Explore a collection of my evolving ideas, research, and documentation. These notes are a work-in-progress and give a glimpse into the thinking behind my ongoing projects. </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        
        {/* LEFT COLUMN - TEXT */}
        <div> 
             <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.3, duration: 0.75 } },
                  }}
                  initial="hidden"
                  animate="show"
                >
                    <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }} className="flex flex-col items-center rounded-lg overflow-hidden h-96 md:flex-row md:max-w-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 border border-[#b49bff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#d498fb88] hover:border-[#d498fb]">
  <img
    className="h-full w-full md:w-48 object-cover"
    src={Pic1}
    alt="Pic1"
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">The Impact of AI-driven Government Surveillance on Democracy and Liberty</h5>
    <p className="mb-3 font-medium text-purple-200">Imagine a world where AI is weaponized as a mass surveillance tool and knows us better than we know ourselves. This paper will explore the harmful applications of facial recognition technologies and their potential for accelerating totalitarianism through an Orwellian surveillance system. </p>
  
    <a href="https://drive.google.com/file/d/1nA_qruzSoqxLo56r8ris7LC3wen9pfBW/view?usp=sharing"  className="mt-2 w-fit py-2 px-6 font-semibold rounded-full border border-purple-300 text-white bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] hover:bg-gradient-to-r hover:from-[#3d2b7d] hover:to-[#5f2da8] hover:shadow-[0_0_25px_#b49bff] transition duration-300">
    Read More
  </a>
  </div>
</Tilt>

</motion.div>

<div className='pb-6'/>
<motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.3, duration: 0.75 } },
                  }}
                  initial="hidden"
                  animate="show"
                >
                    <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }} className="flex flex-col items-center rounded-lg overflow-hidden h-96 md:flex-row md:max-w-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 border border-[#b49bff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#d498fb88] hover:border-[#d498fb]">
  <img
    className="h-full w-full md:w-48 object-cover"
    src={Pic2}
    alt="Pic2"
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Harnessing Convolutional Neural Networks to Discover Exoplanets </h5>
    <p className=" font-medium text-purple-200">Somewhere in the universe, there are distant Earth-like planets that could harbour life. These 
exoplanets can help us understand the origin, evolution and future of life and how solar systems and 
planets are formed. But a question arises: how can we find these distant worlds? The answer lies in 
convolutional neural networks. </p>
  
    <a href="https://drive.google.com/file/d/14mkOAs59vQ331fZRdJpXxSN_8QWWbUHB/view?usp=sharing"  className="mt-2 w-fit py-2 px-6 font-semibold rounded-full border border-purple-300 text-white bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] hover:bg-gradient-to-r hover:from-[#3d2b7d] hover:to-[#5f2da8] hover:shadow-[0_0_25px_#b49bff] transition duration-300">
    Read More
  </a>
  </div>
</Tilt>
</motion.div>

</div>

         {/* RIGHT COLUMN - 3D MODEL */}
         <div>
         <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.3, duration: 0.75 } },
                  }}
                  initial="hidden"
                  animate="show"
                >
                    <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }} className="flex flex-col items-center rounded-lg overflow-hidden h-96 md:flex-row md:max-w-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 border border-[#b49bff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#d498fb88] hover:border-[#d498fb]">
   <img
    className="h-full w-full md:w-48 object-cover"
    src={Pic3}
    alt="Pic3"
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">AssistWave Project Proposal</h5>
    <p className="mb-3 font-medium text-purple-200">Due to immobilization, patients will experience difficulty
 with autonomously performing simple tasks. To combat
 these challenges, AssistWave is an on-going collaborative project that aims to use hand gesture
 recognition software for individuals with TSCI. They can
 communicate with caregivers to support crucial
 activities such as eating, drinking, restrooms and
 emergencies within a home setting.</p>
  
    <a href="https://drive.google.com/file/d/1IbamF4UMwRatZZMHT8ueOMVALaaFU5g_/view?usp=sharing" className="mt-2 w-fit py-2 px-6 font-semibold rounded-full border border-purple-300 text-white bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] hover:bg-gradient-to-r hover:from-[#3d2b7d] hover:to-[#5f2da8] hover:shadow-[0_0_25px_#b49bff] transition duration-300">
    Read More
  </a>
  </div>
</Tilt>
</motion.div>

<div className='pb-6'/>
<motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.3, duration: 0.75 } },
                  }}
                  initial="hidden"
                  animate="show"
                >
                    <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }} className="flex flex-col items-center rounded-lg overflow-hidden h-96 md:flex-row md:max-w-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 border border-[#b49bff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#d498fb88] hover:border-[#d498fb]">
  
  <img
    className="h-full w-full md:w-48 object-cover"
    src={Pic4}
    alt="Pic4"
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">TraffiX: Leveraging Machine Learning for Smarter Traffic Management in Toronto</h5>
    <p className="mb-12 font-medium text-purple-200">Our team believes in leveraging the power of artificial intelligence and technology for social and 
economic good. As residents and frequent visitors of Toronto, we have personally experienced the 
frustrating and often costly impacts of traffic congestion.</p>
  
    <a href="https://drive.google.com/file/d/1Sg_4v5RyHUJS3pEUtBXpeM-g8rV_P91m/view?usp=sharing" className="mt-2 w-fit py-2 px-6 font-semibold rounded-full border border-purple-300 text-white bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] hover:bg-gradient-to-r hover:from-[#3d2b7d] hover:to-[#5f2da8] hover:shadow-[0_0_25px_#b49bff] transition duration-300">
    Read More
  </a>
  </div>
</Tilt>
</motion.div>
         </div>
         </div>
</section>
  )
}

export default Blog