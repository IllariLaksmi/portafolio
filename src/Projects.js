import React from "react";
import './App.css';
function Projects(props) {
    return (
        <div className="Projects">
          <a href={props.link}>
        <img alt="story" src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        </a>
        </div>
    );
  }
export default Projects;