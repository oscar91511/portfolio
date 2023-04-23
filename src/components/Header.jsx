import React from "react";

const Header = () => {
  return (
    <section className="text-white md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] max-w-[1200px] mx-auto">
      <div className="relative">
        <img className="w-[full]  md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[130%] md:max-w-none " src="/images/yo-w1.png" alt="" />
      </div>

      <section className="px-2 py-12 bg-gray-d md:grid md:place-content-center  md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl md:relative tracking-wider  font-Bebas md:z-20">I’m Oscar Lopez Restrepo. A fronted developer <span className="  text-lime-300">based in Colombia.</span></h2>
        <p className="mt-4 md:mt-10 md:relative md:z-20"><span className="text-lime-400 font-bold">Hi</span>
          , I'm a fronted developer Disigner on CSS and taildwind with great ideas and good teamwork performance. If you're looking for someone with dedication and teamwork skills, I'm the guy.
          <h2 className=" py-4  text-lime-400 font-Robo sm:font-Bebas text-4xl animate-pulse font-bold">Skills: </h2>
           <div className=" w-48 items-center gap-2 grid grid-cols-5 text-white">
            <img src="/images/HTML5.png" alt="" />
            <img src="/images/JavaScript.png" alt="" />
            <img src="/images/CSS.png" alt="" />
            <img src="/images/React.png" alt="" />
            <img src="/images/taildwind.png" alt="" />

          </div>
        </p>
      </section>
    </section>
  );
};

export default Header;
