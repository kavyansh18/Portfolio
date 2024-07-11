import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import "../Components/UI/ToggleSwitch.css";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/Hero-highlight.tsx";
import Pfp from '../Components/Pfp.tsx';

export function Homepg() {
  return (
    <div className=" h-[80rem]">
      <div className="z-50 ">
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
          className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto  "
        >
          <div className="flex justify-center items-center mb-4">
            <Pfp />
          </div>
          <span className="bg-gradient-to-b from-slate-200 to-slate-600 text-transparent bg-clip-text">Hi, I'am Kavyansh </span><br></br>
          <Highlight className="text-black dark:text-white mt-1">
            A FullStack Web Developer
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <ToggleSwitch />
    </div>
  );
}

export default Homepg;
