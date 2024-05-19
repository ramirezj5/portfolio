// summary of interest, hobbies, school and so forth

import React from "react";
import exampleImage from "../assets/img/bitmoji.jpeg";

const About = () => {
  return (
    <section className="bg-gray-900 min-h-full flex items-center justify-center">
      <div className=" flex flex-row items-center justify-center px-64 space-x-8">
        <img
          src={exampleImage}
          alt="Example"
          className="w-60 h-80 rounded-full"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-400 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>

          <div className="py-10">
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex justify-evenly" aria-label="Tabs">
                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Messages
                  </a>

                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Archive
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
