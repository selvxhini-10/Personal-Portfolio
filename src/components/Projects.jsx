import React, {useState} from 'react';
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
  className="group h-full min-h-[400px] bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10"
>
  {/* Image */}
  <div className='h-48 overflow-hidden'>
    <img
      src={image}
      alt={title}
      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
    />
  </div>

  {/* Tags */}
  <div className='px-6 pt-6 pb-2 text-center'>
    <div className='flex flex-wrap justify-center gap-2 mb-4'>
      {tags.map((tag, i) => (
        <span
          key={i}
          className='px-3 py-1 text-xs font-semibold rounded-full border border-purple-300 text-transparent bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]'
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Title & Description */}
  <div className="px-7 text-center flex flex-col items-center justify-between flex-grow pb-6">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>

    {/* Links */}
    <div className='flex items-center justify-center pt-4 space-x-4'>
      <a href={demoUrl} className="text-white hover:text-purple-300 transition-colors">
        <FaExternalLinkAlt size={20} />
      </a>
      <a href={githubUrl} className="text-white hover:text-purple-300 transition-colors">
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
        category: "AI & Data",
        title: "Summus – Terms & Conditions AI Assistant",
        description: "Chrome extension that summarizes website terms and conditions, highlights privacy concerns, and answers user questions via an AI chatbot. Uses a FastAPI backend with transformer models and Ollama Mistral to extract, analyze, and serve content in real time.",
        image: "/summus.png",
        tags: ["JavaScript", "HTML/CSS", "FastAPI", "Flask-CORS", "PyTorch", "HuggingFace Transformers", "Ollama Mistral"],
        demoUrl: "#", 
        githubUrl: "https://github.com/m76domi98/AI_AGENT",
    },
    {
        id: 2,
        category: "Embedded Systems",
        title: "AgriVision – Smart Farming Assistant",
        description: "Features a YOLOv8 object detection model for plant disease classification and a GPT chatbot for farming advice. Hardware integration includes an Arduino-based soil moisture sensor and relay control system for automatic irrigation.",
        image: "/agrivision.png",
        tags: ["React", "Google Colab","TailwindCSS", "YOLOv8", "OpenCV", "NumPy", "Pillow (PIL)", "Flask-RESTful", "Flask-CORS", "LangChain", "OpenAI API", "Arduino"],
        demoUrl: "https://ai-sustainability-app.vercel.app/", 
        githubUrl: "https://github.com/selvxhini-10/AI-Sustainability-App",
    },
    {
        id: 3,
        category: "AI & Data",
        title: "Pneumonia Classifier Web App",
        description: "A deep learning model deployed with Streamlit to classify chest X-ray images as normal or pneumonia-affected. Trained on 5,000+ X-ray images to assist with early pneumonia detection and reliable medical diagnosis.",
        image: "/pneumonia.png",
        tags: ["Keras", "NumPy", "Streamlit", "Google Teachable Machine", "Python"],
        demoUrl: "#", 
        githubUrl: "https://github.com/selvxhini-10/Computer-Vision",
    },
{
  id: 4,
  category: "AI & Data",
  title: "Intelligent Traffic Flow Optimization",
  description: "Developed an AI model to predict traffic flow using the METR-LA dataset. Performed SHAP analysis to interpret feature importance. Created data visualizations to explore traffic trends and built both linear regression and neural network models for prediction.",
  image: "/traffic.png",
  tags: ["Streamlit", "Python", "Pandas", "NumPy", "SHAP", "Matplotlib", "Seaborn", "TensorFlow", "Keras"],
  demoUrl: "#", 
  githubUrl: "https://github.com/selvxhini-10/Computer-Vision",
},
{
  id: 5,
  category: "Game Development",
  title: "Bad Ice Cream Game",
  description: "Recreated the two-player Bad Ice Cream arcade-style game using Java and core object-oriented programming principles such as inheritance, encapsulation, and polymorphism. Visualized the game structure with UML diagrams to demonstrate software architecture and system interactions.",
  image: "/badicecream.png",
  tags: ["Java", "Eclipse"],
  demoUrl: "#", 
  githubUrl: "https://github.com/selvxhini-10/BadIceCream",
},
{
  id: 6,
  category: "Web Applications",
  title: "Medical Pager Application",
  description: "Built a full-stack real-time chat application for medical communication using Stream APIs. Integrated user authentication and session management with Express and Axios.",
  image: "/chat.png",
  tags: ["React", "TailwindCSS", "JavaScript", "Stream API", "Express", "Axios", "Universal-Cookies"],
  demoUrl: "#", 
  githubUrl: "https://github.com/selvxhini-10/Covid-Tracker",
},
{
  id: 7,
  category: "Game Development",
  title: "Plastic Frenzy – Ocean Cleanup Game",
  description: "Play. Progress. Protect the Ocean. An underwater adventure game built in Unity to promote plastic pollution awareness. Players collect virtual ocean waste, with real-world cleanup tied to engagement. Designed for immersive gameplay with a strong focus on user experience.",
  image: "/plastic.jpg",
  tags: ["Unity", "C#"],
  demoUrl: "https://devpost.com/software/depth-defenders", 
  githubUrl: "#",
},
{
  id: 8,
  category: "Embedded Systems",
  title: "AssistWave - STM32CubeIDE Medical Assistive Device",
  description: "An ultrasonic sensor is used to track hand movements within predefined distance thresholds. An STM32 microcontroller transmits this data via UART communication in Single Wire Half-Duplex Mode to a receiving STM32 Nucleo board over a 1-meter wired connection. Based on the received data, output actions are triggered, such as turning on an LED light, activating a fan, and operating servo motors to open doors.",
  image: "/uart.jpg",
  tags: ["Unity", "C#", "Circuit Schematics", "Breadboarding"],
  demoUrl: "#", 
  githubUrl: "#",
},
{
  id: 9,
  category: "Web Applications",
  title: "Personal Portfolio",
  description: "Personal Portfolio Website built using ReactJS, NodeJS and TailwindCSS showcasing technical skills, experiences and goals. Features animations and 3D models using Spline and Framer Motion.",
  image: "/portfolio.png",
  tags: ["React", "HTML", "CSS", "TailwindCSS", "Spline", "Framer Motion", "Node.js"],
  demoUrl: "#", 
  githubUrl: "#",
},
]
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web Applications", "AI & Data", "Embedded Systems", "Game Development"];

  const filteredProjects = selectedCategory === "All"
  ? projects
  : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="sm:w-full text-white flex flex-col items-center px-4 pb-10 sm:pb-0 sm:px-4"
    >
        <div className='container sm:mx-auto sm:max-w-6xl w-full'>
        <p className='font-semibold text-muted-foreground mx-auto'>MY WORK</p>

            <h2 className='sm:text-5xl text-4xl font-bold text-white mb-2'> Featured <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Projects</span></h2>
            
            <p className='text-muted-foreground mb-6'>A curated collection of my recent projects, crafted with user experience, attention to detail and innovative solutions. These projects reflect my ability to address global challenges, work with different technologies, and manage tasks efficiently.</p>

            <div className="flex flex-wrap gap-3 mb-6">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-4 py-2 rounded-full border transition ${
        selectedCategory === cat
          ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white border-purple-400"
          : "font-semibold rounded-full border border-purple-300 text-transparent bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-inner shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-100 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]"
      }`}
    >
      {cat}
    </button>
  ))}
</div>

            <div className='h-full min-h-[380px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
   {filteredProjects.map((project, index) => (
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