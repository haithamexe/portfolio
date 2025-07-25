import { Outlet, Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Square, Leaf } from "lucide-react";
import { useThemeContext } from "../context/ThemeProvider";
import { useState, useRef, useEffect } from "react";
import "../styles/main.css";
// import fitty from "fitty";
import Effect from "./effects/Effect";
import Portal from "./Portal";

function Layout() {
  const { theme, toggleTheme, effect, toggleEffect } = useThemeContext();
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const letters = "ABCDEFGHIJKRSTUVWXYZabcdefghistuvwxyz012389!@#$%*-+";

  const textEffect = (e) => {
    let iteration = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.getAttribute("data-text")[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration > 9) {
        clearInterval(interval);
        e.target.innerText = e.target.getAttribute("data-text");
      }

      iteration += 1 / 3;
    }, 30);
  };

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
    console.log(activeLink);
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

  // useEffect(() => {
  //   const navLinks = [
  //     "home",
  //     "about",
  //     "projects",
  //     "contact",
  //     "resume",
  //     "playground",
  //   ];
  //   navLinks.forEach((link) => {
  //     const element = document.getElementById(link);
  //     if (!element) return;
  //     element.style.setProperty("transform", "scaleX(1.5)");
  //   });
  // }, []);

  const handleNavigation = (e, path, id) => {
    e.preventDefault();
    if (navigation === id) return;
    setNavigation(id);
    navigate(path);
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
                {
                  id: "resume",
                  path: "https://resume-haithamexes-projects.vercel.app/",
                },
                { id: "contact", path: "/contact" },
                { id: "projects", path: "/projects" },
                {
                  id: "playground",
                  path: "/playground",
                },
              ].map(({ id, path }) =>
                isMobile && id === "playground" ? null : id === "resume" ? (
                  <a
                    key={id}
                    href={path}
                    className={`nav-link ${navigation === id ? "active" : ""}`}
                    data-nav={id.toLowerCase()}
                    target="_blank"
                    rel="noreferrer"
                    data-text={id.toUpperCase()}
                    onMouseEnter={textEffect}
                    id={id.toLowerCase()}
                    // onClick={(e) => handleNavigation(e, path, id)}
                  >
                    {/* {id.charAt(0).toUpperCase() + id.slice(1)} */}
                    {id.toUpperCase()}
                  </a>
                ) : (
                  <Link
                    key={id}
                    onClick={(e) => handleNavigation(e, path, id.toLowerCase())}
                    className={`nav-link ${navigation === id ? "active" : ""}`}
                    to={path}
                    data-nav={id.toLowerCase()}
                    data-text={id.toUpperCase()}
                    onMouseEnter={textEffect}
                    id={id.toLowerCase()}
                  >
                    {/* {id.charAt(0).toUpperCase() + id.slice(1)} */}
                    {id.toUpperCase()}
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
          {/* <div
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

            ///
          </div> */}
        </div>

        <div className="side-footer themed-element">&#169; Haitham Jalal</div>
      </div>
    </>
  );
}

export default Layout;
