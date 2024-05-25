import React from "react";
import { Carousel } from "@material-tailwind/react";

const Project = ({
  title,
  description,
  images,
  imageClass,
  technologies,
  githubLink,
}) => {
  return (
    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      <h2 className="mt-4 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-1 text-xl text-gray-300">{description}</p>
      <p className="mt-1 text-xl text-gray-300 pt-6 pb-6">
        Technologies: {technologies}
      </p>

      <a
        className="mt-1 text-xl text-gray-300 inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        href={githubLink}
        rel="noreferrer"
        target="_blank"
      >
        Github Repository
      </a>

      <div className=" flex flex-row items-center justify-center pt-6">
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className={`${imageClass ? imageClass : ""}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
