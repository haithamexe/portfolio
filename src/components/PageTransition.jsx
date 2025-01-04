import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pageTransition.css";

function PageTransition({ children }) {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (page) {
      page.classList.add("fade-enter");
      page.classList.remove("fade-exit");
    }
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
}

export default PageTransition;
