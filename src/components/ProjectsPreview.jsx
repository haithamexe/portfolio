import { useEffect, useState } from "react";
import { CircleX, SquareArrowOutUpRight } from "lucide-react";

function ProjectsPreview({
  projectId,
  projectClicked,
  project,
  setProjectClicked,
}) {
  return (
    <div className="project-preview-wrapper themed-element">
      <div className="project-preview ">
        <CircleX
          className="project-close"
          onClick={() => setProjectClicked("")}
        />
        <img src={project?.image} alt={project?.title} loading="eager" />
        <div className="project-preview-header themed-element">
          <h2 className="project-preview-title themed-element">
            {project?.title}
          </h2>
          <div className="project-preview-links-wrapper themed-element">
            {project?.links && (
              <>
                <div className="project-preview-links themed-element">
                  {project?.demo && (
                    <a
                      href={project?.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="themed-element"
                    >
                      Live website
                      <SquareArrowOutUpRight className="project-preview-link-icon themed-element" />
                    </a>
                  )}
                  {project?.links.map((link, index) => (
                    <a
                      key={index}
                      href={link?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="themed-element"
                    >
                      {link?.type}
                      <SquareArrowOutUpRight className="project-preview-link-icon themed-element" />
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <p className="project-preview-description themed-element">
          {project?.description}
        </p>

        {project?.features && (
          <>
            <h3>Features:</h3>

            <div className="project-preview-features themed-element">
              <ul className="themed-element">
                {project?.features.map((feature, index) => (
                  <li className="themed-element" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {project?.stack && (
          <div className="project-preview-stack themed-element">
            {project?.stack?.frontend && (
              <div className="project-stack-frontend themed-element">
                <ul className="themed-element">
                  <h3>Frontend:</h3>
                  {project?.stack?.frontend?.map((tech, index) => (
                    <li className="themed-element" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project?.stack?.backend && (
              <div className="project-stack-backend themed-element">
                <ul className="themed-element">
                  <h3>Backend:</h3>
                  {project?.stack?.backend?.map((tech, index) => (
                    <li className="themed-element" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPreview;
