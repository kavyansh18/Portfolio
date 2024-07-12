import ToggleSwitch from "../Components/ToggleSwitch";
import Navbaar from "../Components/Navbaar.tsx";
import "../Components/UI/ToggleSwitch.css";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/Hero-highlight.tsx";
import Pfp from "../Components/Pfp.tsx";
import down from "../assets/downarrow.svg";
import { Sparkles } from "../Components/UI/Sparkles.tsx";
import { TextGenerateEffect } from "../Components/UI/Text-generate-effect.tsx";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows and Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function Homepg() {
  return (
    <div>
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
          <span className="bg-gradient-to-b from-slate-200 to-slate-600 text-transparent bg-clip-text">
            Hi, I'am Kavyansh{" "}
          </span>
          <br></br>
          <Highlight className="text-black dark:text-white mt-1">
            A FullStack Web Developer
          </Highlight>
          <div className="w-full flex justify-center items-center mt-12 ">
            <img
              className="w-[3rem] transition-all duration-200 ease-in-out hover:animate-bounce"
              src={down}
              alt=""
            />
          </div>
        </motion.h1>

        <div className="flex items-baseline gap-10">
          <div>
            <h1 className="md:text-7xl text-lg lg:text-4xl font-bold text-white relative z-20 ml-28 mt-20">
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

          <div className="w-[49rem] ml-[4rem]">
            {" "}
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </HeroHighlight>
      <ToggleSwitch />
    </div>
  );
}

export default Homepg;
