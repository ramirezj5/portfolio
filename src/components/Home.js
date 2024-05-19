import React from "react";
import exampleImage from "../assets/img/bitmoji.jpeg";
import { useState, useEffect } from "react";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <section className="bg-gray-900 min-h-full flex flex-col items-center justify-center">
        <div className=" flex flex-row items-center justify-center px-64 space-x-8">
          <img
            src={exampleImage}
            alt="Example"
            className="w-72 h-96 rounded-full"
          />
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-7xl font-bold text-white pb-8">
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
        <div className="flex flex-row items-center justify-center px-64 space-x-8 bg-gray-900  rounded-lg">
          <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white md:text-4xl pb-8">
                Technical Skills
              </h2>
              <div className="flex flex-row space-x-40">
                <article className=" rounded-xl from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                  <div className="rounded-[10px] bg-white p-4  sm:p-6">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      Programming Languages
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-1 max-w-64">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        JavaScript
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        TypeScript
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        HTML
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        CSS
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Java
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Python
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        C#
                      </span>
                    </div>
                  </div>
                </article>

                <article className=" rounded-xl from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                  <div className="rounded-[10px] bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      Frameworks/Libraries
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-1 max-w-64">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Angular
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        React
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        React Native
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        .NET
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Jasmine
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Cypress
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        NgRx
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        RxJS
                      </span>
                    </div>
                  </div>
                </article>
                <article className=" rounded-xl from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                  <div className="rounded-[10px] bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      Tools
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Figma
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Jira
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Kibana
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Git
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        ServiceNow
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
