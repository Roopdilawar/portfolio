import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Core Tools</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies Used</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 text-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className='mt-2 text-white-100 text-[14px] pl-1 tracking-wider'>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
