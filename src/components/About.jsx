import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../Utils/mootion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introdoction</p>
        <h2 className={styles.sectionHeadText}>Overaiew</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        quibusdam unde sequi quos eius minima nostrum, neque quidem tempora
        excepturi et nemo doloribus reiciendis, at in beatae eos voluptatem
        velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ea
        aliquid accusantium ab soluta ipsum doloribus odio earum eligendi atque
        iure! Sit mollitia repellendus odio? Quia minus est amet quaerat! velit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ea
        aliquid accusantium ab soluta ipsum doloribus odio earum eligendi atque
        iure! Sit mollitia repellendus odio? Quia minus est amet quaerat!
      </motion.p>

      <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((element, index) => (
          <ServiceCard key={element.title} index={index} {...element} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
