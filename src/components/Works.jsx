import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../Utils/mootion";

const ProjectsCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full object-cover h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] mb-3">{name}</h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 to-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          adipisci ea voluptas sapiente. Corrupti optio aspernatur quod qui nisi
          quae necessitatibus dolor alias, voluptates ipsam quasi placeat
          explicabo saepe architecto. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nam voluptatibus nemo alias veritatis? Obcaecati
          maiores labore laborum mollitia! Eveniet, iste!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap  gap-7">
        {projects.map((projects, index) => (
          <ProjectsCard key={`projects-${index}`} index={index} {...projects} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
