

const Education =() => {
  return (
    <section id ="Education" className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#3a0ca3] flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-[0_0_10px_rgba(186,85,255,0.6)]">
        Education
      </h2>

      <div className="flex flex-col md:flex-row items-center bg-[#2b1055]/70 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 p-6 max-w-3xl w-full border border-purple-500/40">
  
        <div className="flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-4 md:mb-0 md:mr-6">
          <img
            src="/college.png"
            alt="IFET College"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="flex flex-col text-center md:text-left text-gray-200">
          <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_10px_rgba(186,85,255,0.5)]">
            IFET College of Engineering
          </h3>
          <p className="text-purple-200 text-lg mt-1">
            B.Tech - Computer Science and Engineering
          </p>
          <p className="text-gray-300 mt-2">2021 - 2025</p>
          <p className="text-purple-300 font-medium mt-2">CGPA: 8.37</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
