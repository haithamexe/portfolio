import { Outlet, Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Square, Leaf } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";
import { useState, useRef, useEffect } from "react";
import "../styles/main.css";
import Effect from "./Effect";

function Layout() {
  const { theme, toggleTheme, effect, toggleEffect } = useThemeContext();
  const navigate = useNavigate();
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const activeLink = navRef.current?.querySelector(
        `[data-nav="${navigation}"]`
      );
      updateIndicator(activeLink);
    });

    return () => {
      window.removeEventListener("resize", () => {
        const activeLink = navRef.current?.querySelector(
          `[data-nav="${navigation}"]`
        );
        updateIndicator(activeLink);
      });
    };
  }, [navigation]);

  useEffect(() => {
    const pageUrl = window.location.pathname.slice(1);
    if (pageUrl === "") {
      setNavigation("home");
    } else {
      setNavigation(pageUrl);
    }
  }, []);

  const handleNavigation = (e, path, id) => {
    e.preventDefault();
    const page = document.querySelector(".page-transition");
    if (page) {
      page.classList.add("fade-exit");
      page.classList.remove("fade-enter");
      setTimeout(() => {
        setNavigation(id);
      }, 100);

      setTimeout(() => {
        navigate(path);
      }, 400);
    }
  };

  return (
    <>
      <div className="layder-wrapper">
        <div className="layout">
          <div className="side-header themed-element">
            <div className="logo-header">
              <h1>Haitham Jalal</h1>
              <p>Developer & Designer</p>
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

              {[
                { id: "home", path: "/" },
                { id: "about", path: "/about" },
                { id: "projects", path: "/projects" },
                { id: "contact", path: "/contact" },
                { id: "resume", path: "/resume" },
              ].map(({ id, path }) => (
                <Link
                  key={id}
                  onClick={(e) => handleNavigation(e, path, id)}
                  className={`nav-link ${navigation === id ? "active" : ""}`}
                  to={path}
                  data-nav={id}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          {effect === "on" && <Effect />}
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
