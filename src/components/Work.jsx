import React from "react";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section className="text-white py-12 px-2 max-w-[1200px] mx-auto">
      <div>
        <h3
          className="uppercase text-sm font-semibold text-gray-400"
          id="Work Experience"
        >
          {t("WorkExperience")}
        </h3>

        <h2 className="text-3xl font-bold font-Bebas hover:text-lime-400 cursor-pointer mt-2">
          {t("MainProyects")}
        </h2>
      </div>

      <section class="grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-3 mx-auto gap-[20px]  text-[22px] sm:text-[16px] mt-6 font-Bebas ">
        <article className="group h-[400px] w-[100%]  mx-auto sm:h-[400px] sm:w-[400px] sm:mt-4 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto rounded-[18px] shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/Academlo_Store.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center  h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4  sm:py-4  py-0 ">
                {t("AcademloStore")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project1")}</p>
              <p className=" text-xl sm:text-[25px]  sm:py-4">
                {t("project1text")}
              </p>
              <a
                href="https://store-academlo-shop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400  sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon1")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mx-auto  mt-4 sm:h-[400px] sm:w-[400px] sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/climate.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  flex flex-col justify-center items-center h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-xl sm:py-1 ">
                {t("Apiclimate")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project2")}</p>
              <p className=" text-xl  sm:text-[25px] sm:py-8">
                {t("project2text")}
              </p>
              <a
                href="https://climate-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="   text-gray-400 mt-1  sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon2")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto sm:h-[400px] sm:w-[400px] sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/store.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full flex flex-col justify-center items-center rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-xl sm:py-4  ">
                {t("Store")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project3")}</p>
              <p className=" text-xl sm:text-[25px] sm:py-4">
                {t("project3text")}
              </p>
              <a
                href="https://tienda-virtual-1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon3")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/galaxy.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  flex flex-col justify-center items-center  h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4 ">
                {t("AboutGalaxies")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project4")}</p>
              <p className="text-xl sm:text-[25px] sm:py-8">
                {t("project4text")}
              </p>
              <a
                href="https://into-spaceship.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500"
              >
                {t("clickon4")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/rick_and_morty.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full rounded-xl flex flex-col justify-center items-center bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4  ">
                {" "}
                {t("RickAndMorty")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project5")}</p>
              <p className="text-xl sm:text-[25px] sm:py-4">
                {t("project5text")}
              </p>
              <a
                href="https://rick-and-morty-world.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500"
              >
                {t("clickon5")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)] border-[#FFF3E4]   border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/crud.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full flex flex-col justify-center items-center rounded-xl  bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4   ">
                {t("DataBase")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project6")}</p>
              <p className="text-xl sm:text-[25px] sm:py-10">
                {t("project6text")}
              </p>
              <a
                href="https://crud-data-base.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-lime-500 "
              >
                {t("clickon6")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/Card_stats.jpg"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0    h-full flex flex-col justify-center items-center rounded-xl  bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4   ">
                {t("CardFrontedmentor")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project7")}</p>
              <p className="text-xl sm:text-[25px] sm:py-4">
                {t("project7text")}
              </p>
              <a
                href="https://taildwind-vite-and-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-lime-500 "
              >
                {t("clickon7")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2 px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/pokedex.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0    h-full flex flex-col justify-center items-center rounded-xl  bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4   ">
                {t("PokedexApi")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project8")}</p>
              <p className="text-xl sm:text-[25px] sm:py-8">
                {t("project8text")}
              </p>
              <a
                href="https://poke-dex-world.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500 "
              >
                {t("clickon8")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2 px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/amazing-2.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0    h-full flex flex-col justify-center items-center rounded-xl  bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4   ">
                {t("E-commerce")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project9")}</p>
              <p className="text-xl pb-4 sm:text-[25px] sm:py-4">
                <br />
                {t("project9text")}
              </p>
              <a
                href="https://ecommerce-store-project6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500 "
              >
                {t("clickon9")}
              </a>
            </div>
          </div>
        </article>
      </section>
      <article>
        <img src="" alt="" />
      </article>
    </section>
  );
};

export default Work;
