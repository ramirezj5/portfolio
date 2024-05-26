import React from "react";
import exampleImage from "../assets/img/bitmoji.jpeg";
import { useState, useEffect } from "react";
import SkillsBox from "./SkillsBox";

const Home = () => {
  const [text, setText] = useState("");

  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "C#",
  ];
  const frameworksLibraries = [
    "Angular",
    "React",
    "React Native",
    ".NET",
    "Jasmine",
    "Cypress",
    "NgRx",
    "RxJS",
  ];
  const tools = ["Figma", "Jira", "Kibana", "Git", "ServiceNow"];

  useEffect(() => {
    const targetText = "Software Engineer";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setText(targetText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <section className="bg-gray-900 min-h-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:px-64 px-4 space-y-8 md:space-y-0 md:space-x-8">
          <img
            src={exampleImage}
            alt="Example"
            className="w-48 h-64 md:w-72 md:h-96 rounded-full"
          />
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-white pb-8">
                {`Hi! I'm Jasmin`}{" "}
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="mt-4 sm:text-xl text-gray-300">
                I am a passionate software engineer from New York. I specialize
                in full-stack development, with a focus on creating
                user-friendly web applications. I am passionate about exploring
                new technologies through side projects, constantly enhancing my
                skill set. I enjoy playing volleyball, going to the gym, and
                reading in my free time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:px-64 px-4 space-y-8 md:space-y-0 md:space-x-8 bg-gray-900 rounded-lg">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-white pb-8">
                Technical Skills
              </h2>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <SkillsBox
                  title="Programming Languages"
                  skills={programmingLanguages}
                ></SkillsBox>

                <SkillsBox
                  title="Frameworks/Libraries"
                  skills={frameworksLibraries}
                ></SkillsBox>

                <SkillsBox title="Tools" skills={tools}></SkillsBox>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
