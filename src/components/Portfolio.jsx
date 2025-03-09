import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import { Trans } from "react-i18next";

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
  className="bg-gradient-to-b w-full text-white from-cyan-800 to-cyan-700 portfolio"
>
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
    <div className="pb-8">
      <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 overflow-hidden">
        <Trans i18nKey="portfolio.titel" />
      </p>
      <p className="py-6 text-sm sm:text-base overflow-hidden">
        <Trans i18nKey="portfolio.mywork" />
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
      {portfolios.map(({ id, src, link, repo }) => (
        <div key={id} className="shadow-md shadow-gray-650 rounded-lg overflow-hidden flex flex-col">
          <img
            src={src}
            alt="projects"
            className="w-full h-auto sm:h-64 md:h-80 object-cover rounded-md duration-200 hover:scale-105"
          />
          <div className="flex flex-col items-center justify-center p-4 space-y-4">
            <button
              className="w-full sm:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
              onClick={() => window.open(link, '_blank')}
            >
              <Trans i18nKey="portfolio.demo" />
            </button>
            {repo && (
              <button
                className="w-full sm:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
                onClick={() => window.open(repo, '_blank')}
              >
                <Trans i18nKey="portfolio.github" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default Portfolio;
