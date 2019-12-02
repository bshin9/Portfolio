import React from "react";
import "./Projects.css";
import Layers from '../Project_layers/Layers';


const projects = () => {
  return (
    <div className="projects">
      <h1 className="projectHeader">List of Projects & Body of Work</h1>
      <p className="projectTxt">
        These are some of the projects I've been working on throughout my time
        at Road to Hire and it's been a surreal experience being able to learn new
        languages and then implementing them in a real way.
      </p>
      <Layers /> 
    </div>
  );
};

export default projects;
