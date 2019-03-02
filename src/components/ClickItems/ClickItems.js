import React from "react";
import "./ClickItems";

const ClickItems = props => (
  <div
   role = "img"
   aria-label = "Click Items"
   onClick = {()=> props.handleClick(props.id)}
   style = {{backgroundImage:`url(${props.image})`}}
   className = {`click-item${props.shake ? " shake":""}`}
   />

);

export default ClickItems;