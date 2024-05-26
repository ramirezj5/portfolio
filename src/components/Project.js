import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

const Project = ({
  title,
  description,
  images,
  imageClass,
  technologies,
  githubLink,
  arrowClass,
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
        <Carousel
          loop={true}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color={arrowClass}
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color={arrowClass}
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className={`mx-auto ${imageClass ? imageClass : ""}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
