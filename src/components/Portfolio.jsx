import React ,{useState} from "react";
import api from "../assets/portfolio/api.webp";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.webp";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import ged from "../assets/portfolio/ged.png";

import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
 const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://www.dessa.tn/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktitel1" />,
      description:<Trans i18nKey="portfolio.myworkDescription1" />,
      description1:<Trans i18nKey="portfolio.myworkDescription1.1" />

    },
    {
      id: 2,
      src: webpostman,
      link: 'https://leads-demenagement.com/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite2" />,
      description:<Trans i18nKey="portfolio.myworkDescription2" />
    },
    {
      id: 3,
      src: apod,
      link: 'https://cocky-bohr-7b7faa.netlify.app/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite3" />,
      description:<Trans i18nKey="portfolio.myworkDescription3" />
    },
    {
      id: 4,
      src: waveportal,
      link: 'https://lovely-cassata-5fc341.netlify.app/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite4" />,
      description:<Trans i18nKey="portfolio.myworkDescription4" />,
      description1:<Trans i18nKey="portfolio.myworkDescription4.1" />,
      description2:<Trans i18nKey="portfolio.myworkDescription4.2" />
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://aswaaq.ae/our-services/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite5" />,
      description:<Trans i18nKey="portfolio.myworkDescription5" />

    },
    {
      id: 6,
      src: iptracker,
      link: 'https://albiddapark.com/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite6" />,
      description:<Trans i18nKey="portfolio.myworkDescription6" />,
      description1:<Trans i18nKey="portfolio.myworkDescription6.1" />,
  
    },

     {
      id: 7,
      src: ged,
      link: 'https://long-stingy-penalty.netlify.app/',
      repo: null,
      titel:<Trans i18nKey="portfolio.myworktite7" />,
      description:<Trans i18nKey="portfolio.myworkDescription7" />
    },
  ];

  return (
    <>
    <Helmet>
      <title>Réalisations | Oussama Hassani</title>
        <meta
          name="description"
          content="Explorez les projets web et mobiles réalisés par Oussama Hassani : des interfaces intuitives, des performances solides, et une passion palpable dans chaque ligne de code."
        />
        <meta
          name="keywords"
          content="portfolio, réalisations, projets web, projets mobile, React, React Native, développeur freelance, Oussama Hassani"
        />
        <meta property="og:title" content="Mes Réalisations" />
        <meta property="og:description" content="Une galerie de projets où chaque ligne de code raconte une histoire." />
        <meta property="og:type" content="website" />
      </Helmet>
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
      {portfolios.map(({ id, src, link, repo,description,description1,description2,titel }) => (
        <div key={id} className="shadow-md shadow-gray-650 rounded-lg overflow-hidden flex flex-col">
          <img
            src={src}
            alt="projects"
            onClick={() => handleImageClick({ id, src, link, repo,description,description1,description2 ,titel})}

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
  {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Détails du projet : {selectedProject.titel}</h2>
            <p className="mb-4">{selectedProject.description}</p>
            <p className="mb-4">{selectedProject.description1}</p>
            <p className="mb-4">{selectedProject.description2}</p>


            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
</>

  );
};

export default Portfolio;
