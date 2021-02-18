import React, { Component } from "react";
import "./thumbanil.css";
import image from "./../../media/background.jpg";

export default class Thumbnail extends Component {
  render() {
    return (
      <div >
        <div className="title">
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
          </div>
        </div>
        <div className="center-things">
          <div className="title">GRUPPO LESMO 1</div>
        </div>
      </div>
    );
  }
}
