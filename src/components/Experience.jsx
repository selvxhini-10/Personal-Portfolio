import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

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
);
};

export default Experience;
