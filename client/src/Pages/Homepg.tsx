import { useState, useEffect } from 'react';
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

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows and Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function Homepg() {
  const [textGenerated, setTextGenerated] = useState(false);
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const stopBounce = () => {
      if (window.scrollY > 300) {
        setBounce(false);
        window.removeEventListener('scroll', stopBounce);
      }
    };

    window.addEventListener('scroll', stopBounce);

    const timer = setTimeout(() => {
      setBounce(false);
      window.removeEventListener('scroll', stopBounce);
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', stopBounce);
    };
  }, []);

  const handleDownloadResume = () => {
    fetch(resumePdf)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Kavyansh_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
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
              <img
                className="w-[3rem]"
                src={down}
                alt=""
              />
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
              <TextGenerateEffect words={words} onComplete={() => setTextGenerated(true)} />
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
    </div>
  );
}

export default Homepg;
