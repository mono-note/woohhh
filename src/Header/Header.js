import React, { Component } from "react";
import "./style.css"
import CastlePhoto from "../img/castle.png"
import Background from "../img/top_bg.jpg"
class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
    };    
  }
  render() {
    return (
      <div className="header" style={{backgroundImage: `url(${Background})`}}>
        <div className="header-in">
          <div className="container">
            <img src={CastlePhoto} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
export default Headers