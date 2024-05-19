import React from "react";
import exampleImage from "../assets/img/ReactJobs1.png";
import exampleImage2 from "../assets/img/ReactJobs2.png";
import exampleImage3 from "../assets/img/ReactJobs3.png";
import amazonClone1 from "../assets/img/AmazonClone1.png";
import amazonClone2 from "../assets/img/AmazonClone2.png";
import amazonClone3 from "../assets/img/AmazonClone3.png";
import calculator1 from "../assets/img/Calculator1.png";
import calculator2 from "../assets/img/Calculator2.png";
import Project from "./Project";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Career Connect Website",
      description:
        "Recruiters can easily post, edit, and manage job openings, ensuring that positions are always up-to-date. Developers can browse through a curated list of job opportunities to find the perfect fit for their next career move.",
      images: [exampleImage, exampleImage2, exampleImage3],
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "Recruiters can easily post, edit, and manage job openings, ensuring that positions are always up-to-date. Developers can browse through a curated list of job opportunities to find the perfect fit for their next career move.",
      images: [amazonClone1, amazonClone2, amazonClone3],
    },
    {
      id: 3,
      title: "Calculator App",
      description:
        "Recruiters can easily post, edit, and manage job openings, ensuring that positions are always up-to-date. Developers can browse through a curated list of job opportunities to find the perfect fit for their next career move.",
      images: [calculator1, calculator2],
      imageClass: "w-1/4 h-1/4",
    },
  ];

  return (
    <section className="bg-gray-900 text-white min-h-full">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <p className="text-6xl font-bold text-white">Projects</p>
        <div className="mt-8 pt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-1">
          {projectData.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              imageClass={project.imageClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
