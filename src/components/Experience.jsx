import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import BBPA from '../assets/images/bbpa.png';
import BrandEQ from '../assets/images/brandeq.png';
import FarleyFlex from '../assets/images/farleyflex.jpg';
import NadineSpencer from '../assets/images/nadinespencer.jpg';
import DanielleSpencer from '../assets/images/daniellespencer.jpg';

import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({experience}) => (

    <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={<div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon}
        alt={experience.company_name}
        className='className="w-full h-full object-cover rounded-full'/>
    </div>
    }
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
  {experience.skills.map((skill, index) => (
    <span
      key={index}
      className="inline-flex items-center gap-2 border border-[#b49bff] bg-[#0300145e] backdrop-blur-sm text-[#d498fb] text-sm rounded-full px-2 py-1 shadow-sm"
    >
      {skill}
    </span>
  ))}
</div>


            <ul className='mt-5 list-disc ml-5 space-y-2'>{experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>))}
                </ul>
    </VerticalTimelineElement>
)

const experiences = [
    {
      id: 1,
      title: "Engineering Outreach Facilitator",
      company_name: "Engineering Outreach, University of Waterloo",
      date: "Jan. 2025 - Apr. 2025",
      icon: "/wie.png",
      iconBg: "#FF5733",
      skills: ["Technological Agility", "Implementation", "Critical Thinking"],
      points: [
        "Delivered 50+ hands-on Women in Engineering workshops to 1300+ students across Ontario, leveraging my strong communication and organizational skills",
        "Developed robotics, AI and programming challenges using LEGO Spike Primes, Teachable Machine, Arduino, Micro:bits, and Ozobots, increasing STEM participation",
        "Implemented documentation, budgets and oral presentations using Ontario education standards, developing 60% more innovative STEM outreach content.",
        "Debugged and troubleshooted electronic devices, circuitry and coding projects, including an AI-powered sign language detection site and Arduino clinostat to simulate microgravity.",
      ],
    },
    {
        id: 2,
        title: "Fullstack Web Developer",
        company_name: "BrandEQ Group",
        date: "Jul. 2022 - Sep. 2022",
        icon: "/brandeq.jpeg",
        iconBg: "#FF5733",
        skills: ["Collaboration", "Problem-Solving", "Communication"],
        points: [
          "Enhanced SEO by implementing WCAG 2.0 accessibility standards, PR backlinking, responsive web design and architecture using Editor X, WordPress and JavaScript",
          "Developed and pitched website prototypes using MS Office tools and agile methodologies to improve user interaction, receiving endorsement from national brands",
          "Improved user experience, accessibility and mobile optimization by 60% by leading web development team to redesign and monitor 25+ client websites and software applications",
        ],
      },
      {
        id: 3,
        title: "Teen Ambassador",
        company_name: "Canada Learning Code",
        date: "Sep. 2022 - Jun. 2024",
        icon: "/clc.png",
        iconBg: "#FF5733",
        skills: ["Innovation", "Leadership", "Project Management"],
        points: [
          "Led cross-functional teams to build an informative website about Fast Fashion using HTML, CSS, JavaScript and Bootstrap",
          "Designed and proposed a safety application prototype using Marvel to combat youth violence and improve emergency preparedness",
          "Facilitated end-to-end project management using Kanban boards, overseeing ideation and developing workflows to ensure timely completion.",
        ],
      },
  ];

const Experience = () => {
  return (
    <>
    <section id="experience" className='flex flex-col px-4 text-white sm:py-10 relative container sm:mx-auto sm:max-w-6xl sm:w-full'>
    <motion.div>
      <h2 className="sm:text-5xl text-4xl font-bold text-white mb-2">
        Work{" "}
        <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Experience
        </span>
      </h2>
      <p className="text-muted-foreground mb-2">Learn more about the hands-on opportunities and professional roles that shape my career journey. From collaborative team environments to independent leadership, these experiences highlight my adaptability, problem-solving skills and dedication to continuous growth.</p>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
  <ExperienceCard key={index} experience={experience} />
))}

        </VerticalTimeline>
      </div>
    </motion.div>
  </section>
  <div className="container text-white mx-auto max-w-6xl w-full px-4">
  <h2 className="sm:text-5xl text-4xl font-bold text-white sm:mb-2">
    Client{" "}
    <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#9429db] to-[#4f2ba3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
      Collaborations
    </span>
  </h2>

  <p className="pt-4 text-muted-foreground mb-6">
    Each collaboration has helped me grow both professionally and creatively, allowing me to tailor my work to meet unique needs and deliver impactful results.
    Below are some of the amazing clients I've had the pleasure of developing websites and applications for.
  </p>

  <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 mt-6">
    {/* Logo 1 */}
    <div className="flex flex-col items-center text-center">
      <img src={BrandEQ} alt="BrandEQ" className="object-contain aspect-[3/2] w-full max-w-xs" />
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center text-center">
      <img src={BBPA} alt="BrandEQ" className="object-contain aspect-[3/2] w-full max-w-xs" />
    </div>

    {/* Avatar Tooltips */}
    <div className="flex justify-between items-center gap-5 mt-6">
   {/* Danielle Spencer */}
      <div className="relative group">
        <img
          className="h-24 w-24 rounded-sm cursor-pointer"
          src={DanielleSpencer}
          alt="Danielle Spencer"
        />
        <div className="text-center absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
          Danielle Spencer
        </div>
      </div>

      {/* Nadine Spencer */}
      <div className="relative group">
        <img
          className="h-24 w-24 rounded-sm cursor-pointer"
          src={NadineSpencer}
          alt="Nadine Spencer"
        />
        <div className="text-center absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
          Nadine Spencer
        </div>
      </div>

      {/* Farley Flex */}
      <div className="relative group">
        <img
          className="h-24 w-24 rounded-sm cursor-pointer"
          src={FarleyFlex}
          alt="Farley Flex"
        />
        <div className="text-center absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
          Farley Flex
        </div>
      </div>
    </div>
  </div>
</div>


  </>
);
};

export default Experience;
