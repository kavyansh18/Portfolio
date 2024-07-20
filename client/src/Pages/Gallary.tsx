"use client";
import { motion } from "framer-motion";
import { Grid } from "../Components/UI/Grid";
import xdevs from "../assets/gallary/100xdevs.png";
import tphteam from "../assets/gallary/tph-team.png";
import cteam from "../assets/gallary/core-team.png";
import git from "../assets/gallary/gitogether.png";
import bak from "../assets/gallary/bakbak.png";
import pres from "../assets/gallary/presentation.png";
import htb from "../assets/gallary/htb-team.png";
import hv from "../assets/gallary/hackverse.png";
import web3 from "../assets/gallary/lunch-tph.png";
import code from "../assets/gallary/code.png";
import genesis from "../assets/gallary/genesis.png";
import shar from "../assets/gallary/shardeum2.png";
import crypto from "../assets/gallary/crypto.png";
import hh from "../assets/gallary/hh.jpeg";

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

const SkeletonCS = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Coming Soon
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       Solana HH Blr
      </p>
    </div>
  );
};

const Skeleton0 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Crypto Traders Hangout
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Met some amazing crypto traders who shared valuable tips and strategies.
        Their passion and knowledge were inspiring. It was great learning from
        them with a coffee at Starbucks, Chennai
      </p>
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        100xdevs Meetup, New Delhi
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I had the chance to learn from some of the best people in tech: Striver,
        Harkirat, Mannu Paji, and Sameer. They were all amazing and shared a lot
        of great knowledge.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">The Core Team</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This group is fantastic; everyone motivates and enjoys each other's
        company. We have a lot of fun together, and you'll see us together
        often.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">The TPH Team</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        These amazing people introduced me to advanced tech, continuously
        guiding and helping me. Their mentorship has been invaluable in my
        growth and learning. They are the best seniors.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Gitogether, New Delhi
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I connected with some cool developers and industry specialists and had a
        great knowledge transfer session on Git and GitHub.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Bak Bak</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        My college friends and I are trying to come up with a project idea that
        will impress our professor and be useful for us later in getting good
        grades.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Presenting our project to professor
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        It’s impressive that our English teacher understands our course and gave
        us a project to build a website to help first-year students. Most
        colleges in India don’t teach coding to CSE undergraduates in their
        first year, which is surprising.
      </p>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">HTB Team</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Hack The Box team is fantastic—hardworking and relaxed, with a great
        attitude.
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">HackVerse' 24</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Participated in the Hackverse hackathon in Chennai, blockchain based
        hack. Had a great time learning and developing cool stuff over the two
        days.
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Farewell to TPH seniors
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We juniors organized a farewell for the TPH founding team, and we had an
        amazing time hanging out with everyone.
      </p>
    </div>
  );
};

const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        No better feeling than this
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        CODE EVERYDAY FOLKS !
      </p>
    </div>
  );
};

const SkeletonEleven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Genesis Hackathon' 24
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We TPH x SRMIST organized the "GENESIS" PAN India hackathon, which was a
        huge success for our club. We offered one of the biggest prize pools
        ever at SRM University, totaling 5 lakhs. I also helped others with what
        I could and felt great being part of the organizing team.
      </p>
    </div>
  );
};

const SkeletonTwelve = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Shardeum Meetup, Chennai
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I met some amazing people who shared their knowledge and experience with
        me. It was a great learning experience and my first step into
        blockchain.
      </p>
    </div>
  );
};

const cards = [
  {
    id: -3,
    content: <SkeletonCS />,
    className: "col-span-1",
    thumbnail: hh,
  },
  {
    id: -2,
    content: <SkeletonCS />,
    className: "col-span-1",
    thumbnail: hh,
  },

  {
    id: -1,
    content: <SkeletonCS />,
    className: "col-span-1",
    thumbnail: hh,
  },
  {
    id: 0,
    content: <Skeleton0 />,
    className: "col-span-1",
    thumbnail: crypto,
  },
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: xdevs,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: cteam,
  },

  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: tphteam,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: git,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: bak,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: pres,
  },

  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: htb,
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1",
    thumbnail: hv,
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "col-span-1",
    thumbnail: web3,
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "col-span-1",
    thumbnail: code,
  },

  {
    id: 11,
    content: <SkeletonEleven />,
    className: "col-span-1",
    thumbnail: genesis,
  },
  {
    id: 12,
    content: <SkeletonTwelve />,
    className: "col-span-1",
    thumbnail: shar,
  },
];
