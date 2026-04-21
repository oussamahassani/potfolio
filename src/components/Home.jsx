import React, { useState } from "react";
import HeroImage from "../assets/heroImage.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";
import Canvas3D from "./Canvas3D";
import ScheduleCall from "./ScheduleCall";
import Newsletter from "./Newsletter";

const Home = () => {
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
        className="min-h-screen pt-20 w-full bg-gradient-to-b from-black via-black to-gray-900 dark:from-gray-900 dark:via-gray-900 dark:to-black home relative"
      >
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Animated gradient blobs */}
          <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse-slow"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse-slow"></div>
        </div>

        <div className="flex flex-col justify-between sm:text-left relative px-4 h-full bg-gradient-to-bl from-transparent to-transparent">
          <div className="w-[90%] max-w-screen-lg flex flex-col items-center justify-center h-full mx-auto md:flex-row gap-8 py-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-semibold">👋 Welcome to my portfolio</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                <Trans i18nKey="home.titel" />
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                <Trans i18nKey="home.description" />
              </p>

              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                <Trans i18nKey="home.descriptionn" />
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <Trans i18nKey="home.checkMyWork" />
                  <MdOutlineKeyboardArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition" />
                </Link>

                <button
                  onClick={() => setShowSchedule(true)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  📞 Schedule Call
                </button>

                <button
                  onClick={() => setShowNewsletter(true)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  📬 Newsletter
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 w-full md:w-auto">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur">
                  <p className="text-2xl font-bold text-blue-400">8+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg backdrop-blur">
                  <p className="text-2xl font-bold text-purple-400">50+</p>
                  <p className="text-sm text-gray-400">Projects Done</p>
                </div>
                <div className="p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg backdrop-blur">
                  <p className="text-2xl font-bold text-pink-400">15+</p>
                  <p className="text-sm text-gray-400">Companies</p>
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
                  className="relative rounded-2xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
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

