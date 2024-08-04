import massMailer from "../assets/mass-mailer2.jpeg";
import feedbackform from "../assets/feedback-form1.jpeg";
import stackoverflow from "../assets/stack-overflow.jpeg";
import markdown from "../assets/markdown.png";
import todo from "../assets/todo.png";
import ams from "../assets/ams.jpeg";
import bnb from "../assets/beatsnbytes.png";
import zk from "../assets/zk.png";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import {useEffect} from 'react'
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../Components/UI/3D-card.tsx";

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

      function handleHover(isHovering: boolean) {
        const container = document.querySelector(".animate-scrolling");
        if (isHovering) {
          container?.classList.add("paused");
        } else {
          container?.classList.remove("paused");
        }
      }
  return (
    <div>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
          <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-white relative z-20 flex items-center justify-center lg:pt-1 pt-4">
            Projects
          </h1>
          <div className="w-[8.5rem] h-[32px] relative">
            <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full lg:left-[35.6rem] left-[7.8rem] blur-sm" />
            <div className="absolute inset-x-3 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-full lg:left-[35.6rem] left-[7.8rem]" />

            <div className="absolute w-full bg-black [mask-image:radial-gradient(300px_160px_at_top,transparent_10%,white)]"></div>
          </div>
          </motion.div>
        <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-screen px-auto justify-content align-items "
              style={{ width: "max-content" }}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <CardContainer className="inter-var flex-shrink-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-5 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[27rem] w-[22rem] lg:h-auto h-[35rem] rounded-xl p-6 border">
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
            </motion.div>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="w-full flex flex-wrap justify-center gap-6 my-12">
              <a href="https://github.com/kavyansh18?tab=repositories" type="button">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full rounded bg-red"></span>
                <span className="fold-bold relative inline-block h-full rounded border-b-4 border-r-4 border-blue-300 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-800 hover:text-white">
                  More Projects
                </span>
                </a>
            </div>
            </motion.div>
         
    </div>
  )
}

export default Projects