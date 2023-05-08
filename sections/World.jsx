"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col  `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world{" "}
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex-full h-[550px]  "
      >
        <img src="/map.png" alt="map " className="w-ful h-full object-cover" />
        <div className="absolute  bottom-20 right-20  w-[70px] h-[70px] p-[6px] z-10 rounded-full bg-[#5d6680]  ">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full z-10 bg-[#5d6680]  ">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[70px] h-[70px] p-[6px] rounded-full z-10 bg-[#5d6680]  ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-60 left-28 w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="card-1.svg" alt="card-1" className="w-full h-full" />
        </div>
        <div className="absolute top-20 right-40 w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="card-2.svg" alt="card-1" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
