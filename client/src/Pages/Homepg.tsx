import { useState, useEffect } from "react";
import ReactGA from 'react-ga'
import Contact from "../Pages/Contact.tsx";
import { Gallary } from "./Gallary.tsx";
//import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import "../Components/UI/ToggleSwitch.css";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/Hero-highlight.tsx";
import Pfp from "../Components/Pfp.tsx";
import down from "../assets/downarrow.svg";
import { Sparkles } from "../Components/UI/Sparkles.tsx";
import { TextGenerateEffect } from "../Components/UI/Text-generate-effect.tsx";
import resumePdf from "../assets/resume.pdf";
import Experience from "./Experience.tsx";
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
import massMailer from "../assets/mass-mailer2.jpeg";
import feedbackform from "../assets/feedback-form1.jpeg";
import stackoverflow from "../assets/stack-overflow.jpeg";
import markdown from "../assets/markdown.png";
import todo from "../assets/todo.png";
import ams from "../assets/ams.jpeg";
import vite from "../assets/vite.svg";
import zk from "../assets/zk.png";
import uc from "../assets/uc.png";
import pp from "../assets/pp.png";
import cc from "../assets/cc.png";
import java from "../assets/java.png";
import exp from "../assets/express.svg";
import appwrite from "../assets/appwrite.svg";
import postman from "../assets/postman.svg";
import krypt from "../assets/krypt.png";
import pgsql from "../assets/pgsql.png";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../Components/UI/3D-card.tsx";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import bnb from "../assets/beatsnbytes.png";
import "../Components/UI/cards.css";

const words = `I am from Gurgaon, Haryana. Exploring and learning as a 2nd year undergrade with full of excitement and urge to move forward and conquer my field of interest.     <"Make it!"> `;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function Homepg() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  })
  
  const [textGenerated, setTextGenerated] = useState(false);
  const [bounce, setBounce] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  function handleHover(isHovering: boolean) {
    const container = document.querySelector(".animate-scrolling");
    if (isHovering) {
      container?.classList.add("paused");
    } else {
      container?.classList.remove("paused");
    }
  }

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
        setDownloaded(true);
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
          className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto lg:mt-0 mt-12"
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
          <div className="w-full flex justify-center items-center lg:mt-12 mt-20">
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
              <div className="flex w-full justify-center lg:justify-start items-center lg:items-start">
                <motion.button
                  onClick={handleDownloadResume}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                  className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 text-sm lg:text-lg font-medium text-slate-400 transition-colors mt-6 lg:ml-16 ml-0"
                >
                  {downloaded ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    "Download Resume"
                  )}
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </HeroHighlight>
      {/* <ToggleSwitch /> */}
      <div className="h-[76rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-7xl text-2xl lg:text-4xl font-bold text-white relative z-20 flex items-center justify-center pt-1">
            Tech Stacks
          </h1>
          <div className="w-[8.5rem] h-[32px] relative">
            
            <div className="absolute w-full bg-black [mask-image:radial-gradient(300px_160px_at_top,transparent_10%,white)]"></div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col z-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <div className="flex lg:flex-row flex-col justify-start items-start lg:mx-24 mx-6 absolute lg:gap-32 gap-2">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Languages
              </h1>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 gap-2 grid grid-cols-6 ">
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={py} alt="" />
                </div>
                <div className="text-white lg:text-lg text-sm">Python</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={c} alt="" />
                </div>
                <div className="text-white lg:text-lg text-sm">C</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={cpp} alt="" />
                </div>
                <div className="text-white lg:text-lg text-sm">C++</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={js} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[10px]">
                  JavaScript
                </div>
              </a>
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={ts} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[10px]">
                  TypeScript
                </div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={mysql} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[11px]">MySQL</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={java} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[11px]">Java</div>
              </a>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col z-20 mt-32 absolute"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <div className="flex lg:flex-row flex-col justify-start items-start lg:mx-24 mx-6 lg:gap-12 gap-2 lg:mt-0 mt-20">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Web Technologies
              </h1>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 gap-4 grid grid-cols-5">
              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={html} alt="" />
                </div>
                <div className="text-white">HTML</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={vcss} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[10px]">
                  Vanilla CSS
                </div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={tcss} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[8px]">
                  Tailwind CSS
                </div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={react} alt="" />
                </div>
                <div className="text-white lg:text-lg text-sm">React js</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className=" lg:w-[65px] w-[40px]" src={vite} alt="" />
                </div>
                <div className="text-white pt-3 lg:text-m text-sm">Vite</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={node} alt="" />
                </div>
                <div className="text-white lg:text-lg text-sm">Node js</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={mdb} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[9px]">Mongo DB</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={exp} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[9px]">Express JS</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="lg:w-20 w-12" src={pgsql} alt="" />
                </div>
                <div className="text-white lg:text-lg text-[9px]">PostgreSQL</div>
              </a>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col z-20 mt-[16rem] absolute"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <div className="flex lg:flex-row flex-col justify-start items-start lg:mx-24 mx-6 lg:gap-12 gap-2 lg:mt-0 mt-44">
            <div>
              <h1 className="bg-gradient-to-t from-blue-600 to-violet-600 bg-clip-text text-transparent text-[20px]">
                Tools / Platforms
              </h1>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 gap-4 grid grid-cols-5">
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

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="w-20 mb-1" src={appwrite} alt="" />
                </div> 
                <div className="text-white">Appwrite</div>
              </a>

              <a
                href=""
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <img className="w-20 mb-1" src={postman} alt="" />
                </div>
                <div className="text-white">Postman API</div>
              </a>

            </div>
          </div>
        </motion.div>
        //PROJECTS
        <motion.div
          className="z-20 mt-[25rem] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-white relative z-20 flex items-center justify-center lg:pt-1 pt-[20rem]">
            Projects
          </h1>
          <div className="w-[8.5rem] h-[32px] relative">
        
            <div className="absolute w-full bg-black [mask-image:radial-gradient(300px_160px_at_top,transparent_10%,white)]"></div>
          </div>
        </motion.div>
        <motion.div
          className="z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <div className="overflow-hidden">
            <div
              className="flex justify-center items-center gap-10 animate-scrolling overflow-x-auto relative"
              style={{ width: "max-content" }}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <CardContainer className="inter-var flex-shrink-0 ml-[18rem]">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-5 border">
                  <CardItem
                    translateZ="50"
                    className="lg:text-[14px] text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    UniClubs: Find ur type!
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[11px] w-auto mt-2 dark:text-neutral-300"
                  >
                    This platform lists all the clubs in our college, providing links so that students can easily find and choose the right club for them. This is just the initial rollout. In the future, I plan to add features like club registration, event management for each club, and more.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={uc}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://uni-clubs.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/UniClubs"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-5 border">
                  <CardItem
                    translateZ="50"
                    className="lg:text-[14px] text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    ChainCharity: Where humanity meets
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[11px] w-auto mt-2 dark:text-neutral-300"
                  >
                    Chain Charity connects NGOs with donors using the Okto SDK for secure, transparent transactions. Our platform simplifies donations, especially for NRIs, overcoming banking and legal hurdles.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={cc}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://chain-charity.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/chain-charity"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-5 border">
                  <CardItem
                    translateZ="50"
                    className="lg:text-[14px] text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    Krypt: Send Crypto across the world
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[11px] w-auto mt-2 dark:text-neutral-300"
                  >
                   This NFT marketplace ensures secure, private, and fast transactions with the best exchange rates, making it the top choice for trading crypto assets.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={krypt}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://krypto-iota.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/krypto"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-5 border">
                  <CardItem
                    translateZ="50"
                    className="lg:text-[14px] text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    Personal Portfolio
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[11px] w-auto mt-2 dark:text-neutral-300"
                  >
                    You are on it!
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={pp}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://portfolio-kavyansh.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/Portfolio"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-5 border">
                  <CardItem
                    translateZ="50"
                    className="lg:text-[14px] text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    ZkReUseIt: Revolutionizing the resale market with
                    Zero-Knowledge Proofs
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[11px] w-auto mt-2 dark:text-neutral-300"
                  >
                    ZKREuseit is a decentralized marketplace using the Reclaim
                    Protocol and Polygon zkEVM to ensure user privacy, low-cost
                    transactions, and enhanced security, eliminating
                    intermediaries for a fairer resale platform.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={zk}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/Zk-ReUseIt"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/Zk-ReUseIt"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    MassMailer: Reach Your Audience with One Click
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    Our massmailer simplifies email marketing with personalized
                    messages to multiple recipients quickly and easily. Ideal
                    for businesses, marketers, and communicators.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={massMailer}
                      // height={1000}
                      // width={1000}
                      className="cardcss lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://mass-mailer-omega.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/MassMailer"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    B&0 Feedback Form
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    This project was my internship task, involving the creation
                    of a user-friendly feedback form to gather insights on new
                    soap products before their launch.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={feedbackform}
                      // height={1000}
                      // width={1000}
                      className=" lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://feedbackbno.netlify.app"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/feedback-form"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[12px] font-bold text-neutral-600 dark:text-white"
                  >
                    StackOverflow
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    Stack Overflow-like service as my internship project using
                    the MERN stack. This platform enables users to ask
                    questions, receive answers, and engage in community-driven
                    technical discussions.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={stackoverflow}
                      // height={1000}
                      // width={1000}
                      className="lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem  object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://stackoverflow-kk.netlify.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/stackoverflow"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    Quick MarkDown Preview
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    Designed to provide real-time rendering of Markdown text
                    into HTML. Using React's built-in libraries and custom
                    JavaScript, it allows users to see formatted content
                    instantly.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={markdown}
                      // height={1000}
                      // width={1000}
                      className="lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://gdsc-task-mu.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/gdsc-task"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    ToDo Manager using Context
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    Targetting React.js and Context API, ensuring tasks are
                    securely stored in local storage. This feature allows users
                    to retain their task lists even after quitting the browser.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={todo}
                      // height={1000}
                      // width={1000}
                      className="lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://todo-omega-snowy.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/TODO"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    Airport Management System
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    The Airport Management System enhances aircraft and customer
                    management using modern technologies. It streamlines data
                    entry, validation, and updates for efficient operations,
                    surpassing traditional manual systems in meeting customer
                    needs.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={ams}
                      // height={1000}
                      // width={1000}
                      className="lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/Airport-Management-System"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/Airport-Management-System"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[32rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-[16px] font-bold text-neutral-600 dark:text-white"
                  >
                    Beats&Bytes
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-[12px] w-auto mt-2 dark:text-neutral-300"
                  >
                    it is a web app for offline music playback, storing songs
                    locally on your device. It features an intuitive interface,
                    playlist management, and supports various audio formats.
                    Built with React.js and Node.js, it ensures a seamless,
                    internet-free music experience.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={bnb}
                      // height={1000}
                      // width={1000}
                      className="lg:h-[17rem] lg:w-auto h-[17rem] w-[19rem object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://beats-n-bytes.vercel.app/"
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to="https://github.com/kavyansh18/BeatsnBytes"
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Source Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={{ duration: 1 }}
          >
            <div className="w-full flex flex-wrap justify-center gap-6 mt-8">
              <NavLink to='/projects'>
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full rounded bg-red"></span>
                <span className="fold-bold relative inline-block h-full rounded border-b-4 border-r-4 border-blue-300 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-800 hover:text-white">
                  View Projects
                </span>
              </NavLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
      //export
      <div>
        <Experience />
      </div>
      <div>
        <Gallary />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Homepg;
