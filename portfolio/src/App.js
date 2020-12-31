import React from "react";
import './App.css';
import Tools from './Tools.js';
import Projects from './Projects.js'
import Form from './Form.js'
import Presentation from "./Presentation";
import Navigation from './Navigation.js'
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="mainImage">
      <h1>Searching for a developer?</h1>
      <img src="https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Person searching for someone"></img>
      </div>
      <section>
        <Presentation />
      </section>
      <section>
        <h2>Tools</h2>
        <Tools title="Development" hability="JavaScript, CSS3, HTML5, React.js" />
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
