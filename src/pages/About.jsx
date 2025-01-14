import { useThemeContext } from "../context/ThemeProvider";
import photoDarkSm from "/images/photo-dark-sm.jpg";
import photoLightSm from "/images/photo-light-sm.jpg";
import "../styles/about.css";
import AboutButtons from "../components/AboutButtons";
import { ButtonProvider } from "../context/ButtonProvider";

function About() {
  const { theme } = useThemeContext();
  return (
    <div className="about">
      <div className="about-card ">
        <img
          src={theme === "dark" ? photoDarkSm : photoLightSm}
          className="about-image themed-element"
          alt="A portrait of the author"
          loading="lazy"
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
        <ButtonProvider>
          <AboutButtons />
        </ButtonProvider>
      </div>
    </div>
  );
}

export default About;
