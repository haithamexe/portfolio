import { useEffect, useState } from "react";
import { CircleX } from "lucide-react";

function ProjectsPreview({
  projectId,
  projectClicked,
  project,
  setProjectClicked,
}) {
  return (
    <div className="project-preview-wrapper themed-element">
      <div className="project-preview themed-element">
        <CircleX
          className="project-close"
          onClick={() => setProjectClicked("")}
        />
        <img src={project?.image} alt={project?.title} loading="eager" />
        <div className="project-preview-header themed-element">
          <h2>{project?.title}</h2>
          {project?.links && (
            <>
              <div className="project-preview-links themed-element">
                {project?.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              {project?.demo && (
                <a href={project?.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </>
          )}
        </div>
        <p>{project?.description}</p>
        {project?.stack && (
          <div className="project-preview-stack themed-element"></div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPreview;
