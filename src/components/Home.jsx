import React from "react";
import HeroImage from "../assets/heroImage.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
   <Helmet>
      <title>À propos | Oussama Hassani</title>
      <meta
        name="description"
        content="Découvrez qui est Oussama Hassani, développeur web et mobile passionné, ses valeurs, son parcours et sa vision du développement moderne."
      />
      <meta
        name="keywords"
        content="à propos, Oussama Hassani, développeur web, développeur mobile, freelance, parcours, profil, mission"
      />
      <meta name="author" content="Oussama Hassani" />
      <meta property="og:title" content="À propos de moi" />
      <meta property="og:description" content="Apprenez à connaître Oussama Hassani, son expérience et ses valeurs en tant que développeur." />
      <meta property="og:type" content="website" />
     <link
    rel="preload"
    as="image"
    href={{HeroImage}}
    type="image/webp"
    fetchpriority="high"
  />
    </Helmet>
   
{/*
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
                loading="lazy"
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
                  className="rounded-2xl mx-auto  moveArrow"
                />
              </div>
            </div>
          </div>

        </div>
      </div>*/}
      <div
  name="home"
  className="min-h-screen pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800 home"
>
  <div className="flex flex-col justify-between sm:text-left relative px-4 h-full bg-gradient-to-bl from-cyan-800 to-cyan-700">

    <div className="w-[90%] max-w-screen-lg flex flex-col items-center justify-center h-full mx-auto md:flex-row gap-6 py-8">

      {/* Image côté gauche sur grand écran */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={HeroImage}
          alt="profile"
          className="rounded-2xl mx-auto w-full h-auto object-contain aos-init aos-animate moveArrow"
          fetchpriority="high"
        />
      </div>

      {/* Texte */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <Trans i18nKey="home.titel" />
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          <Trans i18nKey="home.description" />
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          <Trans i18nKey="home.descriptionn" />
        </p>
        <div className="portfolio-btn">
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="inline-flex items-center px-6 py-3 text-lg text-white bg-cyan-950 rounded-md hover:opacity-75 transition"
          >
            <Trans i18nKey="home.checkMyWork" />
            <span className="ml-2 group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>

      {/* Image sur mobile */}
      <div className="block md:hidden w-full mt-6">
        <img
          src={HeroImage}
          alt="profile"
          className="rounded-2xl mx-auto w-full max-w-xs h-auto object-contain moveArrow"
          fetchpriority="high"
        />
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default Home;
