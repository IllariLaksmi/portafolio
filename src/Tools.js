import React from "react";
import './App.css';
function Tools(props) {
    return (
        <div className="Tools">
        <h3>{props.title}</h3>
        <div className="ToolsStyle">
            <p>{props.hability1}</p>
            <p>{props.hability2}</p>
            <p>{props.hability3}</p>
            <p>{props.hability4}</p>
        </div>
        </div>
    );
  }
export default Tools;