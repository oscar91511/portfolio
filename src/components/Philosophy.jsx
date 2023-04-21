import React from "react";

const Philosophy = () => {
  return (
    <section className="max-w-[1200px] mx-auto text-white sm:grid sm:grid-cols-2">
      <article className="bg-[#FFF3E4] text-black py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">Philosophy & values</h3>
          <p className="text-gray-500">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </p>
        </div>

        <a className="border-b-2 border-gray-400 max-w-max pb-1" href="#">Check my LinkedIn</a>
      </article>

      <article>
        <img className="w-full h-[400px] object-cover" src="/images/philosophy.png" alt="" />
      </article>
    </section>
  );
};

export default Philosophy;
