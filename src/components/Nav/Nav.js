import React from "react";
//import NavMessage from "../NavMessage";
import "./Nav.css";


const Nav = props => (
  <nav className="navbar navbar-dark bg-primary">
  <a herf ="/">Clicky Game </a>
   {/* < NavMessage score={props.score} topScore ={props.topScore} />*/}
  <h2>Score: {props.score} | Top Score:{props.topScore} </h2>
  </nav>
);

export default Nav;
