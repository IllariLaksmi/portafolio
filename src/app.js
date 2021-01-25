import React from "react";
import "./App.css";
import Tools from "./Tools.js";
import Projects from "./Projects.js";
import Form from "./Form.js";
import Navigation from "./Navigation.js";
import Illari from "./illari.jpg";
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="mainImage">
        <h1>Illari Alvarez-Gil Escobar</h1>
      </div>
      <div className="notes">
        <img src={Illari} alt="Illari"></img>
        <section className="Presentation1">
          <p>
            Hello! I am a Front-End developer graduated from Laboratoria with
            knowledge in Back-End and Data Science. Project development and
            experience in customer and commercial service. Passionate about
            challenges, music production and continuous learning <br></br>
            Nice to meet you!
          </p>
        </section>
      </div>
      <section>
        <h2>Tools</h2>
        <Tools
          title="Development"
          hability="JavaScript, CSS3, HTML5, React.js"
        />
        <Tools title="Prototype" hability="FIGMA, SAP BUILD" />
        <Tools title="Organization" hability="SCRUM, TRELLO, GitHub Projects" />
        <Tools title="Testing" hability="Jest" />
        <Tools title="Cloud" hability="Firebase" />
        <Tools title="Extra" hability="NPM, Python" />
      </section>
      <section>
        <h2>Projects</h2>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default App;
