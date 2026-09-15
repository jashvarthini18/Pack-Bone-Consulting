import { motion } from "framer-motion";

function AnimatedNumber({ number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.span>
  );
}

export default AnimatedNumber;