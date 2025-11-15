import React from "react";
import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaClock } from "react-icons/fa";

const Connect: React.FC = () => {
  return (
    <section id="connect" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#3a0ca3] text-white overflow-hidden">
      {/* Optional: Starry or animated background */}
      <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-10"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-2 drop-shadow-[0_0_15px_rgba(186,85,255,0.5)]">
          Connect With Me
        </h1>
        <p className="text-purple-300 mb-12 text-lg">
          Let’s collaborate and build something amazing together
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-12">
          {/* Email */}
          <a
            href="mailto:dlivyashree2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b1055]/70 p-6 rounded-2xl border border-purple-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 flex flex-col items-center"
          >
            <SiGmail size={40} color="#FF4C4C" />
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
            <p className="text-sm text-gray-300">dlivyashree2003@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/livyashree11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b1055]/70 p-6 rounded-2xl border border-gray-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 flex flex-col items-center"
          >
            <SiGithub size={40} color="#fff" />
            <h3 className="mt-4 text-xl font-semibold">GitHub</h3>
            <p className="text-sm text-gray-300">Livyashree</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/livyashree"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b1055]/70 p-6 rounded-2xl border border-blue-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] transition-all duration-300 flex flex-col items-center"
          >
            <SiLinkedin size={40} color="#0077B5" />
            <h3 className="mt-4 text-xl font-semibold">LinkedIn</h3>
            <p className="text-sm text-gray-300">Livyashree D</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8870886195"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b1055]/70 p-6 rounded-2xl border border-green-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] transition-all duration-300 flex flex-col items-center"
          >
            <SiWhatsapp size={40} color="#25D366" />
            <h3 className="mt-4 text-xl font-semibold">WhatsApp</h3>
            <p className="text-sm text-gray-300">+91 8870886195</p>
          </a>
        </div>

        {/* Availability Message */}
        <div className="bg-[#2b1055]/70 border border-purple-500 rounded-2xl px-8 py-6 inline-block shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <div className="flex items-center justify-center gap-3 text-purple-300 mb-2">
            <FaClock size={20} />
            <p className="font-semibold text-lg">Open to New Collaborations</p>
          </div>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            I’m excited to connect with passionate professionals and teams to
            create innovative digital experiences. Whether it’s a project,
            freelance opportunity, or collaboration — let’s make it happen!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;
