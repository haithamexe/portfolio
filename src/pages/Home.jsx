import { motion } from "motion/react";
import "../styles/home.css";
function Home() {
  return (
    <motion.div
      className="home themed-element"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
    >
      <div className="home-text-wrapper">
        <h2>
          Born in 1995 in Baghdad, Iraq, I believe that websites and web designs
          should be more experimental, creative, dynamic, and engaging for
          users.
        </h2>
      </div>
    </motion.div>
  );
}

export default Home;
