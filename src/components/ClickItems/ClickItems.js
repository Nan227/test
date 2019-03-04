import React from "react";
import "./ClickItems";
import "./assets/images"
import "./ClickItems.css"

const ClickItems = props => (
  <Col s={12} m={4} l={3}>
  <CardPanel onClick ={()=> props.clickHandler
  (props.id)}className={"hoverable teal lighten-4 black-text center"+ (props.correct === fakse ? "shake": "")}>
  {/* <xxx ={props.icon} */}
  </CardPanel>
  </Col>
  // <div
  //  role = "img"
  //  aria-label = "Click Items"
  //  onClick = {()=> props.handleClick(props.id)}
  //  style = {{backgroundImage:`url(${props.image})`}}
  //  className = {`click-item${props.shake ? " shake":""}`}
  //  />

);

export default ClickItems;