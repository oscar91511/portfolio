import React from "react";
import { useTranslation } from "react-i18next";

const Philosophy = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    const cvUrl = t("cvUrl"); // Url of cv  according to language  / Obtener la URL del CV según el idioma actual

    // open url cv on new window / Abre la URL del CV en una nueva pestaña
    window.open(cvUrl, "_blank");
  };

  return (
    <section className="max-w-[1200px] mx-auto text-white sm:grid sm:grid-cols-2">
      <article className="bg-[#FFF3E4] text-black py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-2xl animate-pulse font-bold mb-4" id="About me">
            {t("About me")}
          </h3>
          <p className="text-gray-500">
            {t("helloText")}{" "}
            <span className="text-blue-500 uppercase">{t("Oscar Lopez")}</span>,
            {t("devDescription")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[25px] uppercase font-bold mb-4 ">
            {t("contatcm")}
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/oscar-eduardo-lopez-restrepo-968a91265/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img
                className="w-[100px]"
                src="/images/linked.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/oscar91511/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img
                className="w-[100px]"
                src="/images/github.png"
                alt="GitHub"
              />
            </a>
            <a
              href="mailto:gamingsoftwarepereira@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img className="w-[100px]" src="/images/gmail.png" alt="Gmail" />
            </a>
            <a
              onClick={handleDownloadCV}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[200px] flex items-center"
            >
              <img className="w-[50px]" src="/images/cv.png" alt="cv" />
            </a>
          </div>
        </div>
      </article>
      <article>
        <img
          className="w-[full] h-[400px]  object-cover"
          src="/images/yo-pc.jpg"
          alt=""
        />
      </article>
    </section>
  );
};

export default Philosophy;
