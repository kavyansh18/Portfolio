import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import '../Components/UI/ToggleSwitch.css'
"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/Hero-highlight.tsx";
import pp from "../assets/profilepic.jpg"

export function Homepg() {
  return (
    <div className="relative h-screen">
      <Navbaar />
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
        className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto pb-[110px] "
      >
        <div className="flex justify-center items-center mb-2"><img className="w-[170px] rounded-full" src={pp} alt="" /></div>
        Hi, I'am Kavyansh <br></br>
        <Highlight className="text-black dark:text-white">
          A FullStack Web Developer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
      <ToggleSwitch />
    </div>
  );
}

export default Homepg;
