import React from "react";
import './App.css';
function Tools(props) {
    return (
        <div className="Tools">
        <h3>{props.title}</h3>
        <div className="ToolsStyle">
            <p>{props.hability}</p>
        </div>
        </div>
    );
  }
export default Tools;