import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

const ProjectCard = ({ index, title, description, image, tags, demoUrl, githubUrl }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', delay: index * 0.3, duration: 0.75 } },
      }}
      initial="hidden"
      animate="show"
    >
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-black"
      >
        <div className='h-48 overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
        </div>

        <div className='px-6 pt-6 pb-3'>
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, i) => (
              <span key={i} className='px-2 py-1 bg-purple-700 text-xs font-medium rounded-full bg-secondary text-white'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
          <div className='flex pt-4 space-x-3 items-center'>
            <a href={demoUrl} className="text-white hover:text-purple-200">
              <FaExternalLinkAlt size={20} />
            </a>
            <a href={githubUrl} className="text-white hover:text-purple-200">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

{/* Data Structure - Defining an Array of Objects */}
const projects = [
    {
        id: 1,
        title: "Saas Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/thumbnail.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#", 
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Computer Vision Projects",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/thumbnail.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#", 
        githubUrl: "#",
    },
    {
        id: 3,
        title: "AI Sustainability Application",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/thumbnail.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#", 
        githubUrl: "#",
    },
]
const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white relative container mx-auto max-w-6xl w-full "
    >
        <div className='container mx-auto max-w-6xl w-full'>
        <p className='font-semibold text-muted-foreground mx-auto'>MY WORK</p>

            <h2 className='md:text-5xl font-bold text-white mb-2'> Featured <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Projects </span></h2>
            
            <p className='text-muted-foreground mb-12'>A curated collection of my recent projects, crafted with user experience, attention to detail and innovative solutions. These projects reflect my ability to address global challenges, work with different technologies, and manage tasks efficiently.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
  {projects.map((project, index) => (
    <ProjectCard
      key={project.id}
      index={index}
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tags}
      demoUrl={project.demoUrl}
      githubUrl={project.githubUrl}
    />
  ))}
</div>

    </div>

    </section>
  )
}

export default Projects;