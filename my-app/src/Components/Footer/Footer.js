import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row py-5 row-footer">
            <div className="col-lg-4">
             
                <h6>TIZIM HAQIDA</h6>
                <div className="bottom"></div>
                <p className="my-4 py-2">
                  University Profile System axborot tizimi
                </p>
              
            </div>
            <div className="col-lg-4 mycol4">
              <div>
                <h6>FOYDALI HAVOLALAR</h6>
                <div className="bottom"></div>
                <ul className="p-0 my-4">
                  <li>
                    <a href="http://jurnal.tiiame.uz/oz/">
                      "Irrigatsiya va melioratsiya" ilmiy-texnik jurnali
                    </a>
                    <i className="fas fa-chevron-right float-end"></i>
                  </li>
                  <li>
                    <a href="http://sa.tiiame.uz/">
                      "Barqaror qishloq xo‘jaligi" ilmiy-texnik jurnali
                    </a>
                    <i className="fas fa-chevron-right float-end"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 pb-5">
              <div className='contacts'>
                <h6>BOG‘LANISH</h6>
                <div className="bottom"></div>
                <p className="mt-5 ">
                  <i className="fas fa-map-marker-alt myicon"></i> Toshkent
                  shahar, Qori Niyoziy ko‘chasi, 39-uy
                </p>
                <p className="d-flex align-items-center my-3">
                  <i className="fas fa-phone-alt myicon"></i>
                  <p className="m-0">
                    +99871 237-46-68 <br /> +99871 237-19-31
                  </p>
                </p>
                <p className="d-flex align-items-center">
                  <i className="fas fa-phone-alt myicon"></i>
                  <p className="m-0">
                    admin@tiiame.uz <br /> www.tiiame.uz
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
