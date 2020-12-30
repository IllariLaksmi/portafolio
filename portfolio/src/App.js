import React from "react";
import './App.css';
import Tools from './Tools.js';
function App() {
  return (
    <div className="app">
      <h1>Searching for a developer?</h1>
      <Tools title="Development" hability="JavaScript, CSS3, HTML5, React.js" />
      <Tools title="Prototype" hability="FIGMA, SAP BUILD" />
      <Tools title="Organization" hability="SCRUM, TRELLO, GitHub Projects" />
      <Tools title="Testing" hability="Jest" />
      <Tools title="Cloud" hability="Firebase" />
      <Tools title="Extra" hability="NPM, Python" />

    </div>
  );
}

export default App;
