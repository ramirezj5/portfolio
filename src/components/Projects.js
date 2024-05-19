import React from "react";
import exampleImage from "../assets/img/ReactJobs1.png";
import exampleImage2 from "../assets/img/ReactJobs2.png";
import exampleImage3 from "../assets/img/ReactJobs3.png";
import { Carousel } from "@material-tailwind/react";

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white min-h-full">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <p className="text-6xl font-bold text-white">Projects</p>
        <div className="mt-8 pt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-1">
          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <div className=" flex flex-row items-center justify-center ">
              <Carousel>
                <img src={exampleImage} alt="Example" />
                <img src={exampleImage2} alt="Example" />
                <img src={exampleImage3} alt="Example" />
              </Carousel>
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">
              Career Connect Website
            </h2>
            <p className="mt-1 text-lg text-gray-300">
              Recruiters can easily post, edit, and manage job openings,
              ensuring that positions are always up-to-date. Developers can
              browse through a curated list of job opportunities to find the
              perfect fit for their next career move.
            </p>
            <p className="mt-1 text-lg text-gray-300">Technologies</p>
            <p className="mt-1 text-lg text-gray-300">Github</p>
          </div>

          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <div className=" flex flex-row items-center justify-center ">
              <Carousel>
                <img src={exampleImage} alt="Example" />
                <img src={exampleImage2} alt="Example" />
                <img src={exampleImage3} alt="Example" />
              </Carousel>
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">
              Career Connect Website
            </h2>
            <p className="mt-1 text-lg text-gray-300">
              Recruiters can easily post, edit, and manage job openings,
              ensuring that positions are always up-to-date. Developers can
              browse through a curated list of job opportunities to find the
              perfect fit for their next career move.
            </p>
            <p className="mt-1 text-lg text-gray-300">Technologies</p>
            <p className="mt-1 text-lg text-gray-300">Github</p>
          </div>

          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <div className=" flex flex-row items-center justify-center ">
              <Carousel>
                <img src={exampleImage} alt="Example" />
                <img src={exampleImage2} alt="Example" />
                <img src={exampleImage3} alt="Example" />
              </Carousel>
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">
              Career Connect Website
            </h2>
            <p className="mt-1 text-lg text-gray-300">
              Recruiters can easily post, edit, and manage job openings,
              ensuring that positions are always up-to-date. Developers can
              browse through a curated list of job opportunities to find the
              perfect fit for their next career move.
            </p>
            <p className="mt-1 text-lg text-gray-300">Technologies</p>
            <p className="mt-1 text-lg text-gray-300">Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
