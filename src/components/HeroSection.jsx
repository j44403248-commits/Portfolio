import { Fragment, useEffect } from "react";
import { FaPaperPlane, FaRocket, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Images/mh.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      onClick: () => window.open("https://www.facebook.com/profile.php?id=61583615143950", "_blank"),
      color: "hover:bg-blue-600 hover:shadow-[0_0_15px_#2563eb]",
      aos: "flip-left",
    },
    {
      icon: <FaLinkedinIn />,
      onClick: () => window.open("https://www.linkedin.com/feed/", "_blank"),
      color: "hover:bg-blue-500 hover:shadow-[0_0_15px_#38bdf8]",
      aos: "flip-up",
    },
    {
      icon: <FaGithub />,
      onClick: () => window.open("https://github.com/", "_blank"),
      color: "hover:bg-gray-800 hover:shadow-[0_0_15px_#6b7280]",
      aos: "flip-right",
    },
  ];

  return (
    <Fragment>
      <section
        id="home"
        className="relative flex justify-center items-center min-h-screen 
        px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-900 overflow-hidden pt-16 sm:pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-aos="zoom-in"
            className="absolute top-20 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 
            rounded-full bg-cyan-400 opacity-20 blur-3xl animate-float"
          ></div>
          <div
            data-aos="zoom-out"
            className="absolute bottom-10 right-10 sm:right-20 w-24 sm:w-28 h-24 sm:h-28 
            rounded-full bg-cyan-600 opacity-20 blur-3xl animate-float-delay"
          ></div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12 w-full max-w-7xl z-10 py-16 sm:py-20">
          
          {/* LEFT */}
          <div className="w-full md:w-1/2 text-center md:text-start px-2 sm:px-0">
            
            <span data-aos="fade-down" className="text-[#38bdf8] font-mono tracking-widest text-base sm:text-lg">
              👋 Hello, I'm
            </span>

            <h1 data-aos="fade-right" className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Jahanzaib Mahar
            </h1>

            <div data-aos="fade-left" className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-10 sm:h-12">
              <span className="text-white">
                <Typewriter
                  words={["Front-End Developer", "UI/UX Designer", "React Specialist", "Web Enthusiast"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p data-aos="fade-up" className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto md:mx-0 leading-relaxed">
              I design modern, responsive websites with clean code,
              <span className="text-[#38bdf8] font-semibold"> fluid animations </span> &
              <span className="text-[#0ea5e9] font-semibold"> intuitive user experiences, </span>
              delivering engaging digital solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center md:justify-start w-full sm:w-auto">
              
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center relative bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] 
                text-white px-5 py-3 rounded-full font-semibold 
                text-sm sm:text-base flex items-center gap-2 transition-all duration-500 
                transform hover:scale-105 sm:hover:scale-110 shadow-lg"
              >
                <FaPaperPlane />
                Contact Me
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto justify-center relative border-2 border-[#38bdf8] text-[#38bdf8] 
                px-5 py-3 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 
                transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 
                hover:bg-[#38bdf8] hover:text-white shadow-md"
              >
                <FaRocket />
                View Projects
              </a>

            </div>

            {/* SOCIAL */}
            <div className="mt-6 sm:mt-8">
              <h2 data-aos="fade-down" className="text-gray-400 mb-4 text-sm sm:text-base">
                🌐 Connect with me
              </h2>

              <div className="flex justify-center md:justify-start items-center gap-4">
                {socialLinks.map((item, index) => (
                  <button
                    key={index}
                    data-aos={item.aos}
                    onClick={item.onClick}
                    className={`text-white flex justify-center items-center bg-gray-800 ${item.color} 
                    h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-500 transform hover:scale-110`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] animate-float-slow group">
              
              <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#0ea5e9] opacity-20 animate-pulse-delay"></div>

              <img
                src={Hero}
                alt="profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#38bdf8] shadow-2xl p-3 sm:p-5"
              />

              <div className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                Frontend Developer
              </div>

              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                WordPress Expert
              </div>

            </div>
          </div>

        </div>

        {/* Animations */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float 10s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        `}</style>

      </section>
    </Fragment>
  );
};

export default HeroSection;