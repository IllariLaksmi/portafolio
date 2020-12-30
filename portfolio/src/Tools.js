import React from "react";
import './App.css';
function Tools(props) {
    return (
        <div>
        <h2>{props.title}</h2>
        <div className="ToolsStyle">
            <p>{props.hability}</p>
        </div>
        </div>
    );
  }
export default Tools;