import React from "react";
import { useTranslation } from "react-i18next";

const Skillset = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col text-white px-4 py-12 max-w-[1000px] mx-auto">
      {/* Subseccion superior */}
      <section className="md:grid md:grid-cols-[1fr_auto] md:gap-16">
        <article>
          <h3 className="font-bold text-3xl" id="Skillsets">
            {" "}
            {t("Skillsets")}
          </h3>
          <p className="text-gray-400 text-2xl mt-3">
            {t("Skillsetstext")}
            <br />
            {t("Skillsetstext2")}
          </p>
        </article>
      </section>
      <section className="grid gap-12 pt-6 grid-cols-2 md:grid-cols-4 mx-auto md:gap-x-32">
        <article>
          <div className="w-20 -translate-x-[20px]">
            <img src="/images/frameWorks.png" alt="" />
          </div>
          <h4 className="text-2xl font-semibold my-3">{t("Frameworks")}</h4>
          <ul className="text-gray-400">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sql =</li>
            <li>pgAdmin4/Tableplus/Postman</li>
          </ul>
        </article>

        <article className="-translate-y-[-32px]">
          <div className="-translate-y-[5px] w-12">
            <img src="/images/source.png" alt="" />
          </div>
          <h4 className="text-2xl font-semibold my-3">{t("SourceControl")}</h4>
          <ul className="text-gray-400">
            <li>Git/Github</li>
            <li>Netlify</li>
            <li></li>
          </ul>
        </article>

        <article>
          <div className="w-14">
            <img src="/images/lenguajes_.png" alt="" />
          </div>
          <h4 className="text-2xl font-semibold my-3">{t("Languages")}</h4>
          <ul className="text-gray-400">
            <li>HTML</li>
            <li>CSS/taildwindCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>vue.js</li>
          </ul>
        </article>

        <article className="-translate-y-[-4px]">
          <div className="w-14">
            <img src="/images/UX-UI.png" alt="" />
          </div>
          <h4 className="text-2xl font-semibold my-3">UX/UI</h4>
          <ul className="text-gray-400">
            <li>canva</li>
            <li>Figma</li>
            <li></li>
          </ul>
        </article>
      </section>

      {/* Subseccion inferior (Logos) */}
    </section>
  );
};

export default Skillset;
