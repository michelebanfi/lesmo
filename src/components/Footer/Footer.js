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
                Lorenzo Radaelli <br></br>mail: dottorradaelli@gmail.com
                <br></br> tel: 3334269003
              </div>
            </div>
            <div>
              <div>
                <h5>Esploratori:</h5>
                Dimitri Colombo<br></br>
                mail: riparto.lesmo@gmail.com
                <br></br>
                tel: 3386572581
              </div>
            </div>
            <div>
              <div>
                <h5>Lupetti:</h5>
                Francesco Pirotta
                <br></br>mail: lupetti.lesmo@gmail.com<br></br>
                tel: 3703457487
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Via Volta, 35, 20855 Lesmo MB</p>
            </div>
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.3375084070901!2d9.289845191868263!3d45.64379195445929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM4JzM3LjciTiA5wrAxNycyNS41IkU!5e0!3m2!1sit!2sit!4v1586445835497!5m2!1sit!2sit"
              }
            style={{height: "50vh", width: "50vh"}}></iframe>
          </div>
        </div>
      </>
    );
  }
}
