"use client";
import { motion } from "framer-motion";
import { Grid } from "../Components/UI/Grid";
import xdevs from '../assets/gallary/100xdevs.png'
import tphteam from '../assets/gallary/tph-team.png'
import cteam from '../assets/gallary/core-team.png'
import git from '../assets/gallary/gitogether.png'
import bak from '../assets/gallary/bakbak.png'
import pres from '../assets/gallary/presentation.png'
import htb from '../assets/gallary/htb-team.png'
import hv from '../assets/gallary/hackverse.png'
import web3 from '../assets/gallary/lunch-tph.png'
import code from '../assets/gallary/code.png'
import genesis from '../assets/gallary/genesis.png'
import shar from '../assets/gallary/shardeum2.png'
import crypto from '../assets/gallary/crypto.png'
import hh from '../assets/gallary/hh.jpeg'

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

export function Gallary() {
  return (
    <div className="h-[45rem] w-full bg-zinc-950">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
      <Grid cards={cards} />
      </motion.div>
    </div>
  );
}


const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};


const cards = [
    {
        id: -3,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: hh,
      },
      {
        id: -2,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: hh,
      },
    
      {
        id: -1,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: hh,
      },
      {
        id: 0,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: crypto,
      },
  {
    id: 1,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: xdevs,
  },
  {
    id: 2,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: cteam,
  },

  {
    id: 3,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: tphteam,
  },
  {
    id: 4,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: git,
  },
  {
    id: 5,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: bak,
  },
  {
    id: 6,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: pres,
  },

  {
    id: 7,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: htb,
  },
  {
    id: 8,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: hv,
  },
  {
    id: 9,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: web3,
  },
  {
    id: 10,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: code,
  },

  {
    id: 11,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: genesis,
  },
  {
    id: 12,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: shar,
  },
];
