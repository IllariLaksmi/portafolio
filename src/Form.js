import React from "react";
import './App.css';
function Form() {
    return (
        <div className="Form">
            <form action="">
                <h2>Wanna know more?</h2> <br></br>
                <label for="name">Name</label> <br></br>
                <input className="FormInput" type="text" id="name" name="name"></input> <br></br>
                <label for="message">Message</label> <br></br>
                <textarea className="FormInput" name="message" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
    );
  }
export default Form;