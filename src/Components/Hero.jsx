import Button from "./Button";
import { Github, Linkedin, Send } from "lucide-react";
import ImageOne from "../assets/pexels-beyzaa-yurtkuran-279977530-16245252.jpg";
import ImageTwo from "../assets/pexels-divinetechygirl-1181244.jpg";
import ImageThree from "../assets/pexels-kevin-ku-92347-577585.jpg";
import ImageFour from "../assets/pexels-luis-gomes-166706-546819.jpg";
import { motion } from "motion/react";

function Hero() {

  const goToGithub = () => {
    window.open("https://github.com/jaisriv788", "_blank");
  };

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jaisrivastava788/", "_blank");
  };

  return (
    <motion.div
      className="h-[94%] parent relative overflow-hidden bg-grid-pattern"
    >
      <div className="absolute inset-0 radial-gradient bg-gradient-to-b from-[#EBEDE8] via-transparent to-[#EBEDE8] pointer-events-auto"></div>
      <div className="child flex flex-col gap-9 md:gap-10 text-center w-max relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          Step Up, Take the Challenge, <br /> and Build Your Path to Success!
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="lg:text-lg lg:block hidden"
        >
          From beginner to expert, embark on meticulously guided journeys that
          seamlessly turn challenges into remarkable <br /> achievements and
          transform raw skills into unparalleled mastery.
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="lg:text-lg lg:hidden hidden md:block"
        >
          From beginner to expert, embark on meticulously guided journeys that
          seamlessly <br /> turn challenges into remarkable achievements.
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="lg:text-lg block md:hidden"
        >
          From beginner to expert, embark on meticulously guided journeys <br />{" "}
          that seamlessly turn challenges into remarkable achievements.
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex gap-10 w-max self-center"
        >
          <Button
            action={goToGithub}
            classStyle="bg-[#004838] text-[#9fc960] hover:bg-white hover:text-[#004838] border-2 border-[#004838] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-max text-lg px-8 py-3 rounded-2xl font-semibold"
          >
            <div className="flex gap-2 items-center">
              <Github /> Github
            </div>
          </Button>
          <Button
            action={goToLinkedIn}
            classStyle="hover:bg-[#004838] hover:text-[#9fc960] bg-white text-[#004838] border-2 border-[#004838] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-max text-lg px-8 py-3 rounded-2xl font-semibold"
          >
            <div className="flex gap-2 items-center">
              <Linkedin /> Linkedin
            </div>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }}
          className={`absolute -top-18 -left-14 xl:-left-18 hidden lg:block animate-bounce`}
        >
          <Send className="absolute -bottom-4 -right-4 rotate-90"></Send>
          <img
            className="w-20 h-20 border-6 border-white rounded-full "
            src={ImageOne}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }}
          className="absolute -top-8 -right-15 xl:-right-24 animate2 hidden lg:block"
        >
          <Send className="absolute -bottom-2 -left-6 rotate-188"></Send>
          <img
            className="w-20 h-20 border-8 border-white rounded-full "
            src={ImageTwo}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }}
          className="absolute -bottom-7 right-18 animate3 hidden lg:block"
        >
          <Send className="absolute -top-6 -left-8 rotate-270"></Send>
          <img
            className="w-20 h-20 border-8 border-white rounded-full "
            src={ImageThree}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }}
          className="absolute -bottom-20 left-36 xl:left-50 animate4 hidden lg:block"
        >
          <Send className="absolute -top-2 -right-6 rotate-10"></Send>
          <img
            className="w-20 h-20 border-8 border-white rounded-full "
            src={ImageFour}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
