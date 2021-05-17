import React, { Component } from "react";
import Associazione from "./components/Associazione/Associazione";
import Thumbail from "./components/Thumbnail/Thumbnail";
import Branche from "./components/Branche/Branche";
import Footer from "./components/Footer/Footer";
import Separator from "./media/separator.svg";
import Separator2 from "./media/separator2.svg";

import "./app.css"

export default class App extends Component {
  render() {
    return (
      <>
        <Thumbail />
        <Associazione />
        <Branche />
        <Footer />
      </>
    );
  }
}
