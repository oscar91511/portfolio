import React from "react";

const Work = () => {
  return (
    <section className="text-white py-12 px-2 max-w-[1200px] mx-auto">
      <h3 className="uppercase text-sm font-semibold text-gray-400">
        Work Experience
      </h3>
      <h2 className="text-3xl font-bold font-Bebas hover:text-lime-400 cursor-pointer mt-2">
        Actualy Work on Selft Projets
      </h2>
      <section className="grid gap-12 mt-12 sm:grid-cols-1">
        <article class="grid sm:grid-cols-7 text-[22px] sm:text-[16px] py-4 gap-4 font-Bebas text-lime-400">
          <div class="p-4  hover:bg-[#FFF3E4]  hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px]  font-bold">
              Proyect 1
            </h3>
            <p class="mt-2 ">
              on this proyect im working whit a team on the Academlo making this
              Store whit, cart,darkmode,slider bar,memori main, support window
              etc. we use CSS and JavaScript{" "}
            </p>
            <img className="" src="/images/Academlo_Store.jpg" alt="" />
            <a
              href="https://store-academlo-shop.netlify.app/"
              class="mt-4 items  text-gray-400 sm:text-[20px] text-[25px]  hover:text-blue-700 "
            >
              (Click for) Look proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px] font-bold">
              Proyect 2
            </h3>
            <p class="mt-2">
              Api climate: We use TaildwindCSS, JavaScript, and HTML in React
              for the finished API. We add modes such as the dark mode that
              automatically adapts according to the time, a search engine for
              different places
            </p>
            <img className="" src="/images/climate.jpg" alt="" />
            <a
              href="https://climate-api.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px] font-bold">
              Proyect 3
            </h3>
            <p class="mt-2">
              in this shop we test our individual skills, using CSS, JavaScript
              and HTML5. What are you waiting for to visit now
              GamingSoftwarePereira. this shop is a practice design <br />
              <br />
            </p>

            <img className="" src="/images/store.jpg" alt="" />
            <a
              href="https://tienda-virtual-1.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700  text-[22px] font-bold">
              Proyect 4
            </h3>
            <p class="mt-2">
              welcome to the galaxy You will make this trip through a space
              rocket, thus managing to travel to different places and thus
              discover great things.
              <br />
              <br />
              <br />
              <br />
            </p>
            <img className="" src="/images/galaxy.jpg" alt="" />
            <a
              href="https://into-spaceship.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px] font-bold">
              Proyect 5
            </h3>
            <p class="mt-2">
              Welcome join us in this crazy story. We are going on a journey
              through different dimensions, with our two crazy friends. You
              cannot imagine the characters that we will find in these different
              places.
              <br />
            </p>
            <img className="" src="/images/rick_and_morty.jpg" alt="" />
            <a
              href="https://rick-and-morty-world.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px] font-bold">
              Proyect 6
            </h3>
            <p class="mt-2">
              In this fronted mentor challenge we created an etherium card
              "called: Equilibrium". we managed to replicate it in detail using
              CSS, JavaScript. credits to fronted mentor as creators of the
              challenge.
            </p>
            <img className="" src="/images/Eterium_Card.jpg" alt="" />
            <a
              href="https://tarjet-eth-equilibrium.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
          <div class="p-4 hover:bg-[#FFF3E4] hover:shadow-lg">
            <h3 class="text-lg text-gray-700 text-[22px] font-bold">
              Proyect 7
            </h3>
            <p class="mt-2">
              hi, in this fronted mentor challenge we replicate a stat card. we
              use TaildwindCSS ,HTML 5 and JavaScript. All rights to fronted
              mentor for being creators of the challenge
              <br />
              <br />
            </p>
            <img className="" src="/images/Card_stats.jpg" alt="" />
            <a
              href="https://taildwind-vite-and-react.netlify.app/"
              class="mt-2 text-gray-400 hover:text-blue-700 sm:text-[20px] text-[25px]"
            >
              (click for) Look Proyect
            </a>
          </div>
        </article>
        <article>
          <img src="" alt="" />
        </article>
      </section>
    </section>
  );
};

export default Work;
