import React from "react";

const Project = ({ name, description, link, imageUrl, technologies }) => {
  return (
    <div className="project">
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={name} className="project__image" />
        </a>
      )}
      <h3 className="project__name">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <p className="project__description">{description}</p>
      {technologies && (
        <div className="project__technologies">
          {technologies.map((tech) => (
            <span key={tech} className="project__technology">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
