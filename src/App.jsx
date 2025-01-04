import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import NotFound404 from "./pages/NotFound404";
// import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound404 = lazy(() => import("./pages/NotFound404"));
const Layout = lazy(() => import("./components/Layout"));

const isMobile = window.innerWidth < 900;

function App() {
  useEffect(() => {
    const loadintext = document.getElementById("loading-screen-text");
    setTimeout(() => {
      loadintext.style.opacity = "0";
    }, 200);

    const preloader = document.getElementById("loading-screen");
    setTimeout(() => {
      preloader.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
      preloader.style.pointerEvents = "none";
      preloader.style.display = "none";
    }, 1400);
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#080808",
          }}
        ></div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
