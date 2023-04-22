import React from "react";

const Skillset = () => {
  return (
    <section className="text-white px-2 py-12 max-w-[1000px] mx-auto">
      {/* Subseccion superior */}
      <section className="md:grid md:grid-cols-[1fr_auto] md:gap-16">
        <article>
          <h3 className="font-bold text-3xl" id="Skillsets">Skillsets</h3>
          <p className="text-gray-400 text-2xl mt-3">
          With skills in different different fields of design, I am the perfect
            person to hire when it comes to a complete project.
          , I can take on practically any challenge, no matter how difficult it is and if I don't know it,
           I won't rest until I find the way, I am passionate about my work.
          </p>
        </article>

        <section className="grid gap-12 pt-6 md:grid-cols-2 md:gap-x-32">
          <article>
            <div className="w-20 -translate-x-[20px]">
              <img src="/images/frameWorks.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">Frameworks</h4>
            <ul className="text-gray-400">
              <li>React</li>
              <li></li>
              <li></li>
            </ul>
          </article>

          <article className="-translate-y-[-32px]">
            <div  className="-translate-y-[5px] w-12">
              <img src="/images/source.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">Source Control</h4>
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
            <h4 className="text-2xl font-semibold my-3">Languages</h4>
            <ul className="text-gray-400">
              <li>HTML</li>
              <li>CSS/taildwindCSS</li>
              <li>Javascript</li>
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
      </section>

      {/* Subseccion inferior (Logos) */}
      <section className=" grid-cols-2 mt-12 sm:grid-cols-4  grid  border-[1px] border-gray-800">
        <div className="">
          <img src="" alt="" />
        </div>

        <div className="">
          <img src="" alt="" />
        </div>

        <div className="">
          <img src="" alt="" />
        </div>

        <div className="">
          <img src="" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Skillset;