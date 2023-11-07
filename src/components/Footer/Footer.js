import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div id="contatti" className="footer-contatti">
          <div>
            <div>
              <div>
                <h5>Gruppo:</h5>
                Michele Banfi <br></br>mail: scoutlesmo@gmail.com
                <br></br> tel: 3388306095
              </div>
            </div>
            <div>
              <div>
                <h5>Esploratori:</h5>
                Francesco Leoni<br></br>
                mail: riparto.lesmo@gmail.com
                <br></br>
                tel: 3493041615
              </div>
            </div>
            <div>
              <div>
                <h5>Lupetti:</h5>
                Riccardo Riva
                <br></br>mail: lupetti.lesmo@gmail.com<br></br>
                tel: 3423591288
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Via Rapazzini, 1, 20855 Lesmo MB</p>
            </div>
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.8360583192034!2d9.302467177035949!3d45.634029622090225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bb35272cf547%3A0xc12c67ae68c10271!2sGruppo%20Scout%20Lesmo%201!5e0!3m2!1sit!2sit!4v1699372603433!5m2!1sit!2sit"
              }
              style={{ height: "50vh", width: "50vh" }}
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}
