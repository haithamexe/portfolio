import { Outlet, Link } from "react-router-dom";
import { Moon, Sun, Square } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";
import { useState, useRef, useEffect } from "react";
import "../styles/main.css";

function Layout() {
  const { theme, toggleTheme, effect, toggleEffect } = useThemeContext();

  const [navigation, setNavigation] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const updateIndicator = (e) => {
    if (!e) return;
    const rect = e.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    setIndicatorStyle({
      top: `${rect.top - navRect.top}px`,
      height: `${rect.height}px`,
    });
  };

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `[data-nav="${navigation}"]`
    );
    updateIndicator(activeLink);
  }, [navigation]);

  return (
    <>
      <div className="layder-wrapper">
        <div className="layout">
          <div className="side-header themed-element">
            <div className="logo">
              <h1>Haitham Jalal</h1>
              <p>Developer</p>
            </div>
            <div className="nav" ref={navRef}>
              <div className="nav-indicator" style={indicatorStyle}>
                <Square
                  size={"18px"}
                  className="indicator-icon themed-element"
                  strokeWidth={1.5}
                  scale={2}
                />
              </div>

              <Link
                onClick={() => {
                  setNavigation("home");
                }}
                className="nav-link"
                to="/"
                data-nav="home"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setNavigation("about");
                }}
                className="nav-link"
                to="/about"
                data-nav="about"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  setNavigation("projects");
                }}
                className="nav-link"
                to="/projects"
                data-nav="projects"
              >
                Projects
              </Link>
              <Link
                onClick={() => {
                  setNavigation("contact");
                }}
                data-nav="contact"
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                onClick={() => {
                  setNavigation("resume");
                }}
                data-nav="resume"
                className="nav-link"
                to="/resume"
              >
                Resume
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="side-toggles themed-element">
          <div className="side-toggle">
            {theme === "light" ? (
              <Moon
                size={"20px"}
                onClick={toggleTheme}
                className="theme-toggle-button"
              />
            ) : (
              <Sun
                size={"20px"}
                onClick={toggleTheme}
                className="theme-toggle-button"
              />
            )}
          </div>
          <div
            onClick={toggleEffect}
            className="side-toggle side-toggle-effect"
          >
            <Square
              size={"18px"}
              className="effect-toggle-button themed-element"
              strokeWidth={1.5}
              scale={2}
              style={{
                background: effect === "off" && "none",
              }}
            />
            <p>Effect</p>
          </div>
        </div>

        <div className="side-footer themed-element">&#169; Haitham Jalal</div>
      </div>
    </>
  );
}

export default Layout;
