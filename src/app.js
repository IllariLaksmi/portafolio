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
        <div class="ToolsContainer">
          <h2>Tools</h2>
          <div>
          <Tools
            title="Development"
            hability1="JavaScript"
            hability2="CSS3"
            hability3="HTML5"
            hability4="React.js"
          />
          <Tools title="Back-end" hability1="Node.js"
            hability2="MySQL"hability3="Express.js"hability4="Docker"/>
          <Tools
            title="Organization"
            hability1="GitHub Projects"
            hability2="TRELLO"
          />
          </div>
          <div>
          <Tools title="Testing" hability1="Jest" hability2="Mocha" />
          <Tools title="Cloud" hability1="Firebase" hability2="AWS" />
          <Tools title="Data Science" hability1="Python" hability2="Pandas" hability3="Numpy" />
          </div>
        </div>
      </section>
      <h2>Projects</h2>
      <section className="ProjectsContainer">
        
        <Projects link="https://illarilaksmi.github.io/LIM013-fe-social-network/src/#/signIn" title="Street Food" content="" image="https://illarilaksmi.github.io/LIM013-fe-social-network/src/img/streeFoodShot5.jpg"/>
        <Projects link="https://illarilaksmi.github.io/LIM013-data-lovers/src/" title="Pokedex" content="" image="https://raw.githubusercontent.com/IllariLaksmi/LIM013-data-lovers/master/prototipos/pantalla1-desktop.png" />
        <Projects link="https://www.npmjs.com/package/illari-md-links" title="Markdown Links" content="" image="https://kirkstrobeck.github.io/whatismarkdown.com/img/markdown.png" />
        <Projects link="https://github.com/IllariLaksmi/LIM013-fe-burger-queen-api" title="Burguer Queen" content="" image="https://img.interempresas.net/fotos/1622791.jpeg"/>
      </section>
      <section className="Form">
        <Form />
      </section>
    </div>
  );
}

export default App;
