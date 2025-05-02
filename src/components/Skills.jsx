import React from 'react';
import Spline from '@splinetool/react-spline';

const SkillCategory = ({ title, skills }) => (
    <div className="mb-4">
      <h3 className="font-semibold text-[#b49bff] mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 border border-[#b49bff] bg-[#0300145e] backdrop-blur-sm text-[#d498fb] text-sm rounded-full px-3 py-1 shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen text-white flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        
        {/* LEFT COLUMN - TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="break-normal bg-gradient-to-r from-[#ff7eb9] via-[#4f2ba3] to-[#3a0ca3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground mb-3 max-w-lg">
          I am actively seeking opportunities to refine my skills through academic coursework, personal projects or co-op experiences.
          </p>
          <p className="text-muted-foreground mb-3 max-w-lg">
          <b>Courses: </b>Project Studio, Linear Circuits, Digital Circuits, Fundamentals of Programming, Calculus II
          </p>
          <div className="max-w-4xl mx-auto bg-transparent text-white">
  <SkillCategory
    title="Languages"
    skills={['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'Java', 'C#']}
  />
  <SkillCategory
    title="Frontend"
    skills={['Bootstrap', 'Tailwind CSS', 'React.js', 'React Hooks', 'Axios']}
  />
  <SkillCategory
    title="Backend"
    skills={['Flask', 'Flask-CORS', 'Flask-RESTful', 'Node.js']}
  />
  <SkillCategory
    title="Computer Vision & AI"
    skills={['YOLOv8', 'OpenCV', 'NumPy', 'Pillow', 'TensorFlow', 'Keras']}
  />
  <SkillCategory
    title="Embedded"
    skills={['STM32CubeIDE', 'Arduino', 'ESP32']}
  />
  <SkillCategory
    title="Developer Tools"
    skills={['GitHub', 'GNU (Make, GCC)', 'Visual Studio', 'PyCharm', 'Eclipse']}
  />
</div>

        </div>

        {/* RIGHT COLUMN - 3D MODEL */}
        <div className="w-full h-screen overflow-hidden relative z-0">
  <Spline className='' scene="https://prod.spline.design/26qmgN4Ad2yjMyXV/scene.splinecode" />
</div>

      </div>
    </section>
  );
};

export default Skills;
