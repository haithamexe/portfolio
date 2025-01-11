import "../styles/projects.css";
import { useEffect, useState } from "react";
import ProjectsPreview from "../components/ProjectsPreview";

function Projects() {
  const [transform, setTransform] = useState({});
  const [projectHover, setProjectHover] = useState("");
  const [projectClicked, setProjectClicked] = useState("");
  const [projectPreview, setProjectPreview] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description 1",
      image: "https://placeholder.pics/svg/150",
      link: "github.com/ajhsd/asd",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
      image: "https://placeholder.pics/svg/700",
      link: "github.com/ajhsd/asd",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description 3",
      image: "https://placeholder.pics/svg/1920x1080",
      link: "github.com/ajhsd/asd",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description 4",
      image: "https://placeholder.pics/svg/1920x1080",
      link: "github.com/ajhsd/asd",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description 4",
      image: "https://placeholder.pics/svg/1920x1080",
      link: "github.com/ajhsd/asd",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description 4",
      image: "https://placeholder.pics/svg/1920x1080",
      link: "github.com/ajhsd/asd",
    },
  ];

  return (
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
            key={index}
            className="project-card themed-element"
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
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-footer">
              <p>Click to see more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
