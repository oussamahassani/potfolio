import React from "react";

import js from "../assets/js.png";
import php from "../assets/php.png";
import java from "../assets/java.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import angular from "../assets/angular.png"
import net from "../assets/logoimagenet.png"
import { Helmet } from "react-helmet";

import { Trans } from "react-i18next";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: js,
      title: "JavaScript",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: php,
      title: "Php",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 40,
      src: angular,
      title: "Angular",
      style: "shadow-blue-600",
    },
    {
      id: 400,
      src: net,
      title: ".Net",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];

  return (
    <>
    <Helmet>
    <title>Compétences Techniques | Oussama Hassani</title>
    <meta
      name="description"
      content="Découvrez les compétences techniques d'Oussama Hassani, développeur web et mobile : HTML, CSS, JavaScript, React, Node.js, et plus."
    />
    <meta
      name="keywords"
      content="compétences développeur, technologies web, React, JavaScript, Tailwind, HTML, CSS, Oussama Hassani"
    />
    <meta property="og:title" content="Mes compétences techniques" />
    <meta property="og:description" content="Une vue d'ensemble des technologies que je maîtrise en développement web et mobile." />
    <meta property="og:type" content="website" />
  </Helmet>
    <div name="experience" className="w-full min-h-screen experience">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          <Trans i18nKey="experience.titel" />
        </p>
        <p className="py-6">
          <Trans i18nKey="experience.mywork" />
        </p>
      </div>
  
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-4 px-6 rounded-lg ${style} flex flex-col items-center justify-center`}
          >
            <img src={src} alt={title} className="w-20 mx-auto mb-4" />
            <p className="text-lg font-medium">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  </>
  );
};

export default Experience;
