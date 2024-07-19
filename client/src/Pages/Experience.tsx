import { BackgroundBeams } from "../Components/UI/Background-beams.tsx";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import bno from "../assets/bno.png"; 
import nc from "../assets/nc.png"; 
import tph from "../assets/tph.png"; 
import htb from "../assets/htb.png"; 
import { motion } from "framer-motion";


interface CustomTimelineDotProps {
  icon: string;
}

const CustomTimelineDot: React.FC<CustomTimelineDotProps> = ({ icon }) => (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #7c3aed, #4f46e5)",
    }}
  >
    <img
      src={icon}
      alt="Custom Dot Icon"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <div className="h-[55rem] w-full rounded-md bg-neutral-950 relative flex flex-col antialiased">
      <div className="max-w-2xl mx-auto p-4">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mt-14">
          Experience
        </h1>
        </motion.div>
      </div>
      <div>
        <Timeline position="alternate">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.3rem",
              }}
              align="right"
              variant="body2"
            >
              Busy&Organised(B&O)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ minHeight: "4rem" }} />
              <CustomTimelineDot icon={bno} />
              <TimelineConnector sx={{ minHeight: "4rem" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#008DDA", fontSize: "1.6rem" }}
              >
                Web Developer Intern
              </Typography>
              <Typography sx={{ color: "#41C9E2", fontSize: "1rem" }}>
                1st February'24 - 31st February'24
              </Typography>
              <Typography sx={{ color: "#DFF5FF", fontSize: "0.9rem" }}>
                Because you need a start
              </Typography>
            </TimelineContent>
          </TimelineItem>
          </motion.div>

          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.2rem",
              }}
              align="right"
              variant="body2"
            >
              NullClass
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ minHeight: "4rem" }} />
              <CustomTimelineDot icon={nc} />
              <TimelineConnector sx={{ minHeight: "4rem" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#008DDA", fontSize: "1.6rem" }}
              >
                Web Developer Intern
              </Typography>
              <Typography sx={{ color: "#41C9E2", fontSize: "1rem" }}>
                10th June'24 - 9th June'24
              </Typography>
              <Typography sx={{ color: "#DFF5FF", fontSize: "0.9rem" }}>
                Because it's awesome!
              </Typography>
            </TimelineContent>
          </TimelineItem>
          </motion.div>

          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.2rem",
              }}
              align="right"
              variant="body2"
            >
              The Product House (TPHxSRMIST)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ minHeight: "4rem" }} />
              <CustomTimelineDot icon={tph} />
              <TimelineConnector sx={{ minHeight: "4rem" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#008DDA", fontSize: "1.6rem" }}
              >
                Technical Team Member
              </Typography>
              <Typography sx={{ color: "#41C9E2", fontSize: "1rem" }}>
                December'24 - present
              </Typography>
              <Typography sx={{ color: "#DFF5FF", fontSize: "0.9rem" }}>
                Because you need guidance
              </Typography>
            </TimelineContent>
          </TimelineItem>
          </motion.div>

          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.2rem",
              }}
              align="right"
              variant="body2"
            >
              HacktheBox
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ minHeight: "4rem" }} />
              <CustomTimelineDot icon={htb} />
              <TimelineConnector sx={{ minHeight: "4rem" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#008DDA", fontSize: "1.6rem" }}
              >
                Technical Team Member
              </Typography>
              <Typography sx={{ color: "#008DDA", fontSize: "1rem" }}>
                March'24 - present
              </Typography>
              <Typography sx={{ color: "#DFF5FF", fontSize: "0.9rem" }}>
                Because you need to contribute
              </Typography>
            </TimelineContent>
          </TimelineItem>
          </motion.div>
        </Timeline>
        {/* <Contact /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Experience;
