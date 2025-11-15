
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

const Home= () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 text-white overflow-hidden relative bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#3a0ca3]">
      {/* Glowing light orbs */}
      <div className="absolute top-20 left-[-5rem] w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-[-5rem] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

     
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-5 z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl text-purple-300">Hey there, 👋 </h3>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(186,85,255,0.4)]">
          Livyashree D
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          And I'm a{" "}
          <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(186,85,255,0.5)]">
            MERN Stack Developer
          </span>
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
          I’m Livyashree D, a passionate MERN Stack Developer with a strong
          interest in creating responsive, scalable, and user-friendly web
          applications using MongoDB, Express.js, React.js, and Node.js. I love
          building impactful digital solutions that blend creativity with
          technology.
        </p>

       
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://github.com/livyashree11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-gray-500 hover:bg-purple-600/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="mailto:dlivyashree2003@gmail.com"
            className="p-3 rounded-full bg-white/10 border border-gray-500 hover:bg-pink-600/30 hover:shadow-[0_0_20px_rgba(249,168,212,0.5)] transition-all"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/livyashree"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-gray-500 hover:bg-blue-600/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/918870886195"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-gray-500 hover:bg-green-600/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] transition-all"
          >
            <SiWhatsapp size={24} />
          </a>
        </div>

      
        <motion.a
          href="/resume.pdf"
          download="Livyashree_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-8 bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all"
        >
          <FaDownload className="text-white text-lg" />
          Download Resume
        </motion.a>
      </motion.div>

   
      <motion.div
        className="md:w-1/2 flex justify-center mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-white/30 shadow-[0_0_35px_rgba(168,85,247,0.3)] overflow-hidden flex items-center justify-center bg-white/10">
          <img
            src="/shree.jpg"
            alt="Livyashree"
            className="rounded-full w-full h-full object-cover"
          />
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-full border-[5px] border-purple-400 opacity-70 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
