import "../styles/projects.css";
import { useEffect, useState } from "react";
import ProjectsPreview from "../components/ProjectsPreview";
import { createPortal } from "react-dom";
import Portal from "../components/Portal";
import { projects } from "../utils/projects";

function Projects() {
  const [transform, setTransform] = useState({});
  const [projectHover, setProjectHover] = useState("");
  const [projectClicked, setProjectClicked] = useState("");
  const [projectPreview, setProjectPreview] = useState(null);

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    const xRrotation = -6 * ((offsetY - cardRect.height / 2) / cardRect.height);
    const yRrotation = 6 * ((offsetX - cardRect.width / 2) / cardRect.width);

    setTransform((prev) => ({
      ...prev,
      [index]: {
        x: xRrotation,
        y: yRrotation,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setTransform((prev) => ({
      ...prev,
      [index]: {
        x: 0,
        y: 0,
      },
    }));
  };

  useEffect(() => {
    if (projectHover || projectClicked) {
      const id = projectHover || projectClicked;
      const project = projects.find(
        (project) => project.id.toString() === id.toString()
      );
      setProjectPreview(project);
    } else {
      setProjectPreview(null);
    }
  }, [projectHover, projectClicked]);

  useEffect(() => {
    const container = document.querySelector(".project-preview");
    const projectsContainer = document.querySelector(".projects");

    window.addEventListener("click", (e) => {
      if (e.target === projectsContainer && e.target !== container) {
        setProjectClicked("");
      }
    });

    return () => {
      window.removeEventListener("click", (e) => {
        if (e.target === projectsContainer && e.target !== container) {
          setProjectClicked("");
        }
      });
    };
  }, []);

  return (
    <Portal>
      <div className="projects">
        {projectPreview && (
          <ProjectsPreview
            projectId={projectHover}
            projectClicked={projectClicked}
            project={projectPreview}
            setProjectClicked={setProjectClicked}
          />
        )}
        <div className="projects-container themed-element">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                projectClicked !== project.id
                  ? "project-card themed-element"
                  : "project-card themed-element project-card-active"
              }
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => {
                setProjectHover("");
                handleMouseLeave(index);
              }}
              style={{
                transform: `rotateX(${transform[index]?.x}deg) rotateY(${transform[index]?.y}deg)`,
              }}
              onMouseEnter={() => setProjectHover(project.id)}
              onClick={() => setProjectClicked(project.id)}
            >
              <div className="project-body">
                <img src={project.image} alt={project.title} loading="eager" />

                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>
                    {project.title.length < 30
                      ? project.description.length > 135
                        ? project.description.slice(0, 125) + "..."
                        : project.description
                      : project.description.slice(0, 70) + "..."}
                  </p>
                </div>
              </div>
              <div className="project-footer">
                <p>Click to see details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Portal>
  );
}

export default Projects;
