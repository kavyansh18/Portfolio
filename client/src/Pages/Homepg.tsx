import { useState, useEffect } from "react";
import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import "../Components/UI/ToggleSwitch.css";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/Hero-highlight.tsx";
import Pfp from "../Components/Pfp.tsx";
import down from "../assets/downarrow.svg";
import { Sparkles } from "../Components/UI/Sparkles.tsx";
import { TextGenerateEffect } from "../Components/UI/Text-generate-effect.tsx";
import resumePdf from "../assets/resume.pdf";
import js from "../assets/js.svg";
import py from "../assets/python.svg";
import c from "../assets/c.svg";
import cpp from "../assets/cpp.svg";
import html from "../assets/html.svg";
import vcss from "../assets/vcss.svg";
import tcss from "../assets/tcss.svg";
import ts from "../assets/ts.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import mysql from "../assets/mysql.svg";
import mdb from "../assets/mongodb.svg";
import github from "../assets/github.svg";
import git from "../assets/git.svg";
import canva from "../assets/canva.svg";
import wp from "../assets/wordpress.svg";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows and Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function Homepg() {
  const [textGenerated, setTextGenerated] = useState(false);
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const stopBounce = () => {
      if (window.scrollY > 300) {
        setBounce(false);
        window.removeEventListener("scroll", stopBounce);
      }
    };

    window.addEventListener("scroll", stopBounce);

    const timer = setTimeout(() => {
      setBounce(false);
      window.removeEventListener("scroll", stopBounce);
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", stopBounce);
    };
  }, []);

  const handleDownloadResume = () => {
    fetch(resumePdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Kavyansh_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading resume:", error);
      });
  };

  return (
    <div>
      <div className="z-50">
        <Navbaar />
      </div>

      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <div className="flex justify-center items-center mb-4">
            <Pfp />
          </div>
          <span className="bg-gradient-to-b from-slate-200 to-slate-600 text-transparent bg-clip-text">
            Hi, I'm Kavyansh{" "}
          </span>
          <br></br>
          <Highlight className="text-black dark:text-white mt-1">
            A FullStack Web Developer
          </Highlight>
          <div className="w-full flex justify-center items-center mt-12">
            {bounce ? (
              <motion.img
                className="w-[3rem] transition-all duration-200 ease-in-out"
                src={down}
                alt=""
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  repeatType: "loop",
                  repeatDelay: 0.1,
                }}
              />
            ) : (
              <img className="w-[3rem]" src={down} alt="" />
            )}
          </div>
        </motion.h1>

        <div className="lg:flex lg:items-baseline lg:gap-10">
          <div>
            <h1 className="md:text-7xl text-lg lg:text-4xl font-bold text-white relative z-20 lg:ml-28 mt-20 ml-[9.3rem]">
              About me
            </h1>
            <div className="w-[8.5rem] h-[32px] relative ml-32">
              <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-3 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4" />
              <Sparkles
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div>
            <div className="lg:w-[49rem] lg:ml-[4rem] lg:px-0 px-[2rem]">
              <TextGenerateEffect
                words={words}
                onComplete={() => setTextGenerated(true)}
              />
            </div>
            {textGenerated && (
              <motion.button
                onClick={handleDownloadResume}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors lg:ml-[4rem] mt-6"
              >
                Download Resume
              </motion.button>
            )}
          </div>
        </div>
      </HeroHighlight>

      <ToggleSwitch />

      <div className="h-[33rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div>
          <h1 className="md:text-7xl text-lg lg:text-4xl font-bold text-white relative z-20  flex items-center justify-center pt-1">
            Tech Stacks
          </h1>
          <div className="w-[8.5rem] h-[32px] relative">
            <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full left-[35rem] blur-sm" />
            <div className="absolute inset-x-3 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-full left-[35rem] " />

            <div className="absolute w-full bg-black [mask-image:radial-gradient(300px_160px_at_top,transparent_10%,white)] "></div>
          </div>
        </div>

        <div className="flex flex-col z-50">

          <div className=" flex justify-start items-start mx-24 absolute gap-32">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Languages
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={py} alt="" />
                </div>
                <div className="text-white">Python</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={c} alt="" />
                </div>
                <div className="text-white">C</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={cpp} alt="" />
                </div>
                <div className="text-white">C++</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={js} alt="" />
                </div>
                <div className="text-white">JavaScript</div>
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={ts} alt="" />
                </div>
                <div className="text-white">TypeScript</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={mysql} alt="" />
                </div>
                <div className="text-white">MySQL</div>
              </a>

            </div>
          </div>

          <div className=" flex justify-start items-start mx-24 absolute gap-12 mt-32">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Web Technologies
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 ml-[15px]">
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={html} alt="" />
                </div>
                <div className="text-white">HTML</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={vcss} alt="" />
                </div>
                <div className="text-white">Vanilla CSS</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={tcss} alt="" />
                </div>
                <div className="text-white">Tailwind CSS</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={react} alt="" />
                </div>
                <div className="text-white">React js</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={node} alt="" />
                </div>
                <div className="text-white">Node js</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={mdb} alt="" />
                </div>
                <div className="text-white">Mongo DB</div>
              </a>
            </div>
          </div>

          <div className=" flex justify-start items-start mx-24 absolute gap-16 mt-[16rem]">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Tools / Platforms
              </h1>
            </div>
            <div className="flex justify-center items-center gap-5 ml-3">
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={git} alt="" />
                </div>
                <div className="text-white">Git</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={github} alt="" />
                </div>
                <div className="text-white">Github</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={canva} alt="" />
                </div>
                <div className="text-white">Canva</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img src={wp} alt="" />
                </div>
                <div className="text-white">WordPress</div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepg;
