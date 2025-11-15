import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#3a0ca3] flex flex-col items-center justify-center py-16 px-6 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(186,85,255,0.5)]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* -------- Project 1: Portfolio Website -------- */}
        <div className="bg-[#2b1055]/70 backdrop-blur-md border border-purple-500/40 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 p-6 flex flex-col items-center">
          <div className="w-full h-56 rounded-xl overflow-hidden border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-5">
            <img
              src="/Portfolio.png"
              alt="Portfolio Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-purple-300">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-200 justify-text-center mb-6 leading-relaxed">
            A fully responsive React portfolio showcasing my skills,
            education, and projects with a professional UI. Built with React,
            TypeScript, Tailwind CSS, and Framer Motion animations.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Livyashree03/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaGithub /> <span>GitHub Repo</span>
            </a>
            <a
              href="https://portfolio-livyashree.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          </div>
        </div>

        <div className="bg-[#2b1055]/70 backdrop-blur-md border border-purple-500/40 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 p-6 flex flex-col items-center">
          <div className="w-full h-56 rounded-xl overflow-hidden border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-5">
            <img
              src="/restaurant.png"
              alt="Flavor Fiesta Restaurant"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-purple-300">
            Flavor Fiesta Restaurant
          </h3>
          <p className="text-gray-200 justify-text-center  mb-6 leading-relaxed">
            <strong>Flavor Fiesta</strong> is a full-stack MERN restaurant web
            application designed for seamless food ordering and management.
            It features a modern UI built with <strong>React, Tailwind CSS, and
            Material-UI</strong>, secure user authentication with <strong>JWT</strong>,
            and a Node.js/Express backend connected to MongoDB. The platform
            allows users to browse menus, add items to cart, and place orders
            while admins manage inventory efficiently.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/livyashree11/Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaGithub /> <span>GitHub Repo</span>
            </a>
            <a
              href="https://ecommerce-lemon-gamma-41.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          </div>
        </div>

      
        <div className="bg-[#2b1055]/70 backdrop-blur-md border border-purple-500/40 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 p-6 flex flex-col items-center md:col-span-2">
          <div className="w-full h-64 rounded-xl overflow-hidden border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-5">
            <img
              src="/n8n.png"
              alt="n8n AI Chat Interface"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-purple-300">
            n8n AI Chat Interface
          </h3>
          <p className="text-gray-200 justify-text-center mb-6 leading-relaxed max-w-3xl">
            The <strong>n8n AI Chat Interface</strong> is a full-stack chat
            application integrated with the <strong>n8n automation model</strong>.
            Built using the <strong>MERN stack</strong>, it leverages <strong>Axios</strong>
            for real-time communication between the React frontend and the
            n8n backend API. The project implements a clean UI with <strong>Tailwind CSS</strong>,
            enabling smooth message flow, bot integration, and seamless API
            connectivity. It demonstrates my ability to work with workflow
            automation tools and build interactive, scalable chat systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/livyashree11/n8n_AI_chat-interface"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg shadow-md transition"
            >
              <FaGithub /> <span>GitHub Repo</span>
            </a>
            <a
              href="https://n8n-ai-chat-interface.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg shadow-md transition"
            >
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
