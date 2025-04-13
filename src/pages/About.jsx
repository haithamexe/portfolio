import { useThemeContext } from "../context/ThemeProvider";
import "../styles/about.css";
import AboutButtons from "../components/AboutButtons";
import { ButtonProvider } from "../context/ButtonProvider";
import { motion } from "motion/react";

function About() {
  const { theme } = useThemeContext();

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
    >
      <div className="about-card ">
        <img
          src={
            theme === "dark"
              ? "/images/photo-dark-sm.webp"
              : "/images/photo-light-sm.webp"
          }
          className="about-image themed-element"
          alt="A portrait of the author"
          loading="eager"
        />
        <p className="about-text themed-element">
          For the past decade, I honed my skills as a
          <span className="themed-element"> designer and illustrator </span> ,
          bringing ideas to life through creativity and innovation. My
          developing journey started when I graduated with
          <span className="themed-element"> high honors </span>
          in <span className="themed-element"> Software Engineering</span> from
          Uskudar University. I focus on crafting dynamic, engaging websites and
          applications that seamlessly blend functionality and aesthetics.
        </p>
      </div>
      <div className="about-buttons-sections">
        <ButtonProvider>{<AboutButtons />}</ButtonProvider>
      </div>
    </motion.div>
  );
}

export default About;
