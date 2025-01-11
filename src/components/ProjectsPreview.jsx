import { useEffect, useState } from "react";

function ProjectsPreview({
  projectId,
  projectClicked,
  project,
  setProjectClicked,
}) {
  return (
    <div className="project-preview themed-element">
      <img src={project?.image} alt={project?.title} />
      <div className="project-preview-header">
        <h2
          onClick={() => {
            setProjectClicked("");
          }}
        >
          {project?.title}
        </h2>
        {project.links && (
          <>
            <div className="project-preview-links">
              {project.links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              ))}
            </div>
            project?.demo && (
            <a href={project?.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
            )
          </>
        )}
      </div>
      <p>{project?.description}</p>
      {project?.stack && <div className="project-preview-stack"></div>}
    </div>
  );
}

export default ProjectsPreview;
