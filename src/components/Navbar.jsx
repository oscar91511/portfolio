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
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="md:container md:mx-auto flex justify-between py-4 px-2 text-3xl text-white items-center md:px-4 md:py-0 fixed top-0 left-0 w-full z-30">
      <h1 className="font-bold hover:text-lime-400 tracking-wider animate-pulse font-Robo">
        Oscar L.R
      </h1>

      <i
        onClick={handleShowNav}
        className="bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer hover:text-lime-400 md:hidden"
      ></i>

      {/* Translucent dark background / Fondo oscuro translúcido */}
      {isShowNav && (
        <div
          className="fixed  top-0 left-0 w-full h-screen bg-black opacity-50 z-10"
          onClick={handleShowNav} // Close menu when dark background is clicked / Cerrar el menú cuando se haga clic en el fondo oscuro
        />
      )}

      <nav
        className={`text-white absolute top-full md:bg-gray-800/80 ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg gap-2 font-Robo font-bold sm:font-Bebas duration-200 md:static md:flex md:w-auto z-20`}
      >
        {/* Navigation bar content / Contenido de la barra de navegación */}
        <a
          className="hover:text-lime-400 p-4 duration-200 text-3xl pl-2 cursor-pointer"
          onClick={() => handleLanguageChange("es")}
          id="languageButton"
        >
          {t("languageButton")}
        </a>
        <a
          className="hover:text-lime-400 p-4 duration-200 text-3xl pl-2"
          href="#Work Experience"
        >
          {t("workExperience")}
        </a>
        <a
          className="hover:text-lime-400 p-4 duration-200 text-3xl pl-2"
          href="#Skillsets"
        >
          {t("skillsets")}
        </a>
        <a
          className="hover:text-lime-400 p-4 duration-200 text-3xl pl-2"
          href="#About me"
        >
          {t("contactMe")}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
