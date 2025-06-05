import { motion } from "motion/react";

function Button({ children, action, classStyle }) {
  return (
    <motion.button
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: .1 }}
      onHoverStart={() => console.log("hover started!")}
      className={classStyle}
      onClick={action}
    >
      {children}
    </motion.button>
  );
}

export default Button;
