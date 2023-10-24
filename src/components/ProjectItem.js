import React from "react";

function ProjectItem({ name, about, technologies }) {
  const eachtechno = technologies.map((techno) => <span key={techno}>{techno}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {eachtechno}
      </div>
    </div>
  );
}

export default ProjectItem;
