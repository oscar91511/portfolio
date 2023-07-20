import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en"; // We alternate between "is" and "in" each time it is clicked 
    // Alternamos entre "es" y "en" cada vez que se haga clic
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // we change language using hook useTranslation
     // Cambiamos el idioma usando el hook useTranslation
  };


  return (
    <header className="flex justify-between py-4  px-2 text-3xl text-white items-center md:px-4 md:py-0 absolute top-0 left-0 w-full z-30">
      <h1 className="font-bold  hover:text-lime-400 tracking-wider  animate-pulse font-Robo">
        Oscar L.R
      </h1>

      <i
        onClick={handleShowNav}
        className="bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`text-white  absolute  top-full ${
          isShowNav ? "left-0," : "-left-full"
        } w-full grid text-lg gap-2  font-Robo font-bold sm:font-Bebas duration-200 md:static md:flex md:w-auto`}
      >
        <a
          className="hover:text-lime-400 p-4 duration-200 text-3xl  pl-2 cursor-pointer"
           onClick={() => handleLanguageChange('es')}
          id="languageButton"
        >
          {t('languageButton')}
        </a>
        <a
          className=" hover:text-lime-400 p-4 duration-200 text-3xl pl-2  "
          href="#Work Experience"
        >
          {t('workExperience')}
        </a>
        <a
          className=" hover:text-lime-400 p-4 duration-200 text-3xl  pl-2 "
          href="#Skillsets"
        >
           {t('skillsets')}
        </a>
        <a
          className=" hover:text-lime-400 p-4 duration-200 text-3xl  pl-2 "
          href="#About me"
        >
         {t('contactMe')}
        </a>
        
      </nav>
    </header>
  );
};

export default Navbar;
