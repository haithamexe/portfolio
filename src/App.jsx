import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import React, { useEffect, lazy, Suspense, useState } from "react";
import PageTransition from "./components/PageTransition";
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Projects = lazy(() => import("./pages/Projects"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Resume = lazy(() => import("./pages/Resume"));
// const NotFound404 = lazy(() => import("./pages/NotFound404"));
// const Layout = lazy(() => import("./components/Layout"));

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";

function App() {
  useEffect(() => {
    const loadintext = document.getElementById("loading-screen-text");
    setTimeout(() => {
      loadintext.style.opacity = "0";
    }, 500);
    const preloader = document.getElementById("loading-screen");
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 300);
    }, 1100);
  }, []);

  return (
    // <Suspense
    //   fallback={
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100vh",
    //         width: "100vw",
    //         backgroundColor: "#080808",
    //       }}
    //     ></div>
    //   }
    // >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition>
              <Resume />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <Navigate to={"/"} replace />
            </PageTransition>
          }
        />
      </Route>
    </Routes>
    // </Suspense>
  );
}

export default App;
