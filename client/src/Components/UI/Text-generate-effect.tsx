"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../Utils/cn.ts";
import '../../index.css';

export const TextGenerateEffect = ({
  words,
  className,
  onComplete, // add onComplete prop here
}: {
  words: string;
  className?: string;
  onComplete?: () => void; // define onComplete prop type
}) => {
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const sequence = async () => {
      await controls.start(i => ({
        opacity: 1,
        transition: {
          delay: i * 0.1,
        },
      }));

      if (onComplete) {
        onComplete();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sequence();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [controls, onComplete]);

  const renderWords = () => {
    return (
      <div ref={elementRef}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="textHover dark:text-white text-black opacity-0"
            custom={idx}
            animate={controls}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="lg:text-2xl text-[12px] leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
