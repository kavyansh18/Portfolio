import bmc from "../assets/bmc.png";
import ig from "../assets/ig.svg";
import github from "../assets/github 2.svg";
import twitter from "../assets/twitter.svg";
import ldn from "../assets/ldn.svg";
import email from "../assets/email.svg";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

const Contact = () => {
  return (
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
    <div className=" mt-16 h-[18rem] backdrop-blur-sm p-10 flex justify-center items-center gap-28">
      <div>
        <div className="ml-3 text-m md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">Let's Connect</div>
        <div className="text-cyan-200 ml-3">
          Let's start with Virat's cover drive and transition to our tech
          insights.
        </div>
        <div className="flex items-center gap-4">
          <a
            className="lg:w-12 w-12 mt-3"
            href="https://instagram.com/kavyansh.in"
            target="_blank"
          >
            <img src={ig} alt="" />
          </a>

          <a
            className="lg:w-24 w-20 mt-3"
            href="https://buymeacoffee.com/kavyansh"
            target="_blank"
          >
            <img src={bmc} alt="" />
          </a>

          <a
            className="lg:w-7 w-7 mt-3"
            href="https://github.com/kavyansh18"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>

          <a
            className="lg:w-7 w-7 mt-3"
            href="https://x.com/the_kavyansh"
            target="_blank"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5">
      <div className="w-40 h-40 flex items-center justify-center bg-black border border-t-4 border-t-blue-600 border-b-gray-800 border-r-gray-800 border-l-gray-800 shadow-sm rounded-xl">
  <div className="p-4 text-center">
    <img className="w-10 mx-auto" src={ldn} alt="" />
    <a
      className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
      href="https://www.linkedin.com/in/kavyansh-kumar/"
    >
      Connect
    </a>
  </div>
</div>


        <div className="w-40 h-40 flex items-center justify-center bg-black border border-t-4 border-t-blue-600 shadow-sm rounded-xl border-b-gray-800 border-r-gray-800 border-l-gray-800">
          <div className="p-4 md:p-5 text-center">
            <img className="w-14 mx-auto" src={email} alt="" />
            <a
              className="mt-3 inline-flex items-center gap-x-1 text-[10px] font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
              href="mailto:kavyansh2027@gmail.com"
            >
              kavyansh2027@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;
