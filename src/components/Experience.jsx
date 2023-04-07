import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../Utils/mootion";
import { experiences } from "../constants";

const ExperienceCard = ({ experiences }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#ffffff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experiences.data}
      iconStyle={{ background: experiences.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experiences.icon}
            alt={experiences}
            className="w-[60%] h-[60%]
          object-contain
          "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-wihte text-[24px] font-bold">
          {experiences.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experiences.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Experience</p>
        <h2 className={styles.sectionHeadText}>Lorem, ipsum dolor.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
