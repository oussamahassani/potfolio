import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../LanguageContext';
import { useDarkMode } from '../DarkModeContext';
import { Trans } from "react-i18next";

const NavBar = () => {
  const { lang, changeLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [nav, setNav] = useState(false);
  const { i18n } = useTranslation();

  const links = [
    { id: 1, link: "home", texts: "nav.home" },
    { id: 2, link: "about", texts: "nav.about" },
    { id: 3, link: "portfolio", texts: "nav.portfolio" },
    { id: 4, link: "experience", texts: "nav.experience" },
    { id: 5, link: "contact", texts: "nav.contact" },
  ];

  const changeLanguages = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    window.location.reload();
  };

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 fixed top-0 z-40 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white border-b border-gray-700' 
        : 'bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white border-b border-gray-700'
    }`}>
      {/* Logo */}
      <div className="flex items-center gap-2">
              <h1 className="text-5xl font-signature ml-2"><a className="link-underline link-underline-black" href="https://oussama-hassani.netlify.app" target="_blank" rel="noreferrer">Oussama</a></h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-2">
        {links.map(({ id, link, texts }) => (
          <li key={id} className="nav-links px-4 cursor-pointer font-medium text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-200 py-2">
            <Link to={link} smooth duration={500}>
              <Trans i18nKey={texts} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
              : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
          }`}
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Language Switcher */}
        <div className="hidden sm:flex gap-1 bg-gray-700/20 rounded-lg p-1">
          <button
            onClick={() => changeLanguages('en')}
            className={`px-3 py-1 rounded transition-all ${
              i18n.language === 'en' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguages('fr')}
            className={`px-3 py-1 rounded transition-all ${
              i18n.language === 'fr' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            FR
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-400 hover:text-white md:hidden transition-colors"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="absolute top-20 left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex flex-col items-center md:hidden border-t border-gray-700">
          {links.map(({ id, link, texts }) => (
            <li key={id} className="px-4 cursor-pointer py-4 w-full text-center border-b border-gray-700 hover:bg-blue-600/20">
              <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                <Trans i18nKey={texts} />
              </Link>
            </li>
          ))}
          {/* Language switcher for mobile */}
          <li className="px-4 py-4 w-full flex gap-2 justify-center border-t border-gray-700">
            <button
              onClick={() => changeLanguages('en')}
              className={`px-4 py-2 rounded transition-all ${
                i18n.language === 'en' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguages('fr')}
              className={`px-4 py-2 rounded transition-all ${
                i18n.language === 'fr' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:text-white'
              }`}
            >
              Français
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
