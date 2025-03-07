import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Trans } from "react-i18next";

const Home = () => {
  return (
    <>



      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
      >
        <div className="flex flex-col justify-between sm:text-left relative px-2 md:px-0 h-screen bg-gradient-to-bl   from-cyan-800 to-cyan-700">


          <div className="max-w-screen-lg  mx-auto w-full flex flex-col items-center justify-center h-full px-4 md:flex-row">

            <div className="small-screen hidden">
              <img
                src={HeroImage}
                alt="profile"
                className="w-1/1 md:w-1/2 relative aos-init aos-animate"
              />
            </div>
            <div className="flex flex-col justify-center h-full w-full">
              <h2 className="text-7xl sm:text-7xl font-bold text-white">

                <Trans i18nKey="home.titel" />
              </h2>
              <p className="text-2xl font-light text-gray-300">
                <Trans i18nKey="home.description" />
              </p>

              <div className="portfolio-btn">
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="inline-flex drop-shadow-md flex justify-center items-center m-auto sm:m-0 px-6 py-3 mb-3 text-lg text-white bg-cyan-950 rounded-md sm:mb-0 hover:opacity-75"
                >
                
                  <Trans i18nKey="home.checkMyWork" />
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="big-screen aos-init aos-animate " data-aos="zoom-in">
              <div className="relative aos-init aos-animate w-full  " >
                <img
                  src={HeroImage}
                  alt="profile"
                  className="rounded-2xl mx-auto  "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
