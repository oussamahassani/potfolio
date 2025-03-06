import React from "react";
import HeroImage from "../assets/about_3d.png";

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
              About
            </p>
          </div>

          <p className="text-xl mt-5">
            I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
          </p>

          <br />

          <p className="text-xl">
            I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
            I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
            I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
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
