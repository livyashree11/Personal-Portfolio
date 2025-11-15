import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiPostman,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
} from "react-icons/si";

interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React.js", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "SQL", Icon: SiMysql },
  { name: "Python", Icon: SiPython },
  { name: "Redux", Icon: SiRedux },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Material UI", Icon: SiMui },
  { name: "Postman", Icon: SiPostman },
  { name: "Vercel", Icon: SiVercel },
  { name: "Render", Icon: SiRender },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#3a0ca3] min-h-screen py-16 px-6 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full text-center">
        {/* About Heading */}
        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(186,85,255,0.5)]">
          About Me
        </h2>

        {/* About Description */}
        <p className="text-lg text-gray-200 leading-relaxed mb-10 max-w-4xl mx-auto">
          I’m{" "}
          <span className="font-semibold text-purple-300">Livyashree.D</span>, a passionate{" "}
          <span className="font-semibold text-purple-300">MERN Stack Developer</span> skilled in
          building responsive and scalable web applications using{" "}
          <span className="font-semibold text-white">MongoDB, Express.js, React.js,</span> and{" "}
          <span className="font-semibold text-white">Node.js</span>. I’m eager to apply my technical
          skills, problem-solving mindset, and creativity to develop impactful web solutions and
          grow as a professional full-stack developer.
        </p>

        {/* Skillset Section */}
        <h3 className="text-3xl font-semibold text-white mb-8 drop-shadow-[0_0_10px_rgba(186,85,255,0.5)]">
          Professional Skillset
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="bg-[#2b1055]/70 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-xl py-4 px-4 flex flex-col items-center justify-center hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 transition-transform duration-300"
            >
              <Icon className="text-purple-400 w-8 h-8 mb-2 drop-shadow-[0_0_8px_rgba(186,85,255,0.7)]" />
              <p className="text-gray-200 font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
