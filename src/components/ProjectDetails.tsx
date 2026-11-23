
import { useEffect } from "react";
import "./ProjectDetails.css";

export type ProjectDetailsData = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
};

type ProjectDetailsProps = {
  project: ProjectDetailsData;
  language: "fr" | "en";
  onClose: () => void;
};

export default function ProjectDetails({
  project,
  language,
  onClose,
}: ProjectDetailsProps) {
  const isFrench = language === "fr";

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label={isFrench ? "Fermer" : "Close"}
          type="button"
        >
          ×
        </button>

        <img
          src={project.image}
          alt={project.name}
          className="project-modal-image"
        />

        <div className="project-modal-content">
          <h2>{project.name}</h2>

          <p>{project.description}</p>

          <h3>
            {isFrench ? "Fonctionnalités" : "Features"}
          </h3>

          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3>
            {isFrench ? "Technologies utilisées" : "Technologies"}
          </h3>

          <div className="project-modal-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <h3>
            {isFrench ? "État du projet" : "Project status"}
          </h3>

          <p>{project.status}</p>

          <button
            className="project-modal-button"
            onClick={onClose}
            type="button"
          >
            {isFrench ? "Retour aux projets" : "Back to projects"}
          </button>
        </div>
      </section>
    </div>
  );
}
