import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://www.dessa.tn/',
      repo: null
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://leads-demenagement.com/',
      repo: null
    },
    {
      id: 3,
      src: apod,
      link: 'https://cocky-bohr-7b7faa.netlify.app/',
      repo: null
    },
    {
      id: 4,
      src: waveportal,
      link: 'https://lovely-cassata-5fc341.netlify.app/',
      repo: null
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://aswaaq.ae/our-services/',
      repo: null
    },
    {
      id: 6,
      src: iptracker,
      link: 'https://albiddapark.com/',
      repo: null
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b w-full text-white from-cyan-800 to-cyan-700 md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-650 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                  Demo
                </button>
                {repo && <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                  GitHub
                </button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
