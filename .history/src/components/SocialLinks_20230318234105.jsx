import { useState } from "react";
import { motion, useCycle } from "framer-motion";

const SocialLinks = () => {
  const [icon1Animation, cycleIcon1Animation] = useCycle(
    { y: [0, -10, 0] },
    { y: [0, 10, 0] }
  );
  const [icon2Animation, cycleIcon2Animation] = useCycle(
    { y: [0, -15, 0] },
    { y: [0, 15, 0] }
  );
  const [icon3Animation, cycleIcon3Animation] = useCycle(
    { y: [0, -20, 0] },
    { y: [0, 20, 0] }
  );
  const [icon4Animation, cycleIcon4Animation] = useCycle(
    { y: [0, -25, 0] },
    { y: [0, 25, 0] }
  );

  return (
    <div className="flex z-50 mt-4 space-x-4">
      <motion.a
        href="#"
        className="text-gray-300 hover:text-blue-500 transition duration-300"
        animate={icon1Animation}
        onTap={() => cycleIcon1Animation()}
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </motion.a>
      <motion.a
        href="#"
        className="text-gray-300 hover:text-blue-500 transition duration-300"
        animate={icon2Animation}
        onTap={() => cycleIcon2Animation()}
      >
        <i className="fab fa-facebook fa-2x"></i>
      </motion.a>
      <motion.a
        href="#"
        className="text-gray-300 hover:text-pink-500 transition duration-300"
        animate={icon3Animation}
        onTap={() => cycleIcon3Animation()}
      >
        <i className="fab fa-instagram fa-2x"></i>
      </motion.a>
      <motion.a
        href="#"
        className="text-gray-300 hover:text-black transition duration-300"
        animate={icon4Animation}
        onTap={() => cycleIcon4Animation()}
      >
        <i className="fab fa-github fa-2x"></i>
      </motion.a>
      <button>DOWNLOAD CV</button>
    </div>
  );
};

export default SocialLinks;
