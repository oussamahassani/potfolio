import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../LanguageContext'; // Importer le contexte
import { Trans } from "react-i18next";

const NavBar = () => {
  const { lang, changeLanguage } = useLanguage(); // Accéder à la langue et à la fonction de changement

  const [nav, setNav] = useState(false);
  const { i18n } = useTranslation();
  const [langs, setLang] = useState(i18n.language); // Récupère la langue actuelle

  const links = [
    {
      id: 1,
      link: "home",
      classs: "",
      texts: "nav.home"
    },
    {
      id: 2,
      link: "about",
      classs: "",
      texts: "nav.about"

    },
    {
      id: 3,
      link: "portfolio",
      classs: "",
      texts: "nav.portfolio"

    },
    {
      id: 4,
      link: "experience",
      classs: "",
      texts: "nav.experience"

    },
    {
      id: 5,
      link: "contact",
      classs: "",
      texts: "nav.contact"
    },
  ];
  const changeLanguages = (newLang) => {
    //changeLanguage(value);
    i18n.changeLanguage(newLang)
    localStorage.setItem("i18nextLng", newLang)
    window.location.reload();

  }


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-black to-gray-800 fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="https://rahulkarda.netlify.app">Rahul</a></h1> */}
        <h1 className="text-5xl font-signature ml-2"><a className="link-underline link-underline-black" href="https://oussama-hassani.netlify.app" target="_blank" rel="noreferrer">Oussama</a></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, classs, texts }) => (
          <li
            key={id}
            className={classs ? classs : "nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-80 hover:text-white duration-200 link-underline"}
          >
            <Link to={link} smooth duration={500}>
              <Trans i18nKey={texts} />

            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, classs }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  className={classs ? classs : ""}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      <div>
        <nav>
          <ul>
            <li className="px-4 cursor-pointer ">
              <button onClick={() => changeLanguages('en')}>  <Trans i18nKey="nav.lan.en" />
              </button>
            </li>
            <li className="px-4 cursor-pointer">
              <button onClick={() => changeLanguages('fr')}>  <Trans i18nKey="nav.lan.fr" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div >
  );
};

export default NavBar;
