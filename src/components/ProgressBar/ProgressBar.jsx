import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const ProgressBar = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  // Cleanup za scrollYProgress
  useEffect(() => {
    return () => scrollYProgress.clearListeners?.();
  }, [scrollYProgress]);

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className="progress-container"
      style={{ opacity }}
      initial={{ opacity: 0 }}
    >
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          borderBottomColor: "rgb(0, 217, 255)"
        }}
      />
    </motion.div>
  );
};

export default ProgressBar;

// import { motion, useScroll, useTransform } from "framer-motion";

// const ProgressBar = ({ containerRef }) => {
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//     layoutEffect: false
//   });

//   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

//   return (
//     <motion.div className="progress-container" style={{ opacity }}>
//       <motion.div
//         className="progress-bar"
//         style={{
//           scaleX,
//           borderBottomColor: "rgb(0, 217, 255)"
//         }}
//       />
//     </motion.div>
//   );
// };

// export default ProgressBar;
