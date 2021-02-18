import React, { Component } from "react";
import "./thumbanil.css";
import logo from "./../../media/logo.png";

export default class Thumbnail extends Component {
  render() {
    return (
      <div>
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="item">
              <a href="#associazione">Associazione</a>
            </div>
            <div className="item">
              <a href="#branche">Branche</a>
            </div>
            <div className="item">
              <a href="#contatti">Contatti</a>
            </div>
            <div className="item">
              <a href="#calendario">Calendario</a>
            </div>
          </div>
        </div>
        <div className="center-things">
          <div className="title">
            <div>Gruppo scout FSE<br></br> Mons. Andrea Ghetti</div>
            <div style={{color: "#e65555"}}>LESMO 1°</div>
          </div>
          <img src={logo} />
        </div>
      </div>
    );
  }
}
