import React from "react";

const Work = () => {
  return (
    <section className="text-white py-12 px-2 max-w-[1200px] mx-auto">
      <div>
        <h3
          className="uppercase text-sm font-semibold text-gray-400"
          id="Work Experience"
        >
          Work Experience
        </h3>

        <h2 className="text-3xl font-bold font-Bebas hover:text-lime-400 cursor-pointer mt-2">
          Actualy Work on Self Projets
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
              <h1 className="text-xl pt-4  sm:py-4  py-0 ">Academlo Store</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 1</p>
              <p className=" text-xl sm:text-[30px]  ">
                On this proyect im working whit a team from Academlo, we done
                this store whit, cart darkmode, slider bar, memori main, support
                window etc. we use CSS and JavaScript.
              </p>
              <a
                href="https://store-academlo-shop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400  sm:text-[25px] text-xl  hover:text-blue-700"
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4  "> Api climate</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 2</p>
              <p className=" text-xl  sm:text-[30px] sm:text-2xl ">
                We use TaildwindCSS, JS, and HTML on React for the finished API.
                add modes such as the dark mode that automatically adapts
                according to the time, you can search different places.
              </p>
              <a
                href="https://climate-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="   text-gray-400 mt-1  sm:text-[25px] text-xl  hover:text-blue-700"
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4  ">Academlo Store</h1>
              <p class="text-xl sm:text-3xl text-lime-400">Proyect 3</p>
              <p className=" text-xl sm:text-[30px] ">
                in this shop we test our individual skills, using CSS,
                JavaScript and HTML5. What are you waiting for to visit now
                GamingSoftwarePereira. this shop is a practice design
              </p>
              <a
                href="https://tienda-virtual-1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[20px] text-xl  hover:text-blue-700"
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4   ">About Galaxys</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 4</p>
              <p className="text-xl sm:text-[30px] sm:py-2">
                welcome to the galaxy You will make this trip through a space
                rocket, thus managing to travel to different places and thus
                discover great things.
              </p>
              <a
                href="https://into-spaceship.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-blue-700"
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4    "> Rick And Morty</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 5</p>
              <p className="text-xl sm:text-[30px] ">
                We are going on a journey through different dimensions, with our
                two crazy friends. You cannot imagine the characters that we
                will find in these different places.
              </p>
              <a
                href="https://rick-and-morty-world.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-blue-700"
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4   ">Data Base</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 6</p>
              <p className="text-xl sm:text-[30px] sm:py-7">
                In this project we work on the creation of a database, with user
                registration, user deletion and data update functions.
              </p>
              <a
                href="https://crud-data-base.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-blue-700 "
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4   ">Academlo Store</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 7</p>
              <p className="text-xl sm:text-[30px] sm:py-2">
                this is a fronted mentor challenge we replicate a stat card
                using TaildwindCSS, HTML 5 and JavaScript. All rights to
                creators of the challenge.
              </p>
              <a
                href="https://taildwind-vite-and-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-blue-700 "
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4   ">Pokedex Api</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 7</p>
              <p className="text-xl sm:text-[30px] sm:py-10">
              in this project we use tailwind, react, vite,  and an api to create a pokedex.
              come find your pokemon.
              </p>
              <a
                href="https://poke-dex-world.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-blue-700 "
              >
                click on the project
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
              <h1 className="text-xl pt-4 sm:text-3xl sm:py-4   ">E-commerce</h1>
              <p class="text-xl sm:text-3xl text-lime-400">proyect 7</p>
              <p className="text-xl pb-4 sm:text-[30px] sm:py-10">Amazing Store <br />

              in this project we use tailwind, react, vite,  and an api to create a Amazing Store.
              do you like buy something.
              </p>
              <a
                href="https://ecommerce-store-proyect6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-blue-700 "
              >
                click on the project
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
