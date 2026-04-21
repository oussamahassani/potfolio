import React, { useState } from "react";
import HeroImage from "../assets/heroImage.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";
import { useDarkMode } from "../DarkModeContext";
import Canvas3D from "./Canvas3D";
import ScheduleCall from "./ScheduleCall";
import Newsletter from "./Newsletter";

const Home = () => {
  const { isDarkMode } = useDarkMode();
  const [showSchedule, setShowSchedule] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <>
      <Helmet>
        <title>Senior Full Stack Developer | JavaScript, Java, React, Node.js</title>
        <meta
          name="description"
          content="Experienced full-stack developer with 8+ years specializing in JavaScript, Java, React, Node.js, and cloud technologies. Hire me for web development projects."
        />
        <meta
          name="keywords"
          content="full-stack developer, JavaScript, Java, React, Node.js, freelance, consultant, portfolio"
        />
      </Helmet>

      {/* 3D Canvas Background */}
      <Canvas3D />

      <div
        name="home"
        className={`min-h-screen pt-16 sm:pt-20 w-full home relative transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-b w-full text-white from-cyan-800 to-cyan-700 portfolio"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Animated gradient blobs */}
          <div className={`absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl ${
            isDarkMode ? "opacity-5" : "opacity-10"
          } animate-pulse-slow`}></div>
          <div className={`absolute top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl ${
            isDarkMode ? "opacity-5" : "opacity-10"
          } animate-pulse-slow`}></div>
          <div className={`absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl ${
            isDarkMode ? "opacity-5" : "opacity-10"
          } animate-pulse-slow`}></div>
        </div>

        <div className="flex flex-col justify-between sm:text-left relative px-4 h-full bg-gradient-to-bl from-transparent to-transparent">
          <div className="w-[90%] max-w-screen-lg flex flex-col items-center justify-center h-full mx-auto md:flex-row gap-8 py-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
              <div className={`inline-block px-3 sm:px-4 py-2 bg-blue-500/10 border rounded-full ${
                isDarkMode
                  ? "border-blue-500/50"
                  : "border-blue-500/30"
              }`}>
                <span className={`text-xs sm:text-sm font-semibold ${
                  isDarkMode ? "text-blue-300" : "text-blue-400"
                }`}>👋 Welcome to my portfolio</span>
              </div>

              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg ${
                 "text-white" 
              }`}>
                <Trans i18nKey="home.titel" />
              </h1>

              <p className={`text-base sm:text-lg md:text-xl max-w-xl leading-relaxed 
              "text-gray-200" 
              `}>
                <Trans i18nKey="home.description" />
              </p>

              <p className={`text-base sm:text-lg md:text-xl max-w-xl leading-relaxed ${
              "text-gray-200" 
              }`}>
                <Trans i18nKey="home.descriptionn" />
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto pt-4">
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-700 to-cyan-600 hover:shadow-blue-600/50"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-blue-500/50"
                  }`}
                >
                  <Trans i18nKey="home.checkMyWork" />
                  <MdOutlineKeyboardArrowRight size={20} className="hidden sm:inline ml-2 group-hover:translate-x-1 transition" />
                </Link>

                <button
                  onClick={() => setShowSchedule(true)}
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-700 to-pink-700 hover:shadow-purple-600/50"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/50"
                  }`}
                >
                 
                   <Trans i18nKey="home.call" />
                </button>

                <button
                  onClick={() => setShowNewsletter(true)}
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isDarkMode
                      ? "bg-gradient-to-r from-green-700 to-emerald-700 hover:shadow-green-600/50"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/50"
                  }`}
                >
                 
                   <Trans i18nKey="home.news" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 w-full md:w-auto">
                <div className={`p-3 sm:p-4 rounded-lg backdrop-blur border  "bg-blue-500/20 border-blue-500/30"
                    
                }`}>
                  <p className={`text-xl sm:text-2xl font-bold ${
                    "text-blue-300" 
                  }`}>8+</p>
                  <p className={`text-xs sm:text-sm ${
                   "text-gray-300" 
                  }`}>Years Experience</p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg backdrop-blur border 
                 "bg-purple-500/20 border-purple-500/30"
                `}>
                  <p className={`text-xl sm:text-2xl font-bold ${
                    isDarkMode ? "text-purple-300" : "text-purple-400"
                  }`}>50+</p>
                  <p className={`text-xs sm:text-sm 
                   "text-gray-300"
                  `}>Projects Done</p>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg backdrop-blur border 
                   "bg-pink-500/20 border-pink-500/30"
                `}>
                  <p className={`text-xl sm:text-2xl font-bold ${
                    isDarkMode ? "text-pink-300" : "text-pink-400"
                  }`}>15+</p>
                  <p className={`text-xs sm:text-sm 
                  "text-gray-600"
                  `}>Companies</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={HeroImage}
                  alt="Full Stack Developer"
                  className="relative rounded-2xl w-full h-auto  shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ScheduleCall isOpen={showSchedule} onClose={() => setShowSchedule(false)} />
      <Newsletter isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
    </>
  );
};

export default Home;

