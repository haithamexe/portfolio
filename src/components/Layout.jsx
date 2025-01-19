import { Outlet, Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Square, Leaf } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";
import { useState, useRef, useEffect } from "react";
import "../styles/main.css";
import Effect from "./effects/Effect";

function Layout() {
  const { theme, toggleTheme, effect, toggleEffect } = useThemeContext();
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

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
    if (navigation === id) return;
    const page = document.querySelector(".page-transition");
    if (page) {
      page.classList.add("fade-exit");
      page.classList.remove("fade-enter");
      setTimeout(() => {
        setNavigation(id);
      }, 700);

      setTimeout(() => {
        navigate(path);
      }, 700);
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
                {
                  id: "resume",
                  path: "https://resume-haithamexes-projects.vercel.app/",
                },
                { id: "playground", path: "/playground" },
              ].map(({ id, path }) =>
                isMobile && id === "playground" ? null : id === "resume" ? (
                  <a
                    key={id}
                    href={path}
                    className={`nav-link ${navigation === id ? "active" : ""}`}
                    data-nav={id}
                    target="_blank"
                    rel="noreferrer"
                    // onClick={(e) => handleNavigation(e, path, id)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ) : (
                  <Link
                    key={id}
                    onClick={(e) => handleNavigation(e, path, id)}
                    className={`nav-link ${navigation === id ? "active" : ""}`}
                    to={path}
                    data-nav={id}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* <Effect effect={effect} /> */}
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
            <p className="side-toggle-p">Effect</p>
          </div>
        </div>

        <div className="side-footer themed-element">&#169; Haitham Jalal</div>
      </div>
    </>
  );
}

export default Layout;
