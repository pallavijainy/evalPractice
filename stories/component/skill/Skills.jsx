import React from "react";

const Skills = (props) => {
  const { skills, education, projects } = props;

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu}>{edu}</li>
        ))}
      </ul>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
