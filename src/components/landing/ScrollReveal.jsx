import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  const d = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: d.y, x: d.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
