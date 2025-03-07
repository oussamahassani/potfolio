import React from "react";
import HeroImage from "../assets/about_3d.png";
import { Trans } from "react-i18next";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100  text-black about "
    >
      <div className="flex flex-col justify-between">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">

              <Trans i18nKey="about.titel" />
            </p>
          </div>

          <p className="text-xl mt-5">
            <Trans i18nKey="about.howIm" />

          </p>

          <br />

          <p className="text-xl">



            <Trans i18nKey="about.phrase1" /><br /> <br />
            <Trans i18nKey="about.phrase2" />
            <br /> <br />
            <Trans i18nKey="about.phrase3" />

          </p>
        </div>
        <div className="abouthero">
          <div class=" relative md:flex md:w-3/12 bg-cyan-700 bg-cyan-new w-full aos-init aos-animate" data-aos="fade-left">
            <div class="grow">

            </div>
            <img class=" max-w-80 bottom-0  md:block absolute overflow-hidden" src={HeroImage} alt="Illustration image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
